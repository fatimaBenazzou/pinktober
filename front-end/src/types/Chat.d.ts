declare interface ChatI {
	content: string;
	role: "system" | "user" | "assistant" | "function";
}
declare interface MessageI {
	user: string;
	chat: ChatI;
}
