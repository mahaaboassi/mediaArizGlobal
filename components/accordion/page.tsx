"use client"
import { useState } from "react";
import Style from "./page.module.css"

interface DataProps{
    question : String,
    answer : String,
    isOpen: boolean;
    onClick: () => void;
}
const AccordionComponent:React.FC<DataProps> = ({question, answer,isOpen,onClick}) => {
    return ( <div className={`${Style.container} p-3`}>
        <div onClick={onClick} className={`${Style.target} flex items-center justify-between cursor-pointer`}>
            <div> {question} </div>
            <div className={`${Style.icon}`}>
                {/* {isOpen?<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M0.5 7H13.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <g clipPath="url(#clip0_1222_36554)">
                    <path d="M7 0.5V13.5" stroke="white" stroke-linecap="round" strokeLinejoin="round"/>
                    <path d="M0.5 6.95996H13.5" stroke="white" stroke-linecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1222_36554">
                    <rect width="14" height="14" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>} */}
                    <div className={`${isOpen?Style.iconFirstActive:Style.iconFirst}`}></div>
                    <div className={`${Style.iconSecond}`}></div>
            </div>
        </div>
        <p className={`${Style.content} flex items-center ${isOpen ? Style.contentActive :""}`}>
            {answer}
        </p>
    </div> );
}

export default AccordionComponent;