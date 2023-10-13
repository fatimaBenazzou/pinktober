type Props = {
	description?: string;
	title?: string;
	buttonProps?: {
		text: string;
		onClick: () => void;
		isLoading?: boolean;
	};
};

const Card = ({ title = "Integration", description = "", buttonProps }: Props) => {
	return (
		<div className="card flex  items-center bg-secondary w-full shadow-xl py-12">
			<div className="flex flex-col  items-center w-[95%]">
				<div className="avatar w-24">
					<figure className="mask mask-circle bg-base-100 p-2 w-full">
						<img src="/favicon.svg" />
					</figure>
				</div>
				<div className="card-body items-center text-center text-base-100">
					<h2 className="card-title">{title}</h2>
					<p>{description}</p>
					{buttonProps && (
						<button className="btn btn-primary" onClick={buttonProps.onClick}>
							{buttonProps.isLoading && (
								<div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6"></div>
							)}
							{buttonProps.text}
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

// px-10 pt-10

export default Card;
