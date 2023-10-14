import { Router } from 'express';
import { checkLogs, isLoggedIn } from '../models/Users.middleware';
import { SignIn } from 'models/Users.auth';
import { CreateAnswer, CreateQuest, DeleteQuest, GetQuests } from '../models/Question.controllers.js';
// import { ModelReq } from 'models/Predmodel.controller';

const helpRouter = Router();

helpRouter.route('/').get(GetQuests);
helpRouter.route('/create-quest').post(CreateQuest);
helpRouter.route('/create-answer').post(CreateAnswer);
helpRouter.route('/delete').delete(DeleteQuest);

export default helpRouter;
