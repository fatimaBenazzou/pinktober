declare interface UpdateFormValue {
	updateType: string;
	value: string | number | readonly string[] | undefined | boolean;
}
type InputRequiredFields<T> = {
	name: keyof T;
	label?: string;
	placeholder: string;
	type?: string;
	[key: string]: unknown;
};
