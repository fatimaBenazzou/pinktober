import { Router } from "express";
import { GetUser, Logout, SignIn } from "../models/Users.auth";
import { checkLogs, isLoggedIn } from "../models/Users.middleware";
import { CheckRest, CreateReset, ResetPassword } from "../models/Reset.controllers";

const authRouter = Router();

authRouter.route("/login").post(SignIn);
authRouter.post("/logout", checkLogs, isLoggedIn, Logout);
authRouter.route("/").get(checkLogs, isLoggedIn, GetUser);
authRouter.route("/reset").post(CreateReset);
authRouter.route("/reset/:resetId").get(CheckRest).put(ResetPassword);

export default authRouter;
