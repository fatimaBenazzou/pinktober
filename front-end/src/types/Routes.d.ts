interface BasicNavRoute {
    path: string;
    name: string;
    icon: React.ReactNode;
}
declare interface NavRoute extends BasicNavRoute {
    submenu?: BasicNavRoute[];
}
