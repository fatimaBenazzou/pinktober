import { FC } from "react";

type Props = {
    children?: React.ReactNode;
};

const SubMenu: FC<Props> = ({ children }) => {
    return (
        <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
            {children}
        </ul>
    );
};

export default SubMenu;
