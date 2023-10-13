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
            return ErrorResponse(
                res,
                HttpCodes.InternalServerError.code,
                "OpenAI API Key not configured"
            );
        }

        if (!req.body.message) {
            return ErrorResponse(
                res,
                HttpCodes.InternalServerError.code,
                "No messages have been intered"
            );
        }
        const message = req.body.message;

        // Enregistrez le message de l'utilisateur
        await messageModel.create({
            user: req.user?._id,
            content: message,
            role: "user",
        });

        const messages = await messageModel.find({ user: req.user?._id }).lean();
        let mRequests: ChatCompletionMessage[] = messages.map((message) => {
            return {
                role: message.role === "user" ? "user" : "assistant",
                content: message.content,
            };
        });

        mRequests = [
            {
                role: "user",
                content: "Quels sont les symptômes du cancer du sein?",
            },
            ...mRequests,
        ];

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: mRequests,
        });

		    // Enregistrez la réponse de l'assistant
        await messageModel.create({ 
			user: req.user?._id, 
			content: response.choices[0].message.content,
			role: response.choices[0].message.role,
		});

        return SuccessResponse(
            res,
            HttpCodes.Accepted.code,
            response.choices[0].message,
            "Succeful chatgpt response"
        );
    } catch (error) {
        return ErrorResponse(
            res,
            HttpCodes.InternalServerError.code,
            "Failed to fetch notifications.",
            error
        );
    }
};

// get all messages for user
// export const getAllMessages = async (req: MyRequest, res: Response) => {
//     try {
//         console.log(" get all messages", req.user?._id);
//         const messages = await messageModel.find({ user: req.user?._id }).lean();
//         return SuccessResponse(
//             res,
//             HttpCodes.Accepted.code,
//             messages,
//             "Successful get all messages"
//         );
//     } catch (error) {
//         return ErrorResponse(
//             res,
//             HttpCodes.InternalServerError.code,
//             "Failed to fetch notifications.",
//             error
//         );
//     }
// };
