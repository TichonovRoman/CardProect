import React from 'react';
import './App.module.css';
import NavBar from "./ui/components/NavBar/NavBar";
import s from "./App.module.css"
import {Route, Routes} from "react-router-dom";
import Profile from "./ui/components/Profile/Profile";
import Login from "./ui/components/Login/Login";
import NewPasswordEnter from "./ui/components/NewPasswordEnter/NewPasswordEnter";
import NotFoundPage from "./ui/components/NotFoundPage/NotFoundPage";
import PasswordRecovery from "./ui/components/PasswordRecovery/PasswordRecovery";
import Registration from "./ui/components/Registration/Registration";
import TestPage from "./ui/components/TestPage/TestPage";
import g from "./ui/generalStyle/GeneralStyle.module.css";
import Main from "./ui/components/Main/Main";

const App = () => {
    return (
        <div className={s.App}>
            <div className={s.a}>
                <NavBar/>
            </div>

            <div className={`${s.b} ${g.backgroundPage}`}>
                <Routes>
                    <Route path={"/CardProject"} element={<Main/>}/>
                    {/*это для работы на github pages*/}

                    {/*<Route path={"/"} element={<Main/>}/>*/}
                    <Route path={"/CardProject/profile"} element={<Profile/>}/>
                    <Route path={"/CardProject/login"} element={<Login/>}/>
                    <Route path={"/CardProject/newPasswordEnter"} element={<NewPasswordEnter/>}/>
                    <Route path={"/CardProject/404"} element={<NotFoundPage/>}/>
                    <Route path={"/CardProject/passwordRecovery"} element={<PasswordRecovery/>}/>
                    <Route path={"/CardProject/registration"} element={<Registration/>}/>
                    <Route path={"/CardProject/testPage"} element={<TestPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
