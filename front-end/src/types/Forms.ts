import { SignInType } from "@/app/backend/export/auth";
import { Schema } from "yup";
interface SelectOptionI {
	value: string | number;
	label: string;
}
export interface TextFieldProps<T extends object | null = null> {
	autoComplete?: string;
	className?: string;
	autoFocus?: boolean;
	disabled?: boolean;
	error?: boolean;
	fullWidth?: boolean;
	helperText?: React.ReactNode;
	id?: string;
	label: string;
	name: T extends object ? keyof T : string;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	placeholder: string;
	readOnly?: boolean;
	required?: boolean;
	type: string;
	step?: number;
	value?: string;
	enums?: SelectOptionI[];
	prefix?: JSX.Element | string;
	suffix?: JSX.Element | string;
}

export type AuthI<T extends UserAuthI = UserAuthI> = {
	useMutation: SignInType;
	validationSchema: Schema;
	initialValues: T;
	inputs: TextFieldProps<T>[];
	message?: Message;
	children?: React.ReactNode;
	rememberMe?: boolean;
};
