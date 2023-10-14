import { Application } from 'express';
import indexRouter from './index.router.js';
import authRouter from './auth.router.js';
import profileRouter from './profile.router.js';
import notificationRouter from './notification.router.js';
import { checkLogs, isLoggedIn } from '../models/Users.middleware.js';
import predmodelRouter from './predmodel.router.js';
import helpRouter from './help.router.js';
import mystoryRouter from './mystory.router.js';

export default function SetRouters(app: Application) {
  app.use('/', indexRouter);
  app.use('/auth', authRouter);

  app.use('/profile', checkLogs, isLoggedIn, profileRouter);

  // app.use('/predmodel', predmodelRouter); //for testing
  app.use('/predmodel', checkLogs, isLoggedIn, predmodelRouter);

//   app.use('/help', helpRouter);
  app.use('/help', checkLogs, isLoggedIn, helpRouter);

//   app.use('/mystory', mystoryRouter);
  app.use('/mystory', checkLogs, isLoggedIn, mystoryRouter);

  // clients or deliveryman
  app.use('/notification', checkLogs, isLoggedIn, notificationRouter);
}
