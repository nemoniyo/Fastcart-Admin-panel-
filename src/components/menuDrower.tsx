import { Folder, House, Logs, Tag } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const MenuDrower = () => {
    const linkClasses =
        'w-[290px] h-[56px] flex gap-[20px] items-center px-[20px] text-[18px] font-[500] rounded-[4px] transition-all duration-500';

    return (
        <div className="flex">
            <div className="px-[25px] pt-[40px] w-[350px] h-[142vh] dark:bg-[#1C2536] bg-[#1C2536] text-[whitesmoke]">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `${linkClasses} ${
                            isActive
                                ? 'bg-[whitesmoke] text-black'
                                : 'hover:bg-[whitesmoke] hover:text-black'
                        }`
                    }
                >
                    <House />
                    Dashboard
                </NavLink>

                <NavLink
                    to="/orders"
                    className={({ isActive }) =>
                        `${linkClasses} ${
                            isActive
                                ? 'bg-[whitesmoke] text-black'
                                : 'hover:bg-[whitesmoke] hover:text-black'
                        }`
                    }
                >
                    <Logs />
                    Orders
                </NavLink>

                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        `${linkClasses} ${
                            isActive
                                ? 'bg-[whitesmoke] text-black'
                                : 'hover:bg-[whitesmoke] hover:text-black'
                        }`
                    }
                >
                    <Tag />
                    Products
                </NavLink>

                <NavLink
                    to="/others"
                    className={({ isActive }) =>
                        `${linkClasses} ${
                            isActive
                                ? 'bg-[whitesmoke] text-black'
                                : 'hover:bg-[whitesmoke] hover:text-black'
                        }`
                    }
                >
                    <Folder />
                    Others
                </NavLink>
            </div>
            <div></div>
        </div>
    );
};

export default MenuDrower;
