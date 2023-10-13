// import { Router } from "express";
// import { checkLogs, isLoggedIn } from "../models/Users.middleware";
// import { Chat, getAllMessages } from "../models/chat.controller.js";

// const chatRouter = Router();

// chatRouter.route("/").get(checkLogs, isLoggedIn, getAllMessages).post(checkLogs, isLoggedIn, Chat);

// export default chatRouter;
import { Router } from "express";
import { checkLogs, isLoggedIn } from "../models/Users.middleware";
import { Chat } from "../models/chat.controller.js";

const chatRouter = Router();

chatRouter.route("/").post(checkLogs, isLoggedIn, Chat);

export default chatRouter;
