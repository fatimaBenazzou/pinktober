import { BuilderI } from "@/types/redux";

export default function chat(builder: BuilderI) {
	return {
		askChat: builder.mutation<ResponseI<ChatI>, string>({
			query: (message) => ({
				url: "/chat",
				method: "POST",
				body: { message },
			}),
		}),
		// get all messages
		getAllMessages: builder.query<ResponseI<MessageI[]>, void>({
			query: () => ({
				url: "/chat",
				method: "GET",
			}),
		}),
	};
}
