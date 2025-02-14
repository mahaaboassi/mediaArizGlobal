"use client"

import { changeValue } from "@/store/slices/view";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

function TestRedux() {
    const dispatch = useDispatch()
    const stateRedux = useSelector((state: RootState) => state.view.value   )
    return ( <div style={{position:"relative"}}>
        <button className="btn-yellosh" onClick={()=>{dispatch(changeValue(true))}} >Change</button>
        <button className="btn-universe" onClick={()=>{
            console.log("value is ",stateRedux);
            
        }}>Log</button>
    </div> );
}

export default TestRedux;