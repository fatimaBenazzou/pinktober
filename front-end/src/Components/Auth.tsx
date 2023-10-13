import { useFormik, Form, FormikProvider } from "formik";
import { useNotification, useUser } from "@/hooks";
import { AuthI } from "@/types/Forms";

function Auth<T extends UserAuthI = UserAuthI>({
	useMutation,
	validationSchema,
	initialValues,
	message,
	children,
	rememberMe = false,
	inputs,
}: AuthI<T>) {
	const [AuthMethod, { isLoading }] = useMutation();
	const { setUser } = useUser();
	const { Notify, Errofy } = useNotification();
	const formik = useFormik<T>({
		initialValues,
		validationSchema,
		validateOnChange: true,
		onSubmit: (body: T) => {
			AuthMethod(body)
				.unwrap()
				.then((response) => {
					setUser(response.data);
					if (message) Notify(message.name, message.message);
				})
				.catch((err) => {
					console.error(err);
					Errofy("Login back", { message: "Couldn't log in, Session ended." });
				});
		},
	});
	const { errors, touched, getFieldProps, handleSubmit } = formik;
	return (
		<FormikProvider value={formik}>
			<Form onSubmit={handleSubmit} noValidate className="flex items-center w-[100%] flex-col">
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
							<span className="label-text-alt">{touched[name] && errors[name] ? String(errors[name]) : undefined}</span>
						</label>
					</div>
				))}
				{rememberMe && (
					<div className="form-control w-full max-w-sm">
						<label className="label cursor-pointer">
							<span className="label-text">Remember me</span>
							<input {...getFieldProps("stay")} type="checkbox" className="checkbox checkbox-sm" />
						</label>
					</div>
				)}
				<button disabled={isLoading} type="submit" className="btn btn-neutral w-full max-w-sm mt-4">
					{isLoading && <span className="loading loading-spinner"></span>}
					Sign In
				</button>
				{children}
			</Form>
		</FormikProvider>
	);
}

export default Auth;
