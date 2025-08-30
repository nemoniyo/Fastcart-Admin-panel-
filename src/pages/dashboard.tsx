import MenuDrower from "../components/menuDrower";
import Navbar from "../components/navbar";
import sales from "../assets/images/sales.image.png";
import cost from "../assets/images/cost.images.png";
import profit from "../assets/images/profit.image.png";
import SalesRevenueChart from "../components/salesRevenue";
import { ArrowRight } from 'lucide-react';
import oil from "../assets/images/olive.oil.png";
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
                        <h1 className="text-[32px] font-[600]">Dashboard</h1>
                    </div>
                    <div className="flex gap-[50px]">
                        <div>
                            <div className="flex gap-[40px] mt-[40px]">
                                <div className="w-[250px] h-[100px] rounded-[4px] flex justify-center items-center gap-[20px] bg-[#FEF3F2] hover:shadow-lg transition-all duration-500">
                                    <img src={sales} alt="sales" className="w-[75px] h-[75px]" />
                                    <div>
                                        <p className="text-[18px] font-[400] text-[gray]">Sales</p>
                                        <h1 className="text-[32px] font-[700] text-[black]">$152k</h1>
                                    </div>
                                </div>
                                <div className="w-[250px] h-[100px] rounded-[4px] flex justify-center items-center gap-[20px] bg-[#FFFAEB] hover:shadow-lg transition-all duration-500">
                                    <img src={cost} alt="cost" className="w-[75px] h-[75px]" />
                                    <div>
                                        <p className="text-[18px] font-[400] text-[gray]">Cost</p>
                                        <h1 className="text-[32px] font-[700] text-[black]">$99.7k</h1>
                                    </div>
                                </div>
                                <div className="w-[250px] h-[100px] rounded-[4px] flex justify-center items-center gap-[20px] bg-[#F0FDF9] hover:shadow-lg transition-all duration-500">
                                    <img src={profit} alt="profit" className="w-[75px] h-[75px]" />
                                    <div>
                                        <p className="text-[18px] font-[400] text-[gray]">Profit</p>
                                        <h1 className="text-[32px] font-[700] text-[black]">$32.1k</h1>
                                    </div>
                                </div>
                            </div>
                            <div className=" border-[2px] border-gray-200 rounded-[4px] mt-[30px] pt-[20px] shadow-lg transition-all duration-500">
                                <div className="px-[23px]">
                                    <h1 className="text-[24px] font-[600]">Sales Revenue</h1>
                                </div>
                                <div className="w-[820px]">
                                    <SalesRevenueChart />
                                </div>
                            </div>
                        </div>
                        <div className="border-[2px] border-gray-200 rounded-[4px] p-[20px]">
                            <div className="flex gap-[170px] mb-[10px] pl-[25px]">
                                <h1 className="text-[28px] font-[600]">Top selling products</h1>
                                <button className="text-[24px] font-[600] flex gap-[10px] justify-center items-center hover:underline">
                                    See All
                                    <ArrowRight />
                                </button>
                            </div>
                            <div className="flex flex-col">
                                <button className="flex gap-[20px] items-center py-[15px] rounded-[4px] px-[25px] hover:bg-[#1C2536] transition-all duration-500 hover:text-[whitesmoke] dark:hover:bg-[whitesmoke] dark:hover:text-[black]">
                                    <div>
                                        <img src={oil} alt="oil" className="w-[90px] h-[90px]" />
                                    </div>
                                    <div>
                                        <div className="flex gap-[120px]">
                                            <p className="text-[26px] font-[600]">Healthcare Erbology</p>
                                            <p className="text-[26px] font-[500] text-[#10B981]">13,153</p>
                                        </div>
                                        <div className="flex gap-[180px]">
                                            <p className="text-[26px] font-[600] text-[gray]">in Accessories</p>
                                            <p className="text-[26px] font-[500] text-[gray]">in sales</p>
                                        </div>
                                    </div>
                                </button>
                                <button className="flex gap-[20px] items-center py-[15px] rounded-[4px] px-[25px] hover:bg-[#1C2536] transition-all duration-500 hover:text-[whitesmoke] dark:hover:bg-[whitesmoke] dark:hover:text-[black]">
                                    <div>
                                        <img src={oil} alt="oil" className="w-[90px] h-[90px]" />
                                    </div>
                                    <div>
                                        <div className="flex gap-[120px]">
                                            <p className="text-[26px] font-[600]">Healthcare Erbology</p>
                                            <p className="text-[26px] font-[500] text-[#10B981]">13,153</p>
                                        </div>
                                        <div className="flex gap-[180px]">
                                            <p className="text-[26px] font-[600] text-[gray]">in Accessories</p>
                                            <p className="text-[26px] font-[500] text-[gray]">in sales</p>
                                        </div>
                                    </div>
                                </button>
                                <button className="flex gap-[20px] items-center py-[15px] rounded-[4px] px-[25px] hover:bg-[#1C2536] transition-all duration-500 hover:text-[whitesmoke] dark:hover:bg-[whitesmoke] dark:hover:text-[black]">
                                    <div>
                                        <img src={oil} alt="oil" className="w-[90px] h-[90px]" />
                                    </div>
                                    <div>
                                        <div className="flex gap-[120px]">
                                            <p className="text-[26px] font-[600]">Healthcare Erbology</p>
                                            <p className="text-[26px] font-[500] text-[#10B981]">13,153</p>
                                        </div>
                                        <div className="flex gap-[180px]">
                                            <p className="text-[26px] font-[600] text-[gray]">in Accessories</p>
                                            <p className="text-[26px] font-[500] text-[gray]">in sales</p>
                                        </div>
                                    </div>
                                </button>
                                <button className="flex gap-[20px] items-center py-[15px] rounded-[4px] px-[25px] hover:bg-[#1C2536] transition-all duration-500 hover:text-[whitesmoke] dark:hover:bg-[whitesmoke] dark:hover:text-[black]">
                                    <div>
                                        <img src={oil} alt="oil" className="w-[90px] h-[90px]" />
                                    </div>
                                    <div>
                                        <div className="flex gap-[120px]">
                                            <p className="text-[26px] font-[600]">Healthcare Erbology</p>
                                            <p className="text-[26px] font-[500] text-[#10B981]">13,153</p>
                                        </div>
                                        <div className="flex gap-[180px]">
                                            <p className="text-[26px] font-[600] text-[gray]">in Accessories</p>
                                            <p className="text-[26px] font-[500] text-[gray]">in sales</p>
                                        </div>
                                    </div>
                                </button>
                                <button className="flex gap-[20px] items-center py-[15px] rounded-[4px] px-[25px] hover:bg-[#1C2536] transition-all duration-500 hover:text-[whitesmoke] dark:hover:bg-[whitesmoke] dark:hover:text-[black]">
                                    <div>
                                        <img src={oil} alt="oil" className="w-[70px] h-[70px]" />
                                    </div>
                                    <div>
                                        <div className="flex gap-[120px]">
                                            <p className="text-[26px] font-[600]">Healthcare Erbology</p>
                                            <p className="text-[26px] font-[500] text-[#10B981]">13,153</p>
                                        </div>
                                        <div className="flex gap-[180px]">
                                            <p className="text-[26px] font-[600] text-[gray]">in Accessories</p>
                                            <p className="text-[26px] font-[500] text-[gray]">in sales</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="border-[2px] border-gray-200 rounded-[4px] w-[700px] p-[20px] mt-[50px] shadow-lg">
                            <h1 className="text-[24px] font-[600] mb-[15px]">Recent Transactions</h1>
                            <div className="border-b-[3px] border-gray-200 mb-[15px]">
                                <ul className="text-[22px] text-gray-400 flex justify-around mb-[10px]">
                                    <li>Name</li>
                                    <li>Date</li>
                                    <li>Amount</li>
                                    <li>Status</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-[20px]">
                                <div className="flex justify-around">
                                    <p className="text-[22px] font-[500]">Jagarnath S.</p>
                                    <p className="text-[22px] font-[400]">24.05.2023</p>
                                    <p className="text-[22px] font-[400]">$124.97</p>
                                    <div className="w-[100px] h-[40px] bg-[#C4F8E2] flex justify-center items-center rounded-[4px]">
                                        <p className="text-[16px] text-[#06A561]">Paid</p>
                                    </div>
                                </div>
                                <div className="flex justify-around">
                                    <p className="text-[22px] font-[500]">Anand G.</p>
                                    <p className="text-[22px] font-[400]">23.05.2023</p>
                                    <p className="text-[22px] font-[400]">$55.42</p>
                                    <div className="w-[100px] h-[40px] bg-[#E6E9F4] flex justify-center items-center rounded-[4px]">
                                        <p className="text-[16px] text-[#5A607F]">Pending</p>
                                    </div>
                                </div>
                                <div className="flex justify-around">
                                    <p className="text-[22px] font-[500]">Kartik S.</p>
                                    <p className="text-[22px] font-[400]">23.05.2023</p>
                                    <p className="text-[22px] font-[400]">$89.90</p>
                                    <div className="w-[100px] h-[40px] bg-[#C4F8E2] flex justify-center items-center rounded-[4px]">
                                        <p className="text-[16px] text-[#06A561]">Paid</p>
                                    </div>
                                </div>
                                <div className="flex justify-around">
                                    <p className="text-[22px] font-[500]">Rakesh S.</p>
                                    <p className="text-[22px] font-[400]">22.05.2023</p>
                                    <p className="text-[22px] font-[400]">$144.94</p>
                                    <div className="w-[100px] h-[40px] bg-[#E6E9F4] flex justify-center items-center rounded-[4px]">
                                        <p className="text-[16px] text-[#5A607F]">Pending</p>
                                    </div>
                                </div>
                                <div className="flex justify-around">
                                    <p className="text-[22px] font-[500]">Anup S.</p>
                                    <p className="text-[22px] font-[400]">22.05.2023</p>
                                    <p className="text-[22px] font-[400]">$70.52</p>
                                    <div className="w-[100px] h-[40px] bg-[#C4F8E2] flex justify-center items-center rounded-[4px]">
                                        <p className="text-[16px] text-[#06A561]">Paid</p>
                                    </div>
                                </div>
                                <div className="flex justify-around">
                                    <p className="text-[22px] font-[500]">Jimmy P.</p>
                                    <p className="text-[22px] font-[400]">22.05.2023</p>
                                    <p className="text-[22px] font-[400]">$70.52</p>
                                    <div className="w-[100px] h-[40px] bg-[#C4F8E2] flex justify-center items-center rounded-[4px]">
                                        <p className="text-[16px] text-[#06A561]">Paid</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Dashboard
