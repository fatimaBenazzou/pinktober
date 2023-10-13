import { Router } from "express";
import upload, { UploadFile, DeleteFile } from "./files.handler.js";
//import { checkLogs, isAdmin, isLoggedIn } from "../models/Users.middleware.js";

const router = Router();

/* router.all("*", checkLogs, loggedIn /* ,hasRole(["S", "A"]) * /); */

router.route("/").post(upload.single("file"), UploadFile).delete(DeleteFile);
console.log("🗃️ Files upload is on");
export default router;
