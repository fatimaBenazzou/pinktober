import * as FileSaver from "file-saver";
import { Danger, ExportCurve } from "iconsax-react";
import { useState } from "react";
import * as XLSX from "xlsx";
import { useNotification } from "@/hooks";

const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const fileExtension = ".xlsx";
// type of Object that contains only string or number values

function ExportButton<T extends NonNullable<object>>({
	data,
	fileNameSuffix = "data",
	fileName = new Date().toLocaleDateString("En-uk", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	}),
}: {
	data: T[];
	fileName?: string;
	fileNameSuffix?: string;
}) {
	const [isError, setIsError] = useState(false);

	const { Notify, Errofy } = useNotification();

	return (
		<button
			className="btn btn-primary btn-sm rounded-lg flex"
			onClick={() => {
				try {
					const ws = XLSX.utils.json_to_sheet(data);
					const keys = Object.keys(data[0]) as (keyof T)[];
					ws["!cols"] = data
						.reduce(
							(acc, desk) => {
								keys.forEach((key, i) => {
									if ((desk[key] as string | number).toString().length > acc[i])
										acc[i] = (desk[key] as string | number).toString().length;
								});
								return acc;
							},
							keys.map((key) => (key as string).length)
						)
						.map((length) => ({ wch: length + 5 }));
					const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
					const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
					const data1 = new Blob([excelBuffer], { type: fileType });
					FileSaver.saveAs(data1, fileNameSuffix + "_" + fileName + fileExtension);
					Notify("Exporting data", "Exported Successfully");
				} catch (err) {
					Errofy("Exporting data", err, "Exporting Failed");
					setIsError(true);
				}
			}}
		>
			{isError ? <Danger className="w-4 h-4" /> : <ExportCurve className="w-4 h-4" />}
			Export
		</button>
	);
}

export default ExportButton;
