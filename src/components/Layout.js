import React from "react";
import {NavLink, Outlet} from "react-router-dom";

function Layout(props) {
    return(
        <>
            <header>
                <h1>a website duh</h1>
                <ul>
                    <li><NavLink to="/">posts</NavLink></li>
                    <li><NavLink to="/form">form</NavLink></li>
                </ul>
            </header>
            <Outlet />
            <footer>m5-hw1</footer>
        </>
    )
}

export default Layout