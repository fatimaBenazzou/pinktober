import { Router } from "express";
import { updateProfile } from "../models/Users.auth.js";

const profileRouter = Router();

profileRouter.route("/").put(updateProfile);
export default profileRouter;
