import React from "react";

type Props = {
	title?: string;
	subtitle?: string;
	children: React.ReactNode;
};

const SignInCard: React.FC<Props> = (props) => {
	return (
		<div className="card flex items-center w-96 bg-base-100 shadow-xl py-5 my-auto">
			<div className="avatar w-24 ">
				<figure className="mask mask-circle bg-base-100 p-5">
					<img src="/favicon.svg" />
				</figure>
			</div>
			<div className="card-body items-center gap-5 py-4">
				<h2 className="card-title">{props.title}</h2>
				<p className="text-left text-zinc-500">{props.subtitle}</p>
				{props.children}
			</div>
		</div>
	);
};

export default SignInCard;
