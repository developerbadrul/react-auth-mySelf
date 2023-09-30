import { NavLink } from "react-router-dom";

const Navbar = () => {
    const siteLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/order">Order</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Logo</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {siteLink}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;