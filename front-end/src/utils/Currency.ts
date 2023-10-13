const DZD: Record<LangI, Intl.NumberFormat> = {
	EN: new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "DZD",
	}),
	FR: new Intl.NumberFormat("fr-FR", {
		style: "currency",
		currency: "DZD",
	}),
	AR: new Intl.NumberFormat("ar-DZ", {
		style: "currency",
		currency: "DZD",
	}),
};
export default DZD;
