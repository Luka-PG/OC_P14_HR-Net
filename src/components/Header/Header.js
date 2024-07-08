import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import formIcon from "../../assets/icons/form.svg";
import listIcon from "../../assets/icons/list.svg";

import "./_Header.css";

// Component Header

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header-link">
                <h1>
                    <img src={logo} className="header-logo" alt="Logo du site Hrnet" />
                </h1>
            </Link>
            <nav className="header-nav">
                <NavLink to="/" className="header-nav-link">
                    <img className="header-icon" src={formIcon} alt="form icon" />Create employee
                </NavLink>
                <NavLink to="/employee-list" className="header-nav-link">
                    <img className="header-icon" src={listIcon} alt="list icon" />Employee list
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;