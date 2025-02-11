"use client"
import Header from "@/components/header/header";
import Style from "./page.module.css"
import Shine from "@/components/shine/page";
import { useEffect, useRef, useState } from "react";
const infoData = [
    { name: "years experience", description: 0, icon: "" },
    { name: "Project's complete", description: 0, icon: "" },
    { name: "Customer Happy", description: 0,icon: "" }
  ];
interface Info {
    name: string,
    description: number,
    icon: string,  
}
function AboutUs() {
    const data = [{
        name: "SEO & Content Marketing",
        description: "We optimize your website and create high-quality content to improve search rankings and attract organic traffic.",
        icon: ""
    },
    {
        name: "Social Media Management",
        description: "We build and manage your social media presence, increasing engagement and brand awareness across all platforms.",
        icon: ""
    },
    {
        name: "Paid Advertising (PPC)",
        description: "We create targeted ad campaigns to maximize conversions and ROI across Google, Facebook, and other platforms.",
        icon: ""
    },
    {
        name: "Brand Strategy & Design",
        description: "We develop a compelling brand identity, from logos to marketing materials, ensuring consistency and recognition.",
        icon: ""
    }]

    const targetRef = useRef(null)
  
    const [ info , setInfo] = useState<Info[]>(infoData)
    const [ start , setIsStart] = useState<Boolean>(false)

    useEffect(() => {
            const handleIntersection = (entries: IntersectionObserverEntry[]) => {
                entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsStart(true); // Set state to true when the div is in view
                } 
                });
            };
        
            const observer = new IntersectionObserver(handleIntersection, {
                root: null, // Observe with respect to the viewport
                rootMargin: '0px',
                threshold: 0.5, // Trigger when 50% of the div is visible
            });
        
            // Start observing the target div
            if (targetRef.current) {
                observer.observe(targetRef.current);
            }
        
            // Cleanup observer on component unmount
            return () => {
                if (targetRef.current) observer.unobserve(targetRef.current);
            };
            }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setInfo(prev => {
                let temp = [...prev]
                const newYears = prev[0].description < 10 ? prev[0].description + 1 : prev[0].description;
                const newProject = prev[1].description < 1 ? prev[1].description + 1 : prev[1].description;
                const newCustomers = prev[2].description < 1 ? prev[2].description + 1 : prev[2].description;   
                // Check if the condition is met inside setCount
                temp[0].description = newYears
                temp[1].description = newProject
                temp[2].description = newCustomers
                if (newYears === 10 && newProject === 1 && newCustomers === 1) {
                    clearInterval(interval);
                }
                return [...temp];
            });
        }, 200);
            return () => clearInterval(interval);
        
    }, [start]);
    return ( <div  className={`${Style.container} py-28`}>
        <Shine/>
        <Header title="About our company" upTitle="Who we us" dark={false} />
        <div className="py-8">
            <p className="text-center py-2 md:px-52">
             At <strong>Ariz Global</strong>, based in Dubai, we empower brands to reach their full potential by leveraging innovative digital strategies. From dynamic social media marketing to cutting-edge web development, we connect businesses with their target audience for impactful, measurable growth.
            </p>
        </div >
            <div ref={targetRef} className="flex justify-center gap-10">
                {
                    info.map((info,idx)=><div key={`${info.name}_Loop_${idx}`} className={`${Style.loop}`}>
                        <div className={`${Style.number}`}>
                            {info.name == "years experience" && "+" }
                            {info.description}
                            {info.name != "years experience" && "K"}
                            </div>
                        <div>{info.name}</div>
                        <div className={Style.circle}></div>
                        </div>)
                }
            </div>
        
    </div> );
}

export default AboutUs;