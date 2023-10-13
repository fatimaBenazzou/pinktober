import { Request, Response } from "express";
import { ErrorResponse, SuccessResponse } from "../utils/Response";
import { HttpCodes } from "../config/Errors";
import messageModel, { MessageD } from "./Message";

import OpenAI from "openai";

import { MyRequest } from "../types/Express";
import { ChatCompletionMessage } from "openai/resources/chat";
const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

// get notifications for client or DeliveryMan
export const Chat = async (req: MyRequest, res: Response) => {
	try {
		if (!openai.apiKey) {
			return ErrorResponse(res, HttpCodes.InternalServerError.code, "OpenAI API Key not configured");
		}

		if (!req.body.message) {
			return ErrorResponse(res, HttpCodes.InternalServerError.code, "No messages have been intered");
		}
		const message = req.body.message;
        
		await messageModel.create({ user: req.user?._id, chat: { role: "user", content: message } });
		const messages = await messageModel.find({ user: req.user?._id }).lean();
		let mRequests: ChatCompletionMessage[] = messages.map((message) => message.chat);
		mRequests = [
			{
				role: "system",
				content:
					"you are a bot that is dedicated to providing comprehensive and user-friendly information only on breast cancer prevention, detection, and support. This model should be proficient in answering questions and providing guidance on various aspects of breast health, including self-examinations, mammograms, risk factors, and lifestyle choices. The information should be presented in a clear, actionable, and empathetic manner, tailored to the user's individual circumstances whenever possible. The model should prioritize evidence-based practices, ensuring that the advice is medically accurate and reliable. Please outline the steps you would take to train and fine-tune this model, as well as any authoritative sources or guidelines you would use to ensure the precision and trustworthiness of the breast cancer information provided. if the question is not about breast cancer prevention, detection, support, surgery, hormone therapy, chemotherapy, mammogram, lump, biopsy,BRCA2, BRCA1 or or any thing in this context it should respond with : 'i'm  specialize in questions about breast cancer, its prevention, detection, and support. Feel free to ask me any questions on this topic.' ",
			},
			{
				role: "user",
				content:
					"you are a bot that is dedicated to providing comprehensive and user-friendly information only on breast cancer prevention, detection, and support. This model should be proficient in answering questions and providing guidance on various aspects of breast health, including self-examinations, mammograms, risk factors, and lifestyle choices. The information should be presented in a clear, actionable, and empathetic manner, tailored to the user's individual circumstances whenever possible. The model should prioritize evidence-based practices, ensuring that the advice is medically accurate and reliable. Please outline the steps you would take to train and fine-tune this model, as well as any authoritative sources or guidelines you would use to ensure the precision and trustworthiness of the breast cancer information provided. if the question is not about breast cancer prevention, detection, support, surgery, hormone therapy, chemotherapy, mammogram, lump, biopsy,BRCA2, BRCA1 or or any thing in this context it should respond with : 'i'm  specialize in questions about breast cancer, its prevention, detection, and support. Feel free to ask me any questions on this topic.' ",
			},
			...mRequests,
		];

        
		const response = await openai.chat.completions.create({
			model: "gpt-3.5-turbo",
			messages: mRequests,
            // frequency_penalty: 0.2,
            // top_p: 3,
            // presence_penalty: 0.2,
            // stop: ["\nUser:", "\nbye"],
            // max_tokens: 80,
            // temperature: 0.5,
		});

		await messageModel.create({ user: req.user?._id, chat: response.choices[0].message });
		return SuccessResponse(res, HttpCodes.Accepted.code, response.choices[0].message, "Succeful chatgpt response");
	} catch (error) {
		return ErrorResponse(res, HttpCodes.InternalServerError.code, "Failed to fetch notifications.", error);
	}
};

// get all messages for user
export const getAllMessages = async (req: MyRequest, res: Response) => {
	try {
		console.log(" get all messages", req.user?._id);
		const messages = await messageModel.find({ user: req.user?._id }).lean();
		return SuccessResponse(res, HttpCodes.Accepted.code, messages, "Successful get all messages");
	} catch (error) {
		return ErrorResponse(res, HttpCodes.InternalServerError.code, "Failed to fetch notifications.", error);
	}
};
