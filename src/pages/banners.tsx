import { Link } from "react-router-dom"
import MenuDrower from "../components/menuDrower"
import Navbar from "../components/navbar"

const Banners = () => {
    return (<>
        <div>
            <Navbar/>
            <div className="flex">
                <div>
                    <MenuDrower/>
                </div>
                <div className="p-[25px]">
                    <div className="flex gap-[30px] text-[20px] font-[500]">
                        <Link to={"/others"}>
                            <button className="hover:rounded hover:bg-[#DBEAFE] hover:text-[#416BDF] transition-all duration-500 p-[10px]">Categories</button>
                        </Link>
                        <Link to={"/others/brands"}>
                        <button className="hover:rounded hover:bg-[#DBEAFE] hover:text-[#416BDF] transition-all duration-500 p-[10px]">Brands</button>
                        </Link>
                        <button className="rounded bg-[#DBEAFE] text-[#416BDF] p-[10px]">Banners</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Banners
