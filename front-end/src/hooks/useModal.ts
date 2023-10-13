import modalEvent from "@/events/modal";
import { useAppDispatch, useAppSelector } from "./redux";
import { closeModal, openModal } from "@/app/context/modal";

function useModal<T extends object = object>() {
	const dispatch = useAppDispatch(),
		modalData = useAppSelector((state) => state.modal) as OpenableModalI<T>;
	return {
		modalData,
		/**
		 * @description open modal and return a promise that will be resolved when the modal is closed
		 */
		openModal: (modal: ModalI<T>) => {
			dispatch(openModal(modal));
			return new Promise((resolve) => {
				const listener = () => {
					resolve(true);
					modalEvent.removeEventListener("closeModal", listener);
				};
				modalEvent.addEventListener("closeModal", listener);
			});
		},
		/**
		 * @description close modal and emit event to notify all listeners that the modal is closed
		 */
		closeModal: () => {
			dispatch(closeModal());
			modalEvent.closeModal();
		},
	};
}
export default useModal;
export type useModalI<T extends object = object> = ReturnType<typeof useModal<T>>;
