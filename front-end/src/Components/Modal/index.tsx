import React from "react";
type Props = {
	head: React.ReactNode;
	frame: React.ReactNode;
	children: React.ReactNode;
	open?: boolean;
	onClose: () => void;
};

const Modal: React.FC<Props> = ({ head, frame, children, open = true, onClose }) => {
	return (
		<>
			<div
				className={
					`fixed inset-0 z-10 p-8 text-white bg-gray-600/90 ${open ? "block" : "hidden"}` // control visibility via `open` attribute (or render conditionally)
				}
			>
				{/* container: `max-w-sm` to make it reasonably narrow, `mx-auto` to center horizontally */}
				<div className="relative w-full max-w-sm mx-auto mt-8">
					{/* closer in the corner */}
					<button
						className="absolute -top-2 -right-2 flex justify-center rounded-full h-8 w-8 bg-gray-600 cursor-pointer shadow-xl"
						onClick={() => onClose()}
						title="Bye bye"
					>
						<span className="text-2xl leading-7 select-none">&times;</span>
					</button>
					{/* contents */}
					<div className="overflow-hidden bg-gray-800 rounded shadow-xl">{frame}</div>
				</div>
			</div>
			<div className="block p-4 bg-gray-900">
				<h1 className="text-lg">{head}</h1>
			</div>
			<div className="p-4">{children}</div>{" "}
		</>
	);
};

export default Modal;
