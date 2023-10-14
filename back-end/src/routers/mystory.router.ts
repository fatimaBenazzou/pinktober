import { Router } from 'express';
import { CreateStory, DeleteStory, GetStories, UpdateStory } from '../models/Mystory.contorllers.js';

const mystoryRouter = Router();

mystoryRouter.route('/').get(GetStories);
mystoryRouter.route('/create').post(CreateStory);
mystoryRouter.route('/update').patch(UpdateStory);
mystoryRouter.route('/delete').delete(DeleteStory);

export default mystoryRouter;
