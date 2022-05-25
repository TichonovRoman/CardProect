import React, {useState} from 'react';
import m from "./TableTitle.module.css";
import {filterTableAC, filterTableValue} from "../packs-reducer";
import {useDispatch} from "react-redux";

const TableTitle = React.memo (() => {

    const dispatch = useDispatch()

    const [nameSort, setNameSort] = useState<filterTableValue>("0name")
    const [cardsSort, setCardsSort] = useState<filterTableValue>("0cardsCount")
    const [updatedSort, setUpdatedSort] = useState<filterTableValue>("0updated")
    const [createdSort, setCreatedSort] = useState<filterTableValue>("0created")


    const sortFunction = (oneValue: string, twoValue: string, stateValue: filterTableValue, setFunction: any) => {
         if (stateValue === oneValue) {
            setFunction(twoValue)
            dispatch(filterTableAC(stateValue))
        } else {
            setFunction(oneValue)
            dispatch(filterTableAC(stateValue))
        }
    }

    const editNameSortHandler = () => {
        return sortFunction("0name", "1name", nameSort, setNameSort)
    }

    const editCardsSortHandler = () => {
        return sortFunction("0cardsCount", "1cardsCount", cardsSort, setCardsSort)
    }

    const editUpdatedSortHandler = () => {
        return sortFunction("0updated", "1updated", updatedSort, setUpdatedSort)
    }

    const editCreatedSortHandler = () => {

        return sortFunction("0created", "1created", createdSort, setCreatedSort)
    }

    return (
        <div className={m.tableTitle}>
            <div className={m.columnNames} style={{width: "175px"}}>
                <span style={{paddingLeft: "20px"}}>Name</span>

                <div className={nameSort === "0name" ? m.upTriangle : m.downTriangle} onClick={editNameSortHandler}/>

            </div>
            <div className={m.columnNames} style={{justifyContent: "center", width: "80px"}}>
                Cards
                <div className={cardsSort === "0cardsCount" ? m.upTriangle : m.downTriangle}
                     onClick={editCardsSortHandler}/>
            </div>
            <div className={m.columnNames} style={{justifyContent: "center"}}>

                Last Updated
                <div className={updatedSort === "0updated" ? m.upTriangle : m.downTriangle}
                     onClick={editUpdatedSortHandler}/>

            </div>
            <div className={m.columnNames} style={{justifyContent: "center"}}>
                Created
                <div className={createdSort === "0created" ? m.upTriangle : m.downTriangle}
                     onClick={editCreatedSortHandler}/>

            </div>
            <div className={m.columnNames} style={{justifyContent: "center"}}>Actions</div>
        </div>
    );
});

export default TableTitle;