"use client"
import { useEffect, useState } from "react";
import Style from "./page.module.css"

interface Service {
    name: string;
    subTitle :string,
    description: string;
    id: number;
    content?: { name: string; id: number; description: string}[];
    svg: string;
    image : string
}

interface DataProps {
    data: Service[];
    selected: Service;
    returnValue: (selected: Service) => void; // Ensure the function expects a full object
}

const Tabs :React.FC<DataProps> = ({data,selected,returnValue}) =>{
    const [ obj, setObj] = useState<Service | null>(null)
    useEffect(()=>{setObj(selected)},[selected])
    
    return ( <div className={`${Style.container} `}>

        {data.map((e,i)=><div onClick={()=>returnValue(e)} className={`${Style.list}`} key={`${e.id}_Services`}>
            <div className={`${Style.content} ${obj?.id == e.id?Style.active:""}`}>{e.name}</div>
            </div>)}

    </div> );
}

export default Tabs;