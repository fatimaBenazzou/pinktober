import { Suspense /*, lazy */ } from "react";
import { useModal } from "@/hooks";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";
import Fallback from "@/Components/Fallback";
import FaceRecognition from "@/Modals/FaceRecognition";
//import { useModalI } from "@/hooks/useModal";

function ModalLayout() {
	const model = useModal();
	const { modalData, closeModal } = model;
	const { isOpen, bodyType, size, /* extraObject, */ title } = modalData;
	console.log({ isOpen });
	return (
		<dialog
			className={`modal ${isOpen ? "modal-open" : ""}`}
			onClick={(e) => {
				if (e.target === e.currentTarget) closeModal();
			}}
		>
			<div className={`modal-box relative min-h-[200px]  ${size === "lg" ? "max-w-5xl" : ""}`}>
				{/* <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5" onClick={closeModal}>
					✕
				</button> */}
				<h3 className="font-semibold text-2xl pb-6 ">{title}</h3>
				<div className="max-h-[calc(100vh-20rem)] overflow-auto pr-2">
					<Suspense fallback={<Fallback />}>
						{
							/* Loading modal body according to different modal type */
							isOpen &&
								{
									[MODAL_BODY_TYPES.FACE_RECOGNITION]: <FaceRecognition {...model} />,
									[MODAL_BODY_TYPES.DEFAULT]: <div></div>,
								}[bodyType]
						}
					</Suspense>
				</div>
			</div>
		</dialog>
	);
}

export default ModalLayout;
