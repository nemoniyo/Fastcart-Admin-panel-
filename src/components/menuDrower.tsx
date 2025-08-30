import { Folder, House, Logs, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const MenuDrower = () => {
    return (<>
        <div className='flex'>
            <div className='px-[25px] pt-[40px] w-[350px] h-[140vh] dark:bg-[#1C2536] bg-[#1C2536] text-[whitesmoke]'>
                <Link to={"/dashboard"}>
                    <button className='w-[290px] h-[56px] flex gap-[20px] items-center px-[20px] text-[18px] font-[500] rounded-[4px] hover:bg-[whitesmoke] transition-all duration-500 hover:text-black'>
                        <House />
                        Dashboard
                    </button>
                </Link>
                <Link to={"/orders"}>
                    <button className='w-[290px] h-[56px] flex gap-[20px] items-center px-[20px] text-[18px] font-[500] rounded-[4px] hover:bg-[whitesmoke] transition-all duration-500 hover:text-black'>
                        <Logs />
                        Orders
                    </button>
                </Link>
                <Link to={"/products"}>
                    <button className='w-[290px] h-[56px] flex gap-[20px] items-center px-[20px] text-[18px] font-[500] rounded-[4px] hover:bg-[whitesmoke] transition-all duration-500 hover:text-black'>
                        <Tag />
                        Products
                    </button>
                </Link>
                <Link to={"/others"}>
                    <button className='w-[290px] h-[56px] flex gap-[20px] items-center px-[20px] text-[18px] font-[500] rounded-[4px] hover:bg-[whitesmoke] transition-all duration-500 hover:text-black'>
                        <Folder />
                        Others
                    </button>
                </Link>
            </div>
            <div>

            </div>
        </div>
    </>)
}

export default MenuDrower
