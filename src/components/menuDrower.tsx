import { Folder, House, Logs, Tag } from 'lucide-react';

const MenuDrower = () => {
    return (<>
        <div className='flex'>
            <div className='px-[25px] pt-[40px] w-[350px] h-[100vh] dark:bg-[#1C2536] bg-[#1C2536] text-[whitesmoke]'>
                <button className='w-[290px] h-[56px] flex gap-[20px] items-center px-[20px] text-[18px] font-[500] rounded-[4px] hover:bg-[whitesmoke] transition-all duration-500 hover:text-black'>
                    <House />
                    Dashboard
                </button>
                <button className='w-[290px] h-[56px] flex gap-[20px] items-center px-[20px] text-[18px] font-[500] rounded-[4px] hover:bg-[whitesmoke] transition-all duration-500 hover:text-black'>
                    <Logs />
                    Orders
                </button>
                <button className='w-[290px] h-[56px] flex gap-[20px] items-center px-[20px] text-[18px] font-[500] rounded-[4px] hover:bg-[whitesmoke] transition-all duration-500 hover:text-black'>
                    <Tag />
                    Products
                </button>
                <button className='w-[290px] h-[56px] flex gap-[20px] items-center px-[20px] text-[18px] font-[500] rounded-[4px] hover:bg-[whitesmoke] transition-all duration-500 hover:text-black'>
                    <Folder />
                    Others
                </button>
            </div>
            <div>

            </div>
        </div>
    </>)
}

export default MenuDrower
