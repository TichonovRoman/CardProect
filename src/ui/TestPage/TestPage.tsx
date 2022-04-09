import React from 'react';
import SuperInputText from "../../universalComponents/SuperInputText/SuperInputText";
import SuperButton from "../../universalComponents/SuperButton/SuperButton";
import SuperCheckbox from "../../universalComponents/SuperCheckbox/SuperCheckbox";

const TestPage = () => {
    return (
        <div>
            <div style={{fontSize: "70px"}}>
                TestPage
            </div>

<div style={{display: "flex", flexDirection: "column"}}>
    <SuperInputText/>
    <SuperButton title={"Test button"} />
    <SuperCheckbox/>
</div>


        </div>
    );
};

export default TestPage;