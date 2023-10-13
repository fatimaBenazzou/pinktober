import Billing from "../../features/settings/billing";

import usePageTitle from "@/hooks/usePageTitle";

function InternalPage() {
	usePageTitle("Bills");

	return <Billing />;
}

export default InternalPage;
