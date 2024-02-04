/**
 * Header.tsx
 *
 * This component represents the header of the application.
 * Currently, it's a simple header element with no additional content.
 */
import {NavLink} from "react-router-dom";

import Vacuum from "/vacuum.svg"

import "./Header.scss";

function Header() {

    return (
        <header className="header-container">
            <NavLink className="header-navigation" to="/">
                <img src={Vacuum} alt=''/>
                <span>Robot Painter</span>
            </NavLink>
            <nav>
                <NavLink className="page-navigation" to="/about">About</NavLink>
            </nav>
        </header>
    )
}

export default Header;