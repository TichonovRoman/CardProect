import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./NavBar.module.css"

const finalClass = (isActive: { isActive: boolean }) => isActive.isActive ? `${s.item} ${s.activeLink}` : `${s.item}`

const NavBar = () => {


    return (
        <nav className={s.nav}>
            <NavLink to="/CardProject/profile"
                     className={(isActive) => finalClass(isActive)}>Profile</NavLink>
            <NavLink to="/CardProject/login"
                     className={(isActive) => finalClass(isActive)}>Login</NavLink>
            <NavLink to="/CardProject/newPasswordEnter"
                     className={(isActive) => finalClass(isActive)}>New Password
                Enter</NavLink>
            <NavLink to="/CardProject/404"
                     className={(isActive) => finalClass(isActive)}>404</NavLink>
            <NavLink to="/CardProject/passwordRecovery"
                     className={(isActive) => finalClass(isActive)}>Password
                Recovery</NavLink>
            <NavLink to="/CardProject/registration"
                     className={(isActive) => finalClass(isActive)}>Registration</NavLink>
            <NavLink to="/CardProject/testPage"
                     className={(isActive) => finalClass(isActive)}>Test
                page</NavLink>

        </nav>
    );
};


export default NavBar;