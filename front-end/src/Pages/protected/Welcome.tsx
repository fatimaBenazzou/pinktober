import { Link } from "react-router-dom";
import TemplatePointers from "@/features/user/components/TemplatePointers";
import usePageTitle from "@/hooks/usePageTitle";

function InternalPage() {
	usePageTitle("Welcome");
	return (
		<div className="hero h-4/5">
			<div className="hero-content">
				<div className="max-w-md text-center flex flex-col items-center">
					<TemplatePointers />
					<Link className="btn bg-base-100 btn-outline mt-4" to="/app/dashboard">
						Get Started
					</Link>
				</div>
			</div>
		</div>
	);
}

export default InternalPage;
