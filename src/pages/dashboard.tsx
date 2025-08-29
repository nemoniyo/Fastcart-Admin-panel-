import MenuDrower from "../components/menuDrower";
import Navbar from "../components/navbar";
import sales from "../assets/images/sales.image.png";
import cost from "../assets/images/cost.images.png";
import profit from "../assets/images/profit.image.png";
import SalesRevenueChart from "../components/salesRevenue";
const Dashboard = () => {
    return (<>
        <div>
            <Navbar />
            <div className="flex">
                <div>
                    <MenuDrower />
                </div>
                <div className="p-[25px]">
                    <div>
                        <h1 className="text-[28px] font-[600]">Dashboard</h1>
                    </div>
                    <div>
                        
                    </div>
                    <div className="flex gap-[40px] mt-[40px]">
                        <div className="w-[250px] h-[100px] rounded-[4px] flex justify-center items-center gap-[20px] bg-[#FEF3F2]">
                            <img src={sales} alt="sales" className="w-[75px] h-[75px]" />
                            <div>
                                <p className="text-[18px] font-[400] text-[gray]">Sales</p>
                                <h1 className="text-[32px] font-[700] text-[black]">$152k</h1>
                            </div>
                        </div>
                        <div className="w-[250px] h-[100px] rounded-[4px] flex justify-center items-center gap-[20px] bg-[#FFFAEB]">
                            <img src={cost} alt="cost" className="w-[75px] h-[75px]" />
                            <div>
                                <p className="text-[18px] font-[400] text-[gray]">Cost</p>
                                <h1 className="text-[32px] font-[700] text-[black]">$99.7k</h1>
                            </div>
                        </div>
                        <div className="w-[250px] h-[100px] rounded-[4px] flex justify-center items-center gap-[20px] bg-[#F0FDF9]">
                            <img src={profit} alt="profit" className="w-[75px] h-[75px]" />
                            <div>
                                <p className="text-[18px] font-[400] text-[gray]">Profit</p>
                                <h1 className="text-[32px] font-[700] text-[black]">$32.1k</h1>
                            </div>
                        </div>
                    </div>
                    <div className=" border-[2px] border-gray-200 rounded-[4px] mt-[30px]">
                        <div className="px-[23px]">
                            <h1 className="text-[36px] font-[600]">Sales Revenue</h1>
                        </div>
                        <div className="w-[820px]">
                            <SalesRevenueChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Dashboard
