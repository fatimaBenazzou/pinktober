import { BuilderI } from "@/types/redux";

export default function notification(builder: BuilderI) {
	return {
		getNotificationsList: builder.mutation<ResponseI<ServerNotificationI[]>, { limit?: number; createdSince?: number }>({
			query: ({ limit, createdSince }) => {
				const searchParams = new URLSearchParams({
					limit: limit === undefined ? "" : String(limit),
					createdSince: createdSince === undefined ? "" : String(createdSince),
				});
				const url = `/notification?${searchParams.toString()}`;
				return {
					url,
					method: "Get",
				};
			},
		}),
	};
}
