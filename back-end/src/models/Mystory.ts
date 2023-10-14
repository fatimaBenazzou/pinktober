import { Document, Model, Schema, Types, model } from 'mongoose';

export interface MystoryI {
  userId: string;
  story: string;
}

export type MystoryModel = Model<MystoryI>;

export const mystorySchema = new Schema<MystoryI>({
  userId: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
});

const mystoryModel = model<MystoryI, MystoryModel>('Story', mystorySchema);
export default mystoryModel;
