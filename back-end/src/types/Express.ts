import { Request } from "express";
import { UserD } from "models/Users";

export interface MyRequest extends Request {
	user?: null | UserD;
}
export interface MyFileRequest extends Request {
	file?: Express.Multer.File;
}
