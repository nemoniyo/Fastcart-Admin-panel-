import { Search } from "lucide-react"
import MenuDrower from "../components/menuDrower"
import Navbar from "../components/navbar"

const Products = () => {
    return (<>
        <div>
            <Navbar/>
            <div className="flex">
                <div>
                    <MenuDrower />
                </div>
                <div className="p-[25px]">
                    <div className="flex items-center relative">
                    <h1 className="text-[32px] font-[600]">Products</h1>
                    <button className="w-[120px] h-[50px] bg-[#2563EB] hover:opacity-70 transition-all duration-500 text-[whitesmoke] rounded-[4px] absolute left-[1480px]">+  Add order</button>
                </div>
                <div className="w-[300px] h-[60px] border-[2px] border-gray-300 rounded flex items-center p-[20px] gap-[50px] my-[35px]">
                    <input type="text" className="outline-none placeholder:text-xl w-full" placeholder="Search..."  />
                    <div className="text-gray-300">
                        <Search />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>)
}

export default Products
