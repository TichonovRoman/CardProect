import React from 'react';
import './App.module.css';
import NavBar from "./ui/NavBar/NavBar";
import s from "./App.module.css"
import {Route, Routes} from "react-router-dom";
import Profile from "./ui/Profile/Profile";
import Login from "./ui/Login/Login";
import NewPasswordEnter from "./ui/NewPasswordEnter/NewPasswordEnter";
import NotFoundPage from "./ui/NotFoundPage/NotFoundPage";
import PasswordRecovery from "./ui/PasswordRecovery/PasswordRecovery";
import Registration from "./ui/Registration/Registration";
import TestPage from "./ui/TestPage/TestPage";

const App = () => {
  return (
    <div className={s.App}>
        <div className={s.a}>
            <NavBar/>
        </div>

        <div className={s.b}>
            <Routes>
                <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/newPasswordEnter"} element={<NewPasswordEnter/>}/>
                    <Route path={"/404"} element={<NotFoundPage/>}/>
                    <Route path={"/passwordRecovery"} element={<PasswordRecovery/>}/>
                    <Route path={"/registration"} element={<Registration/>}/>
                    <Route path={"/testPage"} element={<TestPage/>}/>
            </Routes>
        </div>
     </div>
  );
}

export default App;
