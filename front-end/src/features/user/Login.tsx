import { Link } from "react-router-dom";
import LandingIntro from "./LandingIntro";

import { useNotification, useUser } from "../../hooks";
import { useLogOutMutation, useSignInMutation } from "../../app/backend/export/auth";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { Copyright } from "@/Components/Copyright";
import useStoreDesk from "@/hooks/useStoreDesk";

const inputs: {
	name: keyof UserAuthI;
	label: string;
	placeholder: string;
	type: string;
	[key: string]: unknown;
}[] = [
	{
		required: true,
		type: "text",
		id: "username",
		label: "Username",
		placeholder: "username",
		name: "username",
		autoComplete: "username",
		autoFocus: true,
	},
	{
		required: true,

		name: "password",
		label: "Password",
		placeholder: "password",
		type: "password",
		id: "password",
		autoComplete: "current-password",
	},
];

function Login() {
	const [AuthMethod, { isLoading }] = useSignInMutation();
	const [Logout] = useLogOutMutation();
	const { setUser } = useUser();
	const { setDesks, removeDesk } = useStoreDesk();
	const { Notify, Errofy } = useNotification();

	const formik = useFormik<UserAuthI>({
		initialValues: {
			username: "",
			password: "",
			stay: false,
		},
		validationSchema: Yup.object().shape({
			username: Yup.string().required("You have to provide a username"),
			password: Yup.string().required("You have to provide a password"),
			stay: Yup.boolean(),
		}),
		validateOnChange: true,
		onSubmit: (body) => {
			AuthMethod(body)
				.unwrap()
				.then((response) => {
					const user = response.data;
					console.log(user);
					if (user && user.kind === "Admin") {
						setDesks(user.desks);
						setUser(user);
						Notify("Logged In", "welcome back.");
					} else {
						Logout()
							.unwrap()
							.then(() => {
								removeDesk();
								Errofy("Wrong type of users", { message: "You aren't allowed to enter here with this account" });
							});
					}
				})
				.catch((err) => {
					removeDesk();
					Errofy("Logging In", err);
				});
		},
	});

	const { errors, touched, getFieldProps, handleSubmit } = formik;

	return (
		<div className="min-h-screen bg-base-200 flex flex-col justify-center">
			<div className="card mx-auto w-full max-w-5xl  shadow-xl">
				<div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
					<div className="">
						<LandingIntro />
					</div>
					<div className="py-24 px-10">
						<h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
						<FormikProvider value={formik}>
							<Form onSubmit={handleSubmit}>
								<>
									{inputs.map(({ name, label, placeholder, type = "text" /*, ...props */ }, i) => (
										<div key={i} className="form-control w-full max-w-sm">
											<label className="label">
												<span className="label-text">{label}</span>
											</label>
											<input
												type={type}
												placeholder={placeholder}
												className="input input-bordered w-full max-w-sm"
												{...getFieldProps(String(name))}
											/>
											<label className="label">
												<span className="label-text-alt">
													{touched[name] && errors[name] ? String(errors[name]) : undefined}
												</span>
											</label>
										</div>
									))}
								</>

								<div className="form-control w-full max-w-sm">
									<label className="label cursor-pointer">
										<span className="label-text">Remember me</span>
										<input {...getFieldProps("stay")} type="checkbox" className="checkbox checkbox-sm" />
									</label>
								</div>

								<button type="submit" className="btn btn-primary mt-2 w-full " disabled={isLoading}>
									{isLoading ? (
										<>
											<span className="loading loading-spinner"></span>Loading
										</>
									) : (
										"Login"
									)}
								</button>
								<Link to="/forgot-password">
									<span className="w-full text-center inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200 mt-2">
										Forgot password?
									</span>
								</Link>
							</Form>
						</FormikProvider>
					</div>
				</div>
			</div>
			<Copyright />
		</div>
	);
}

export default Login;
