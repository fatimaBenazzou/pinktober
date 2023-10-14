import { Request, Response } from 'express';
import questionModel, { QuestionI } from './Question';
import { ErrorResponse, SuccessResponse } from '../utils/Response';
import { ObjectId } from 'mongodb';
import { HttpCodes } from '../config/Errors';

// Get all questions
export const GetQuests = async (req: Request, res: Response) => {
  try {
    const questions = await questionModel.find();
    return SuccessResponse(
      res,
      HttpCodes.OK.code,
      questions,
      'get questions successfully.'
    );
  } catch (error) {
    return ErrorResponse(
      res,
      HttpCodes.InternalServerError.code,
      'Failed to get questions.',
      error
    );
  }
};

// Create a new question
export const CreateQuest = async (req: Request, res: Response) => {
  const { userId, question } = req.body;

  try {
    const newQuestion = new questionModel({
      userId,
      question,
    });
    const savedQuestion = await newQuestion.save();
    return SuccessResponse(
      res,
      HttpCodes.Created.code,
      savedQuestion,
      'Created question successfully.'
    );
  } catch (error) {
    return ErrorResponse(
      res,
      HttpCodes.InternalServerError.code,
      'Failed to create question.',
      error
    );
  }
};

// Delete a question by its ID
export const DeleteQuest = async (req: Request, res: Response) => {
  const { questionId } = req.body;
  try {
    const deletedQuestion = await questionModel.findByIdAndRemove(questionId);
    if (deletedQuestion) {
      return SuccessResponse(
        res,
        HttpCodes.OK.code,
        deletedQuestion,
        'Deleted question successfully.'
      );
    } else {
      return ErrorResponse(
        res,
        HttpCodes.NotFound.code,
        'Failed to delete question.'
      );
    }
  } catch (error) {
    return ErrorResponse(
      res,
      HttpCodes.InternalServerError.code,
      'Failed to delete question.',
      error
    );
  }
};

// Create a new answer
export const CreateAnswer = async (req: Request, res: Response) => {
  const { userId, questionId, answer } = req.body;

  try {
    const existingQuestion = await questionModel.findById(questionId);

    if (!existingQuestion) {
      return ErrorResponse(res, HttpCodes.NotFound.code, 'Question not found.');
    }

    const newAnswer = {
      userId: userId,
      answer: answer,
    };

    existingQuestion.answers.push(newAnswer);

    const updatedQuestion = await existingQuestion.save();

    return SuccessResponse(
      res,
      HttpCodes.Created.code,
      updatedQuestion,
      'Answer added successfully.'
    );
  } catch (error) {
    return ErrorResponse(
      res,
      HttpCodes.InternalServerError.code,
      'Failed to add answer.',
      error
    );
  }
};
