import { Request, Response } from 'express';
import mystoryModel, { MystoryI } from './Mystory';
import { ErrorResponse, SuccessResponse } from '../utils/Response';
import { HttpCodes } from '../config/Errors';
// Get all questions
export const GetStories = async (req: Request, res: Response) => {
  try {
    const stories = await mystoryModel.find();
    return SuccessResponse(
      res,
      HttpCodes.OK.code,
      stories,
      'get stories successfully.'
    );
  } catch (error) {
    return ErrorResponse(
      res,
      HttpCodes.InternalServerError.code,
      'Failed to get stories.',
      error
    );
  }
};

// Create a new question
export const CreateStory = async (req: Request, res: Response) => {
  const { userId, story } = req.body;

  try {
    const newStory = new mystoryModel({
      userId,
      story,
    });
    const savedStory = await newStory.save();
    return SuccessResponse(
      res,
      HttpCodes.Created.code,
      savedStory,
      'Created story successfully.'
    );
  } catch (error) {
    return ErrorResponse(
      res,
      HttpCodes.InternalServerError.code,
      'Failed to create story.',
      error
    );
  }
};

// Delete a question by its ID
export const DeleteStory = async (req: Request, res: Response) => {
  const { storyId } = req.body;

  try {
    const deletedStory = await mystoryModel.findByIdAndRemove(storyId);
    if (deletedStory) {
      return SuccessResponse(
        res,
        HttpCodes.OK.code,
        deletedStory,
        'Deleted story successfully.'
      );
    } else {
      return ErrorResponse(
        res,
        HttpCodes.NotFound.code,
        'Failed to delete story.'
      );
    }
  } catch (error) {
    return ErrorResponse(
      res,
      HttpCodes.InternalServerError.code,
      'Failed to delete story.',
      error
    );
  }
};

//Update story
export const UpdateStory = async (req: Request, res: Response) => {
  const { storyId, newStory } = req.body;
  try {
    const updatedStory = await mystoryModel.findByIdAndUpdate(
      storyId,
      { story: newStory },
      { new: true }
    );

    if (updatedStory) {
      return SuccessResponse(
        res,
        HttpCodes.OK.code,
        updatedStory,
        'Story updated (patched) successfully.'
      );
    } else {
      return ErrorResponse(res, HttpCodes.NotFound.code, 'Story not found.');
    }
  } catch (error) {
    return ErrorResponse(
      res,
      HttpCodes.InternalServerError.code,
      'Failed to update (patch) story.',
      error
    );
  }
};
