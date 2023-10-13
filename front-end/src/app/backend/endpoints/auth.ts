import { AuthI } from "@/types/Forms";
import { BuilderI } from "@/types/redux";

export default function auth(builder: BuilderI) {
	return {
		/* Sign In */
		signIn: builder.mutation<ResponseI<UserI>, UserAuthI>({
			query: (userAuth) => ({
				url: "/auth/login",
				method: "POST",
				body: userAuth,
			}),
		}),
		/* Sign Up / Register */
		/* signUp: builder.mutation<User, { body: SignUpValues }>({
            query: ({ body }) => ({
                url: "/signup",
                method: "POST",
                body,
            }),
        }), */
		/* Log out */
		logOut: builder.mutation<ResponseI<null>, void>({
			query: () => ({
				url: "/auth/logout",
				method: "POST",
			}),
		}),
		/* Get User Data */
		getUserData: builder.mutation<ResponseI<UserI>, void>({
			query: () => ({ url: "/auth", method: "GET" }),
		}),
		/* Edit User Data */
		/*  editUser: builder.mutation<UserI, EditableUser>({
            query: (body) => ({ url: "/user", method: "PUT", body }),
        }), */
		checkEmail: builder.mutation<ResponseI<boolean>, string>({
			query: (email) => ({
				url: "/email",
				method: "POST",
				body: { email },
			}),
		}),
		checkPhone: builder.mutation<ResponseI<boolean>, string>({
			query: (phone) => ({
				url: "/phone",
				method: "POST",
				body: { phone },
			}),
		}),

		resetPassword: builder.mutation<ResponseI<unknown>, { id: string; body: AuthI }>({
			query: ({ id, body }) => ({
				url: "/recover/" + id,
				method: "POST",
				body,
			}),
		}),
		createReset: builder.mutation<ResponseI<unknown>, unknown>({
			query: (body) => ({
				url: "/recover/",
				method: "POST",
				body,
			}),
		}),
	};
}
