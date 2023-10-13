import { FieldInputProps } from "formik";
import { Add, Minus } from "iconsax-react";

export default function NumberInput({
	error,
	setValues,
	props,
	id = "",
	suffix,
	className = "w-14",
}: {
	setValues: (val: number) => void;
	props: FieldInputProps<number>;
	id?: string;
	error?: string;
	suffix?: string;
	className?: string;
}) {
	return (
		<div className="flex flex-col">
			<div className="flex py-2 justify-center items-center gap-2">
				<button
					type="button"
					className="btn btn-outline btn-xs rounded-full"
					onClick={() => {
						setValues(-1);
					}}
				>
					<Minus className="w-4 h-4" />
				</button>
				<div className="relative">
					<input
						id={id}
						className={`text-center input input-bordered ${className} ${error ? "input-error" : ""}`}
						type="number"
						{...props}
					/>
					{suffix ? (
						<label className="label absolute right-4 inset-y-1/4" htmlFor={id}>
							{suffix}
						</label>
					) : null}
				</div>
				<button
					type="button"
					className="btn btn-outline btn-xs rounded-full"
					onClick={() => {
						setValues(1);
					}}
				>
					<Add className="w-4 h-4" />
				</button>
			</div>
			{error && (
				<label htmlFor={id} className="text-center">
					<span className="label-text-alt text-error ">{error}</span>
				</label>
			)}
		</div>
	);
}
