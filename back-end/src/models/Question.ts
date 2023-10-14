import { ObjectId } from 'mongodb';
import { Document, Model, Schema, Types, model } from 'mongoose';

export interface QuestionI {
  userId: string;
  question: string;
  answers: [
    {
      userId: string;
      answer: string;
    }
  ];
}

export type QuestionModel = Model<QuestionI>;

export const questionsSchema = new Schema<QuestionI>({
  userId: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: [
      {
        userId: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
    default: [],
  },
});

const questionModel = model<QuestionI, QuestionModel>('Quest', questionsSchema);
export default questionModel;
