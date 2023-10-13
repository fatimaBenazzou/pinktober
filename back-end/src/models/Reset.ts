import { Schema, Types, model } from "mongoose";
const required = true;
interface ResetI {
	email: string;
	user: Types.ObjectId;
	createdAt: Date;
	expiresAt: Date;
}

const resetSchema = new Schema<ResetI>(
	{
		email: { type: String, required },
		user: { type: Schema.Types.ObjectId, ref: "User", required },
	},
	{ timestamps: true }
);
// resetSchema add expire index to createdAt after 15min
resetSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });
const resetModel = model("Reset", resetSchema);
export default resetModel;
