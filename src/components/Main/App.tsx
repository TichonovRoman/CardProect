import React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import './App.css'
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
const Login = React.lazy(() => import(`../Login/Login`));
const Registration = React.lazy(() => import(`../Registration/Registration`));
const Profile = React.lazy(() => import(`../Profile/Profile`));
const PacksList = React.lazy(() => import(`../PacksList/PacksList`));
const CreateNewPassword = React.lazy(() => import(`../Registration/ForgotPassword/CreateNewPassword/CreateNewPassword`));
const ForgotPassword = React.lazy(() => import(`../Registration/ForgotPassword/ForgotPassword`));
const PackCard = React.lazy(() => import(`../PacksList/PackCard/PackCard`));
const CheckEmail = React.lazy(() => import(`../Registration/ForgotPassword/CheckEmail/CheckEmail`));
const LearnPackModal = React.lazy(() => import(`../PacksList/TableRow/LearnPackModal/LearnPackModal`));


function App() {
    return (
        <div>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/registration'}>Registration</NavLink>
            <NavLink to={'/profile'}>Profile</NavLink>
            <NavLink to={'/set-new-password'}>Password</NavLink>
            <NavLink to={'/404'}>404</NavLink>
            <NavLink to={'/packsList'}>Packs List</NavLink>
            <NavLink to={'/cardPack'}>Card Pack</NavLink>

            <React.Suspense fallback={ <CircularProgress style={{
                display: "block",
                position: "fixed",
                top: "50%",
                left: "50%",
                zIndex: "1"
            }}/>}>
            <Routes>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={'/recoveryPass'} element={<ForgotPassword/>}/>
                <Route path={'/set-new-password'} element={<CreateNewPassword/>}/>
                <Route path="/404" element={<h1 style={{textAlign: "center"}}>404: PAGE NOT FOUND</h1>}/>
                <Route path="/" element={<Navigate to={"/profile"}/>}/>
                <Route path="/packsList" element={<PacksList/>}/>
                <Route path={'/learnPack/:cardId'} element={<LearnPackModal />}/>
                <Route path={'/cardPack/:id'} element={<PackCard/>}/>
                <Route path={'/checkEmail'} element={<CheckEmail />}/>

            </Routes>
            </React.Suspense>
        </div>
    );
}

export default App;
