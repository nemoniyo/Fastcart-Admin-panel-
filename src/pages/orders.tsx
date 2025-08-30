import { Search } from "lucide-react"
import MenuDrower from "../components/menuDrower"
import Navbar from "../components/navbar"

const Orders = () => {
    return (<>
        <div>
            <Navbar />
            <div className="flex">
                <div>
                    <MenuDrower />
                </div>
                <div className="p-[25px]">
                    <div className="flex items-center relative">
                        <h1 className="text-[32px] font-[600]">Orders</h1>
                        <button className="w-[120px] h-[50px] bg-[#2563EB] hover:opacity-70 text-[whitesmoke] rounded-[4px] absolute left-[1480px]">+  Add order</button>
                    </div>
                    <div>
                        <div>
                            <div className="w-[250px] ">
                                <input type="text" />
                                <Search/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Orders
