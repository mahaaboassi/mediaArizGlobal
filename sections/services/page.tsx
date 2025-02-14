"use client"
import Header from "@/components/header/header";
import Image from "next/image";
import Style from "./page.module.css"
import { useState } from "react";

interface ObjPrototype{
    [key: number]: string;
}
function Services() {
    const data = [
        {
          image: "/goverment.webp",
          name: "Government",
          description: "We enhance government agencies' visibility and engagement with the community."
        },
        {
          image: "/real-estate.webp",
          name: "Real Estate",
          description: "Helping real estate agents showcase properties and attract buyers effectively."
        },
        {
          image: "/technologies.webp",
          name: "Technologies",
          description: "Marketing solutions for tech companies to boost visibility and industry presence."
        },
        {
          image: "/healthy.webp",
          name: "Healthy",
          description: "Promoting health and wellness through strategic marketing initiatives."
        }
      ];
      const [transform, setTransform] = useState<ObjPrototype>({
        0 : 'translate(0, 0)',
        1 : 'translate(0, 0)',
        2 : 'translate(0, 0)',
        3 : 'translate(0, 0)',
      });  

  const handleMouseMove = (e:any,key:number) => {  
    const { clientX, clientY } = e;  
    const randomX = Math.random() * 20 - 10; // Random value between -10 and 10  
    const randomY = Math.random() * 20 - 10; // Random value between -10 and 10  
    setTransform(prev=>({...prev,[key] :`translate(${randomX}px, ${randomY}px) scale(1.05)`}));  
  };  

  const handleMouseLeave = (key:number) => {  
    setTransform(prev=>({...prev,[key] :'translate(0, 0) scale(1)'}));  
  };  
    return ( <div className={` ${Style.container} py-5 sm:py-10 px-5 sm:px-10 md:px-20`}>
        <Header title="We Have Served Diverse Clientele with Digital Marketing Services" upTitle="Our Services" dark={true} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-5">
            
            {data.map((e,idx)=>(<div  onMouseMove={(e)=>handleMouseMove(e,idx)}  
                    onMouseLeave={()=>handleMouseLeave(idx)}  className={`${Style.contentContainer} relative overflow-hidden`} key={`Images_services_${e.name}_${idx}`}>
                <div className={`${Style.content}`}>
                    <div className={`${Style.info} p-5 sm:p-7  lg:p-10`}>
                        <h4 className="mb-2">{e.name}</h4>
                        <p>{e.description}</p>
                    </div>
                </div>
                
                <Image  style={{transform: `${transform[idx]} ` ,transition:"1s transform"}}  className="w-full  object-cover" width={400} height={300} alt={e.name} src={e.image} />
                </div>))}
            

        </div>
    </div> );
}

export default Services;