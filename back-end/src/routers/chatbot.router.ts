import { Router } from 'express';
import { Chat } from '../models/chat.controller';

const chatbotRouter = Router();

chatbotRouter.route('/').post(Chat);

export default chatbotRouter;
