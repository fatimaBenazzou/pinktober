import { TextFieldProps } from "@/types/Forms";

export default function InputNew({
	className,
	label,
	placeholder,
	name,
	type,
	enums,
	touched,
	id,
	disabled,
	errors,
	prefix,
	suffix,
	getFieldProps,
}: {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	touched: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	errors: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getFieldProps: any;
} & TextFieldProps) {
	const definedError = name.split(".").reduce((acc, key) => (typeof acc === "object" && Object.hasOwn(acc, key) ? acc[key] : ""), errors);
	const error = name.split(".").reduce((acc, key) => (typeof acc === "object" && Object.hasOwn(acc, key) ? acc[key] : false), touched)
		? String(definedError)
		: undefined;

	return (
		<div className={`form-control ${className}`}>
			<label htmlFor={id} className="label">
				<span className="label-text font-semibold text-secondary">{label}</span>
			</label>
			{type === "textarea" ? (
				<textarea
					id={id}
					disabled={disabled}
					className="textarea textarea-bordered min-h-[100px] w-full"
					placeholder={placeholder}
					{...getFieldProps(String(name))}
				></textarea>
			) : type === "select" ? (
				<select id={id} className="select select-bordered w-full" disabled={disabled} {...getFieldProps(String(name))}>
					{enums?.map((option, i) => (
						<option key={id + option.label + i} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			) : (
				<div className="join w-full">
					{prefix && (
						<label htmlFor={id} className="btn btn-outline border-gray-300 join-item ">
							{prefix}
						</label>
					)}
					<input
						type={type}
						id={id}
						placeholder={placeholder}
						className={`input input-bordered join-item w-full ${error ? "input-error" : ""}`}
						disabled={disabled}
						{...getFieldProps(String(name))}
					/>
					{suffix && (
						<label htmlFor={id} className="btn btn-outline border-gray-300 join-item ">
							{suffix}
						</label>
					)}
				</div>
			)}
			{error && (
				<label className="label">
					<span className="label-text-alt text-error">{error ? String(error) : undefined}</span>
				</label>
			)}
		</div>
	);
}
