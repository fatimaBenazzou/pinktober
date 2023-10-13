import Loading from "@/Components/Loading";

import { useModalI } from "@/hooks/useModal";
import DZD from "@/utils/Currency";
import { Export, Printer, TruckRemove } from "iconsax-react";

export default function FaceRecognition({ modalData, closeModal }: useModalI<object>) {
	const { extraObject } = modalData;
	console.log(extraObject);
	return <div className=" flex flex-col mb-4 gap-4"></div>;
}
