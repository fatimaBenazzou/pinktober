import { Application } from 'express';
import indexRouter from './index.router.js';
import authRouter from './auth.router.js';
import profileRouter from './profile.router.js';
import { checkLogs, isLoggedIn } from '../models/Users.middleware.js';
import predmodelRouter from './predmodel.router.js';
import helpRouter from './help.router.js';
import mystoryRouter from './mystory.router.js';
import chatbotRouter from './chatbot.router.js';

export default function SetRouters(app: Application) {
  app.use('/', indexRouter);
  app.use('/auth', authRouter);

  app.use('/profile', checkLogs, isLoggedIn, profileRouter);

  app.use('/predmodel', checkLogs, isLoggedIn, predmodelRouter);

  app.use('/help', checkLogs, isLoggedIn, helpRouter);

  app.use('/mystory', checkLogs, isLoggedIn, mystoryRouter);

  app.use('/chatbot', checkLogs, isLoggedIn, chatbotRouter);

}
