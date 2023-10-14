import { Router } from 'express';
import { Chat } from '../models/chat.controller';

const chatRouter = Router();

chatRouter.route('/').post(Chat);

export default chatRouter;
