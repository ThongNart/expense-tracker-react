import {NavLink, Outlet} from "react-router-dom"

export default function RootLayout() {
    return (
        <div>
            <nav>
                <NavLink to="/">App</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </nav>

            <Outlet/>
        </div>
    )
}