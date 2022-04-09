import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./NavBar.module.css"

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/CardProject/profile" className={s.item}>Profile</NavLink>
            <NavLink to="/CardProject/login" className={s.item}>Login</NavLink>
            <NavLink to="/CardProject/newPasswordEnter" className={s.item}>New Password Enter</NavLink>
            <NavLink to="/CardProject/404" className={s.item}>404</NavLink>
            <NavLink to="/CardProject/passwordRecovery" className={s.item}>Password Recovery</NavLink>
            <NavLink to="/CardProject/registration" className={s.item}>Registration</NavLink>
            <NavLink to="/CardProject/testPage" className={s.item}>Test page</NavLink>

        </nav>
    );
};


export default NavBar;