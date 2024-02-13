import { Outlet } from 'react-router-dom'
import NavBar from "./NavBar.jsx";

const Layout = () => {
    return (
        <>
            <NavBar/>
            <div>
                <Outlet />
            </div>
            <footer>Бейшенбеков Султан</footer>
        </>
    )
}

export default Layout