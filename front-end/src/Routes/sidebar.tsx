import { LiaUserTieSolid, LiaUserShieldSolid } from "react-icons/lia";
import {
	Activity,
	ArchiveBook,
	Arrow,
	ArrowDown,
	ArrowForwardSquare,
	BoxRemove,
	BoxTick,
	CpuSetting,
	DollarSquare,
	EmptyWallet,
	EmptyWalletTime,
	GridEdit,
	MoneySend,
	Monitor,
	Profile2User,
	ProgrammingArrow,
	ReceiptDiscount,
	ReceiptItem,
	ReceiptSearch,
	ReceiptText,
	Setting3,
	Shop,
	StatusUp,
	TaskSquare,
	/* ShopAdd, */
	Truck,
	TruckFast,
	TruckRemove,
	TruckTick,
	TruckTime,
	Wallet,
	WalletMoney,
	WeightMeter,
} from "iconsax-react";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes: NavRoute[] = [
	{
		path: "/app/dashboard",
		icon: <Monitor className={iconClasses} />,
		name: "Dashboard",
		submenu: [
			{
				path: "/app/dashboard",
				icon: <Activity className={submenuIconClasses} />,
				name: "Activities",
			},
			{
				path: "/app/dashboard/e-commerce",
				icon: <Monitor className={submenuIconClasses} />,
				name: "E-commerce",
			},
			{
				path: "/app/dashboard/analytics",
				icon: <StatusUp className={submenuIconClasses} />,
				name: "Analytics",
			},
		],
	},
	{
		path: "/app/clients", // url
		icon: <Profile2User className={iconClasses} />, // icon component
		name: "Clients", // name that appear in Sidebar
	},
	{
		path: "/app/workers",
		icon: <LiaUserTieSolid className={submenuIconClasses} />,
		name: "Delivery Men",
	},
	{
		path: "/app/admins",
		icon: <LiaUserShieldSolid className={submenuIconClasses} />,
		name: "Admins",
	},
	{
		path: "/app/roles",
		icon: <CpuSetting className={submenuIconClasses} />,
		name: "Manage Roles",
	},
	{
		path: "/app/shipments", // url
		icon: <Truck className={iconClasses} />, // icon component
		name: "Shipments", // name that appear in Sidebar
		submenu: [
			{
				path: "/app/shipments/coming",
				icon: <TruckTime className={submenuIconClasses} />,
				name: "Coming soon",
			},
			{
				path: "/app/shipments/in-hold",
				icon: <BoxTick className={submenuIconClasses} />,
				name: "In hold",
			},
			{
				path: "/app/shipments/canceled-in-hold",
				icon: <BoxRemove className={submenuIconClasses} />,
				name: "Canceled in stock",
			},
			{
				path: "/app/shipments/assigned",
				icon: <TruckTick className={submenuIconClasses} />,
				name: "Assigned delivery",
			},
			{
				path: "/app/shipments/assigned-transit",
				icon: <ArrowForwardSquare className={submenuIconClasses} />,
				name: "Assigned transits",
			},
			{
				path: "/app/shipments/assigned-return",
				icon: <TruckRemove className={submenuIconClasses} />,
				name: "Assigned returns",
			},
			{
				path: "/app/shipments/in-transit",
				icon: <Arrow className={submenuIconClasses} />,
				name: "In Transition",
			},
			{
				path: "/app/shipments/in-delivery",
				icon: <TruckFast className={submenuIconClasses} />,
				name: "In Delivery",
			},

			{
				path: "/app/shipments/return-transit",
				icon: <ArrowDown className={submenuIconClasses} />,
				name: "Return Transit",
			},

			{
				path: "/app/shipments/delivered",
				icon: <TaskSquare className={submenuIconClasses} />,
				name: "Delivered",
			},
			{
				path: "/app/shipments/money-collected",
				icon: <WalletMoney className={submenuIconClasses} />,
				name: "Money Collected",
			},
			{
				path: "/app/shipments/money-affected",
				icon: <MoneySend className={submenuIconClasses} />,
				name: "Money Affected",
			},
			{
				path: "/app/shipments/returned",
				icon: <ProgrammingArrow className={submenuIconClasses} />,
				name: "Returned",
			},
		],
	},
	{
		path: "/app/money-collections", // url
		icon: <ReceiptItem className={iconClasses} />, // icon component
		name: "Money Collections", // name that appear in Sidebar
		submenu: [
			{
				path: "/app/money-collections/to-be-received",
				icon: <ReceiptSearch className={submenuIconClasses} />,
				name: "To be received",
			},
			{
				path: "/app/money-collections/received",
				icon: <ReceiptText className={submenuIconClasses} />,
				name: "Received",
			},
			{
				path: "/app/money-collections/sent",
				icon: <ReceiptDiscount className={submenuIconClasses} />,
				name: "Sent",
			},
		],
	},
	{
		path: "/app/transactions", // url
		icon: <EmptyWallet className={iconClasses} />, // icon component
		name: "Transactions", // name that appear in Sidebar
		submenu: [
			{
				path: "/app/transactions",
				icon: <EmptyWalletTime className={submenuIconClasses} />,
				name: "List of Transactions",
			},
			{
				path: "/app/transactions/archive",
				icon: <Wallet className={submenuIconClasses} />,
				name: "Archived transactions",
			},
		],
	},
	{
		path: "/app/payment-settings", // url
		icon: <DollarSquare className={iconClasses} />, // icon component
		name: "Payment settings", // name that appear in Sidebar
		submenu: [
			{
				path: "/app/payment-settings/zones-provinces",
				icon: <GridEdit className={submenuIconClasses} />,
				name: "Zones & provinces",
			},
			{
				path: "/app/payment-settings/zones-fees",
				icon: <Wallet className={submenuIconClasses} />,
				name: "Zones fees",
			},
			{
				path: "/app/payment-settings/weight-fees",
				icon: <WeightMeter className={submenuIconClasses} />,
				name: "Additional weight fees",
			},
			{
				path: "/app/payment-settings/global",
				icon: <DollarSquare className={submenuIconClasses} />,
				name: "Global settings",
			},
		],
	},
	{
		path: "/app/desks", // url
		icon: <Shop className={iconClasses} />, // icon component
		name: "Desks", // name that appear in Sidebar,
	},
	{
		path: "/app/logs", // url
		icon: <ArchiveBook className={iconClasses} />, // icon component
		name: "Logs", // name that appear in Sidebar
	},
	{
		path: "/app/settings", // url
		icon: <Setting3 className={iconClasses} />, // icon component
		name: "Settings", // name that appear in Sidebar
	},
	/*
	{
	   path: "/app/leads", // url
	   icon: <InboxArrowDownIcon className={iconClasses} />, // icon component
	   name: "Leads", // name that appear in Sidebar
   },
	{
		path: "/app/roles", // url
		icon: <SquaresPlusIcon className={iconClasses} />, // icon component
		name: "Roles", // name that appear in Sidebar
	},
	{
		path: "/app/transactions", // url
		icon: <CurrencyDollarIcon className={iconClasses} />, // icon component
		name: "Transactions", // name that appear in Sidebar
	},
	{
		path: "/app/charts", // url
		icon: <ChartBarIcon className={iconClasses} />, // icon component
		name: "Analytics", // name that appear in Sidebar
	},
	{
		path: "/app/integration", // url
		icon: <BoltIcon className={iconClasses} />, // icon component
		name: "Integration", // name that appear in Sidebar
	},
	{
		path: "/app/calendar", // url
		icon: <CalendarDaysIcon className={iconClasses} />, // icon component
		name: "Calendar", // name that appear in Sidebar
	},

	{
		path: "", //no url needed as this has submenu
		icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />, // icon component
		name: "Pages", // name that appear in Sidebar
		submenu: [
			{
				path: "/login",
				icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
				name: "Login",
			},
			{
				path: "/register", //url
				icon: <UserIcon className={submenuIconClasses} />, // icon component
				name: "Register", // name that appear in Sidebar
			},
			{
				path: "/forgot-password",
				icon: <KeyIcon className={submenuIconClasses} />,
				name: "Forgot Password",
			},
			{
				path: "/app/blank",
				icon: <DocumentIcon className={submenuIconClasses} />,
				name: "Blank Page",
			},
			{
				path: "/app/404",
				icon: <ExclamationTriangleIcon className={submenuIconClasses} />,
				name: "404",
			},
		],
	},
	{
		path: "", //no url needed as this has submenu
		icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
		name: "Settings", // name that appear in Sidebar
		submenu: [
			{
				path: "/app/settings-profile", //url
				icon: <UserIcon className={submenuIconClasses} />, // icon component
				name: "Profile", // name that appear in Sidebar
			},
			{
				path: "/app/settings-billing",
				icon: <WalletIcon className={submenuIconClasses} />,
				name: "Billing",
			},
			{
				path: "/app/settings-team", // url
				icon: <UsersIcon className={submenuIconClasses} />, // icon component
				name: "Team Members", // name that appear in Sidebar
			},
		],
	},
	{
		path: "", //no url needed as this has submenu
		icon: <DocumentTextIcon className={`${iconClasses} inline`} />, // icon component
		name: "Documentation", // name that appear in Sidebar
		submenu: [
			{
				path: "/app/getting-started", // url
				icon: <DocumentTextIcon className={submenuIconClasses} />, // icon component
				name: "Getting Started", // name that appear in Sidebar
			},
			{
				path: "/app/features",
				icon: <TableCellsIcon className={submenuIconClasses} />,
				name: "Features",
			},
			{
				path: "/app/components",
				icon: <CodeBracketSquareIcon className={submenuIconClasses} />,
				name: "Components",
			},
		],
	}, */
];

export default routes;
