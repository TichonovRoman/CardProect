import React from 'react';
import SuperInputText from "../../../universalComponents/SuperInputText/SuperInputText";
import SuperButton from "../../../universalComponents/SuperButton/SuperButton";
import SuperCheckbox from "../../../universalComponents/SuperCheckbox/SuperCheckbox";
import s from "../../generalStyle/GeneralStyle.module.css"
import m from "./TestPage.module.css"

const TestPage = () => {
    return (
        <div className={s.backgroundPage}>
            <div className={m.TestPage}>
                <div style={{fontSize: "70px"}}>
                    TestPage
                </div>

                <div style={{display: "flex", flexDirection: "column"}}>
                    <SuperInputText/>
                    <SuperButton title={"Test button"}/>
                    <SuperCheckbox/>
                </div>
            </div>



        </div>
    );
};

export default TestPage;