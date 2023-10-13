import { BuilderI } from "@/types/redux";

export default function tools(builder: BuilderI) {
	return {
		uploadFile: builder.mutation<ResponseI<MyFile>, { body: FormData; location?: string }>({
			query: ({ body, location }) => ({
				// add location to query if it exists
				url: `/files${location ? `?location=${location}` : ""}`,
				method: "POST",
				body,
			}),
		}),
		deleteFile: builder.mutation<ResponseI, { name: string }>({
			query: ({ name }) => ({
				url: `/files`,
				method: "DELETE",
				body: { name },
			}),
		}),
	};
}
