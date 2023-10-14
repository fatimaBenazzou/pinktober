import { Router } from 'express';
import { checkLogs, isLoggedIn } from '../models/Users.middleware';
import { SignIn } from 'models/Users.auth';
import { Modelreq } from './predmodel.handler';
// import { ModelReq } from 'models/Predmodel.controller';

const predmodelRouter = Router();

predmodelRouter.route('/').post(Modelreq);

export default predmodelRouter;
