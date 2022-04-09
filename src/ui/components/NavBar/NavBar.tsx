import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./NavBar.module.css"

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/profile" className={s.item}>Profile</NavLink>
            <NavLink to="/login" className={s.item}>Login</NavLink>
            <NavLink to="/newPasswordEnter" className={s.item}>New Password Enter</NavLink>
            <NavLink to="/404" className={s.item}>404</NavLink>
            <NavLink to="/passwordRecovery" className={s.item}>Password Recovery</NavLink>
            <NavLink to="/registration" className={s.item}>Registration</NavLink>
            <NavLink to="/testPage" className={s.item}>Test page</NavLink>

        </nav>
    );
};

export default NavBar;