class ModalEvent extends EventTarget {
	closeModal() {
		this.dispatchEvent(new Event("closeModal"));
	}
}
const modalEvent = new ModalEvent();
export default modalEvent;
