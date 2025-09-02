import useDarkSide from '../config/useDarkMode';
import ThemeToggle from '../components/switch';
import fastcartLogo from "../assets/images/fascart.logo.png";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { API } from '../config';
const LogIn = () => {
    const [, toggleTheme] = useDarkSide();
    let navigate = useNavigate()
    async function login(userName: string, password: string) {
        const res = await API.post('Account/login', { userName, password });
        if (res.data.data) {
            const token = res.data.data;
            try {
                const decodedToken = jwtDecode(token);
                const role = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                if (role.includes("Admin") || "SuperAdmin") {
                    localStorage.setItem("accessToken", token);
                    navigate("/dashboard");
                } else {
                    alert("No Admin");
                    return;
                }
            } catch (err) {
                console.error("Invalid token", err);
                return;
            }
        }
        return res.data;
    }

    const hadnleSubmit = (e: any) => {
        e.preventDefault()
        let userName = e.target["userName"].value
        let password = e.target["password"].value
        login(userName, password)
    }

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            navigate("/login");
            return;
        }
        try {
            const decodedToken = jwtDecode(token);
            const role = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
            if (role.includes("Admin") || "SuperAdmin") {
                navigate("/dashboard");
            } else {
                navigate("/login");
            }

        } catch {
            navigate("/login");
        }
    }, [navigate]);

    return (<>
        <div>
            <div className='flex'>
                <div className='bg-[#1C2536] dark:text-[whitesmoke] text-[whitesmoke] h-[100vh] w-[50%] relative'>
                    <div className='absolute top-[45%] left-[100px]'>
                        <h1 className='text-[25px] font-[600]'>Welcome to admin panel</h1>
                        <img src={fastcartLogo} alt="fastcartLogo" className='w-[344px] h-[100px]' />
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute top-[30px] left-[950px]'>
                        <button onClick={toggleTheme} className="m-[10px]">
                            <ThemeToggle />
                        </button>
                    </div>
                    <div className='absolute top-[300px] left-[320px]'>
                        <h1 className='text-[32px] text-[black] font-[700] dark:text-[whitesmoke] mb-[20px]'>Log in</h1>
                        <form className='flex flex-col gap-[20px]' onSubmit={hadnleSubmit}>
                            <input type="text" name='userName' placeholder='Email' className='w-[420px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-gray-300 dark:border-white placeholder:text-[gray] dark:placeholder:text-[#2563EB] outline-none focus:border focus:border-[#2563EB] transition-all duration-500' />
                            <input type="password" name='password' placeholder='Password' className='w-[420px] h-[56px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-gray-300  dark:border-white placeholder:text-[gray] dark:placeholder:text-[#2563EB] outline-none focus:border focus:border-[#2563EB] transition-all duration-500' />
                            <button className='w-[420px] h-[56px] hover:underline transition-all duration-500 text-[#2563EB] text-[20px] font-[500]'>Forget Password?</button>
                            <button type='submit' className='w-[420px] h-[56px] bg-[#2563EB] hover:opacity-75 transition-all duration-500 text-[18px] font-[500] text-[whitesmoke] rounded-[4px]'>Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default LogIn;
