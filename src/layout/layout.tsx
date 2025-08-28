import { Link, Outlet } from 'react-router-dom';

const Layout = () => {

    return (
        <div>
            <ul>
                <li>
                    <Link to={"/"}></Link>
                </li>
                <Outlet/>
            </ul>
        </div>
    )
}

export default Layout