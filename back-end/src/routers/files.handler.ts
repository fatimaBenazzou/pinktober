import { NextFunction, Request, Response } from "express";
import multer, { FileFilterCallback } from "multer";

import { StaticRoot } from "../config/Env.js";
import fs from "fs/promises";
import path from "path";
import { ErrorResponse, SuccessResponse } from "../utils/Response.js";
import { HttpCodes } from "../config/Errors.js";
import { MyFileRequest } from "../types/Express.js";

export const fileStorage = multer.diskStorage({
	destination: (req, file, callback) => {
		const location = req.query.location ? String(req.query.location) : "";
		const destination = path.join(StaticRoot, "uploads", location);
		// create folder if not exists
		fs.mkdir(destination, { recursive: true })
			.then(() => {
				callback(null, destination);
			})
			.catch((e) => {
				callback({ name: "Creating Folder", message: e.message }, destination);
			});
	},
	filename: (_, file, callback) => {
		var name = Date.now() + path.extname(file.originalname);
		callback(null, name);
	},
});

export const fileFilter = (request: Request, file: Express.Multer.File, callback: FileFilterCallback): void => {
	if (
		file.mimetype === "image/png" ||
		file.mimetype === "image/jpg" ||
		file.mimetype === "image/jpeg" ||
		file.mimetype === "application/pdf"
	) {
		callback(null, true);
	} else {
		callback(new Error(`Invalid file type ${file.mimetype}`));
	}
};

export const UploadFile = (req: MyFileRequest, res: Response) => {
	if (!req.file) return ErrorResponse(res, HttpCodes.BadRequest.code, "No file received");
	return SuccessResponse(
		res,
		HttpCodes.Accepted.code,
		{
			name: req.file.filename,
			originalname: req.file.originalname,
			location: req.query.location,
			size: req.file.size,
			url: `${req.protocol}://${req.get("host")}/uploads/${req.query.location ? req.query.location + "/" : ""}${req.file.filename}`,
		},
		`File ${req.file.originalname} has been uploaded`
	);
};

export const DeleteFile = (req: Request, res: Response, next: NextFunction) => {
	const { name } = req.body;
	const p = path.join(StaticRoot, "uploads", name);
	fs.unlink(p)
		.then(() => {
			res.json({
				name: "Deleting File",
				message: "File has been deleted",
			});
		})
		.catch((e) => {
			next({ name: "Deleting File", message: e.message });
		});
};

const upload = multer({ storage: fileStorage, fileFilter: fileFilter });
export default upload;
