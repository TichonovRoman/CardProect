import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./NavBar.module.css"

const NavBar = () => {


    return (
        <nav className={s.nav}>
            <NavLink to="/CardProject/profile"
                     className={({isActive}) => isActive ? `${s.item} ${s.activeLink}` : `${s.item}`}>Profile</NavLink>
            <NavLink to="/CardProject/login"
                     className={({isActive}) => isActive ? `${s.item} ${s.activeLink}` : `${s.item}`}>Login</NavLink>
            <NavLink to="/CardProject/newPasswordEnter"
                     className={({isActive}) => isActive ? `${s.item} ${s.activeLink}` : `${s.item}`}>New Password
                Enter</NavLink>
            <NavLink to="/CardProject/404"
                     className={({isActive}) => isActive ? `${s.item} ${s.activeLink}` : `${s.item}`}>404</NavLink>
            <NavLink to="/CardProject/passwordRecovery"
                     className={({isActive}) => isActive ? `${s.item} ${s.activeLink}` : `${s.item}`}>Password
                Recovery</NavLink>
            <NavLink to="/CardProject/registration"
                     className={({isActive}) => isActive ? `${s.item} ${s.activeLink}` : `${s.item}`}>Registration</NavLink>
            <NavLink to="/CardProject/testPage"
                     className={({isActive}) => isActive ? `${s.item} ${s.activeLink}` : `${s.item}`}>Test
                page</NavLink>

        </nav>
    );
};


export default NavBar;