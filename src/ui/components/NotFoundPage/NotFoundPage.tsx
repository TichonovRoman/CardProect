import React from 'react';
import s from "../../generalStyle/GeneralStyle.module.css"
import {NavLink} from "react-router-dom";
import m from "./NotFoundPage.module.css"

const NotFoundPage = () => {
    return (
        <div className={s.backgroundPage}>
            <div className={m.NotFoundPage}>
                <span>404</span>
                <div>
                    стрaница не найдена
                </div>

                <NavLink to={"/main"} >Вернуться на главную</NavLink>
            </div>


        </div>
    );
};

export default NotFoundPage;