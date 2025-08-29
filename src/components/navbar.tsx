import fastcartLogo from "../assets/images/fascart.logo.png";
import useDarkSide from '../config/useDarkMode';
import ThemeToggle from '../components/switch';
import { Search, ChevronDown } from 'lucide-react';
import profImage from "../assets/images/dmin.profile.image.png";
const Navbar = () => {
    const [, toggleTheme] = useDarkSide();
    return (<>
        <nav>
            <div className="flex bg-[#1C2536] text-[whitesmoke] py-[15px] px-[50px]">
                <div>
                    <img src={fastcartLogo} alt="fastcartLogo" className="w-[240px] h-[68px]" />
                </div>
                <div className="flex gap-[950px] items-center">
                    <div className="flex items-center gap-[10px] ml-[200px]">
                        <Search />
                        <input type="text" placeholder="Search..." className="placeholder:text-[whitesmoke] placeholder:text-[18px] outline-none" />
                    </div>
                    <div className="flex items-center gap-[18px]">
                        <div className="w-[45px] h-[40px] rounded-[50%] flex items-center justify-center mr-[5px]">
                            <button onClick={toggleTheme} className="m-[5px]">
                                <ThemeToggle />
                            </button>
                        </div>
                        <img src={profImage} alt="profImage" className="h-[64px] w-[64px]" />
                        <p className="text-[18px] font-[500] text-[whitesmoke]">Admin Adminovich</p>
                        <button>
                            <ChevronDown />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar
