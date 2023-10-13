import { FC } from "react";
import SubMenu from "../SubMenu";

type Props = {
    label: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
};

const Dropdown: FC<Props> = ({ label, className = "", children }) => {
    return (
        <div className="dropdown dropdown-end ml-4">
            <label tabIndex={0} className={`btn btn-circle btn-ghost my-1 normal-case ${className}`}>
                {label}
            </label>
            <SubMenu>{children}</SubMenu>
        </div>
    );
};
export default Dropdown;
