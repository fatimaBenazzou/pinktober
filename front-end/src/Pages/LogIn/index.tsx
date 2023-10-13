import { Link } from "react-router-dom";
import LandingIntro from "./LandingIntro";

import { useNotification, useUser } from "@/hooks";
import { useLogOutMutation, useSignInMutation } from "@/app/backend/export/auth";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { Copyright } from "@/Components/Copyright";
import { Input } from "../../Components/Input";
import Logo from "@/Components/Logo";
import { Profile } from "iconsax-react";

const inputs: InputRequiredFields<UserAuthI>[] = [
	{
		required: true,
		type: "text",
		id: "username",
		// label: "Username",
		placeholder: "username",
		name: "username",
		className: "md:max-w-md",
		inputClassName: "md:max-w-md",
		autoComplete: "username",
		autoFocus: true,
		icon: <Profile className="w-5 h-5" />,
	},
	{
		required: true,
		name: "password",
		// label: "Password",
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
		onSubmit: (body: UserAuthI) => {
			AuthMethod(body)
				.unwrap()
				.then((response) => {
					const user = response.data;
					if (user) {
						setUser(user);
						Notify("Logged In", "welcome back.");
					} else {
						Logout()
							.unwrap()
							.then(() => {
								Errofy("Logged In", {
									message: "You aren't allowed to enter here with this account",
								});
							});
					}
				})
				.catch((err) => {
					Errofy("Logged In", err);
				});
		},
	});

	const { errors, touched, getFieldProps, handleSubmit } = formik;

	return (
		<div className="min-h-screen bg-base-200 flex flex-col w-full">
			<div className="md:card mx-auto w-full max-w-5xl  md:shadow-xl md:mt-40 px-4 h-full">
				<div className="grid  md:grid-cols-2 grid-cols-1  md:bg-base-100 rounded-xl h-full ">
					<div className="hidden md:block">
						<LandingIntro />
					</div>
					<div className="md:py-24 px-10 flex flex-col gap-6 h-full justify-center mt-12">
						<Logo />
						<div className="flex mt-12 gap-4">
							<h1 className="text-3xl font-bold">Login to your profile </h1>
							<div>
								<img src="/public/3d-fluency-hand-with-pen-writing 1.png" />
							</div>
						</div>

						<p className="">Access to your account so you can manage your money even faster</p>

						<FormikProvider value={formik}>
							<Form onSubmit={handleSubmit} className="h-full w-full md:mx-0 md:w-full flex flex-col justify-between">
								<div>
									{inputs.map(({ name, type = "text", ...props }, i) => (
										<Input
											className=""
											key={i}
											{...props}
											type={type}
											error={touched[name] && errors[name] ? errors[name] : undefined}
											props={getFieldProps(name)}
										/>
									))}

									<div className="form-control w-full md:max-w-md">
										<label className="label cursor-pointer relative">
											<input
												{...getFieldProps("stay")}
												type="checkbox"
												className="checkbox checkbox-sm absolute top-4"
											/>
										</label>
										<div className="label-text ml-8">
											<p className="mb-4 ">I’m at least 18 years old and agree to the following terms:</p>
											<p>
												By checking, I’ve read and agree to the{" "}
												<span className="text-secondary">Terms and conditions of service.</span>
											</p>
										</div>
									</div>
								</div>

								<div className="mt-8 mb-12">
									<button type="submit" className="btn btn-primary mt-auto w-full " disabled={isLoading}>
										{isLoading ? (
											<>
												<span className="loading loading-spinner"></span>
												Loading
											</>
										) : (
											"Continue"
										)}
									</button>
									<Link to="/forgot-password">
										<span className="w-full text-center inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200 mt-2">
											Forgot password?
										</span>
									</Link>
								</div>
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
