import { Request, Response } from 'express';
import questionModel, { QuestionI } from './Question';
import { ErrorResponse, SuccessResponse } from '../utils/Response';
import { ObjectId } from 'mongodb';

// Get all questions
export const GetQuests = async (req: Request, res: Response) => {
  try {
    const questions = await questionModel.find();
    // res.status(200).json(questions);
    return SuccessResponse(res, 200, questions, 'get questions successfully.');
  } catch (error) {
    // res.status(500).json({ error: 'Server error' });
    return ErrorResponse(res, 500, 'Failed to get questions.', error);
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
      201,
      savedQuestion,
      'Created question successfully.'
    );
  } catch (error) {
    return ErrorResponse(res, 500, 'Failed to create question.', error);
  }
};

// Delete a question by its ID
export const DeleteQuest = async (req: Request, res: Response) => {
  const {questionId} = req.body; // Assuming you pass the question ID in the request parameters

  try {
    const deletedQuestion = await questionModel.findByIdAndRemove(questionId);
    if (deletedQuestion) {
      //   res.status(200).json({ message: 'Question deleted successfully' });
      return SuccessResponse(
        res,
        200,
        deletedQuestion,
        'Deleted question successfully.'
      );
    } else {
      //   res.status(404).json({ error: 'Question not found' });
      return ErrorResponse(res, 404, 'Failed to delete question.');
    }
  } catch (error) {
    // res.status(500).json({ error: 'Server error' });
    return ErrorResponse(res, 500, 'Failed to delete question.', error);
  }
};

export const CreateAnswer = async (req: Request, res: Response) => {
  const { userId, questionId, answer } = req.body;

  try {
    const existingQuestion = await questionModel.findById(questionId);

    if (!existingQuestion) {
      return ErrorResponse(res, 404, 'Question not found.');
    }

    const newAnswer = {
      userId : userId,
      answer : answer,
    };

    existingQuestion.answers.push(newAnswer);

    const updatedQuestion = await existingQuestion.save();

    return SuccessResponse(
      res,
      201,
      updatedQuestion,
      'Answer added successfully.'
    );
  } catch (error) {
    return ErrorResponse(res, 500, 'Failed to add answer.', error);
  }
};