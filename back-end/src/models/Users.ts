import { Model, Schema, model, Document, Types } from 'mongoose';
import bcrypt from 'bcrypt';
import { validateEmail } from '../functions/index';

const required = true;
export interface UserI extends UserAuthI {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: Date;
  enabled: boolean;
  deviceTokens: string[];
  Accounts: {
    Current?: Types.ObjectId;
    Savings?: Types.ObjectId;
    Investment?: Types.ObjectId;
    TermDeposit?: Types.ObjectId;
  };
}
export interface UserD extends Document<UserI>, UserI {
  comparePasswords(password: string): Promise<boolean>;
  Optimize(): Omit<UserD, 'password'>;
}
export interface UserModel extends Model<UserD> {
  findUser(id: string): Promise<any>;
}
const usersSchema = new Schema<UserI>(
  {
    username: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    enabled: {
      type: Boolean,
      default: false,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: validateEmail,
        message: 'Invalid email',
      },
    },
    password: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    phoneNumber: String,
    deviceTokens: { type: [String], default: [] },
    Accounts: {
      Current: { type: Schema.Types.ObjectId, ref: 'Account' },
      Savings: { type: Schema.Types.ObjectId, ref: 'Account' },
      Investment: { type: Schema.Types.ObjectId, ref: 'Account' },
      TermDeposit: { type: Schema.Types.ObjectId, ref: 'Account' },
    },
  },
  {
    timestamps: true,
  }
);

// Separate indexes for username, phone, and email fields
// usersSchema.index({ phone: 1 }, { unique: true });
usersSchema.index({ username: 1 }, { unique: true });
usersSchema.index({ email: 1 }, { unique: true });

usersSchema.pre('save', async function (next) {
  try {
    if (this.isNew || this.isModified('password')) {
      if (this.password.length < 8)
        throw new Error('Password must be at least 8 characters long');
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  } catch (err) {
    next(err as Error);
  }
});

usersSchema.set('toJSON', { virtuals: true });

usersSchema.methods.Optimize = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

usersSchema.methods.comparePasswords = async function (
  candidatePassword: string
) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    return false;
  }
};
const usersModel = model<UserI, UserModel>('Users', usersSchema);
export default usersModel;
// const user: UserI = {
// 	email: "batataRose@gmail.com",
// 	username: "batataRose",
// 	password: "12345678",
// 	firstName: "batata",
// 	lastName: "pink",
// 	phoneNumber: "0699999999",
// 	dateOfBirth: new Date(),
// 	enabled: true,
// 	deviceTokens: [],
// 	Accounts: {},
// };
// usersModel.create(user);
