import { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'

const Layout = () => {
    let navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            navigate("/login");
            return;
        }

        try {
            const decoded: any = jwtDecode(token);
            const role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
            if (role !== "Admin" && decoded.exp < new Date().getDate()) {
                navigate("/login");
            }
        } catch (err) {
            navigate("/login");
        }
    }, []);
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/"}></Link>
                </li>
                <Outlet />
            </ul>
        </div>
    )
}

export default Layout