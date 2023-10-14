import { Request, Response } from 'express';
import mystoryModel, { MystoryI } from './Mystory';
import { ErrorResponse, SuccessResponse } from '../utils/Response';

// Get all questions
export const GetStories = async (req: Request, res: Response) => {
  try {
    const stories = await mystoryModel.find();
    // res.status(200).json(stories);
    return SuccessResponse(res, 200, stories, 'get stories successfully.');
  } catch (error) {
    // res.status(500).json({ error: 'Server error' });
    return ErrorResponse(res, 500, 'Failed to get stories.', error);
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
    return SuccessResponse(res, 201, savedStory, 'Created story successfully.');
  } catch (error) {
    return ErrorResponse(res, 500, 'Failed to create story.', error);
  }
};

// Delete a question by its ID
export const DeleteStory = async (req: Request, res: Response) => {
  const {storyId} = req.body; 

  try {
    const deletedStory = await mystoryModel.findByIdAndRemove(storyId);
    if (deletedStory) {
      //   res.status(200).json({ message: 'story deleted successfully' });
      return SuccessResponse(
        res,
        200,
        deletedStory,
        'Deleted story successfully.'
      );
    } else {
      //   res.status(404).json({ error: 'story not found' });
      return ErrorResponse(res, 404, 'Failed to delete story.');
    }
  } catch (error) {
    // res.status(500).json({ error: 'Server error' });
    return ErrorResponse(res, 500, 'Failed to delete story.', error);
  }
};


export const UpdateStory = async (req: Request, res: Response) => {
  const { storyId, newStory } =  req.body; 
  try {
    const updatedStory = await mystoryModel.findByIdAndUpdate(
      storyId,
      { story:  newStory  },
      { new: true }
    );

    if (updatedStory) {
      return SuccessResponse(
        res,
        200,
        updatedStory,
        'Story updated (patched) successfully.'
      );
    } else {
      return ErrorResponse(res, 404, 'Story not found.');
    }
  } catch (error) {
    return ErrorResponse(res, 500, 'Failed to update (patch) story.', error);
  }
};