import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./NavBar.module.css"

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/login">Login</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/newPasswordEnter">New Password Enter</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/404">404</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/passwordRecovery">Password Recovery</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/registration">Registration</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/testPage">Test page</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;