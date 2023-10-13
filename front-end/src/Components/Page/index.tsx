import Logo from "@/Components/Logo";

type Props = {
    title: string;
    icon: string;
    subtitle: string;
    children: React.ReactNode;
};
const Page: React.FC<Props> = ({ title, icon, subtitle, children }) => {
    return (
        <div className="h-screen p-6">
            <Logo />
            <div className="h-full flex flex-col gap-4  pt-28">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-primary">{title} </h1>
                    <div>
                        <img src={`${icon}`} />
                    </div>
                </div>
                <p className="text-secondary text-sm">{subtitle}</p>

                <>{children}</>
            </div>
        </div>
    );
};

export default Page;
