interface TimeStamp {
	_id: string;
	createdAt: Date;
	updatedAt: Date;
}

interface Message {
	name: string;
	message: string;
}
interface ErrorI {
	name: string;
	message: string;
}
declare module "*.module.scss" {
	const value: Record<string, string>;
	export default value;
}

declare interface ModalI<T = object> {
	title: string;
	bodyType: string;
	size?: string;
	extraObject?: NonNullable<T>;
}
declare interface OpenableModalI<T = object> extends ModalI<T> {
	isOpen: boolean;
	extraObject: NonNullable<T>;
}
declare interface DrawerI {
	header: string;
	bodyType: string;
	extraObject?: object;
}
declare interface OpenableDrawerI extends DrawerI {
	isOpen: boolean;
	extraObject: object;
}
type ObligedLanguagesI = "EN";
type LanguagesI = "FR" | "AR";
type LangI = ObligedLanguagesI | LanguagesI;
declare type LangContentI = {
	[x in ObligedLanguagesI]: string;
} & {
	[key in LanguagesI]?: string;
};
type Subtract<T, U> = T & Exclude<T, U>;

declare type Keys<T extends object> = Exclude<keyof T, symbol | number>;

interface ProvinceCityI {
	id: number;
	name: LangContentI;
	post_code: string;
}
interface ProvinceI {
	id: number;
	name: LangContentI;
}
type SortOption<T> = {
	key: keyof T;
	label: string;
};

declare interface MyFile {
	name: string;
	originalname: string;
	location?: string;
	size: number;
	url: string;
}
declare interface ContractI {
	id: string;
	currentDesk: string;
	type: "extraction" | "return";
}
