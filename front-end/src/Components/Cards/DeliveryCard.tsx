type Props = {
	title: string;
	badges?: {
		text: React.ReactNode | string;
		className: string;
	}[];
	spans?: string;
	className?: string;
	children: React.ReactNode;
};

const DeliveryCard: React.FC<Props> = ({ title, children, badges = [], className = "text-primary", spans = "col-span-1" }) => {
	return (
		<div className={`card bg-base-100 rounded-xl w-full ${spans}`}>
			<div className="card-body py-8 ">
				<h2 className={`card-title font-bold ${className} text`}>
					<span>{title}</span>

					{badges ? (
						<div className="flex gap-2 ml-auto">
							{badges.map((badge, i) => (
								<span key={i} className={`badge ${badge.className}`}>
									{badge.text}
								</span>
							))}
						</div>
					) : null}
				</h2>
				<div className="divider"></div>
				{children}
			</div>
		</div>
	);
};

export default DeliveryCard;
