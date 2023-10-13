import { Router } from "express";
// import { GetUser, Logout, SignIn } from "../models/Users.auth";
import { checkLogs, isLoggedIn } from "../models/Users.middleware";
// import { CheckRest, CreateReset, ResetPassword } from "../models/Reset.controllers";
import { Chat, getAllMessages } from "../models/chat.controller.js";

const chatRouter = Router();

chatRouter.route("/").get(checkLogs, isLoggedIn, getAllMessages).post(checkLogs, isLoggedIn, Chat);

export default chatRouter;
