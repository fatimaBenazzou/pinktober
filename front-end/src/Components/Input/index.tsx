import { FieldInputProps } from "formik";
import { Eye } from "iconsax-react";
import { useState } from "react";
// md:max-w-md
type InputI = {
	label?: string;
	type: string;
	placeholder: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	props: FieldInputProps<any>;
	error?: string;
	className?: string;
	inputClassName?: string;
	icon?: React.ReactNode;
	[key: string]: unknown;
};
export function Input({
	label,
	className = "",
	inputClassName = "",
	type: defaultType,
	placeholder,
	props,
	icon,
	error,
	...moreProps
}: InputI) {
	const [inputType, setInputType] = useState(defaultType === "password" ? "password" : defaultType);
	return (
		<div className={`form-control w-full  ${className}`}>
			{label && (
				<label className="label">
					<span className="label-text font-bold">{label}</span>
				</label>
			)}
			<div className="relative">
				<input
					type={inputType}
					placeholder={placeholder}
					className={`input input-bordered w-full ${inputClassName} ${error ? "input-error" : ""} `}
					{...moreProps}
					{...props}
				/>
				{defaultType === "password" ? (
					<button
						type="button"
						className="btn text-secondary btn-ghost btn-circle btn-sm absolute right-0 top-0 translate-y-1/4 -translate-x-1/4 focus:active:translate-y-1/4 focus:active:-translate-x-1/4  "
						onClick={() => {
							setInputType((i) => (i === "password" ? "text" : "password"));
						}}
					>
						<Eye className="w-5 h-5" />
					</button>
				) : icon ? (
					<div className="absolute right-0 top-0 translate-y-2/3 -translate-x-2/3">{icon}</div>
				) : (
					""
				)}
			</div>
			<label className="label">
				<span className={`label-text-alt text-error ${error ? "" : "h-0"}`}>{error ? error : undefined}</span>
			</label>
		</div>
	);
}
