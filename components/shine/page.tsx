"use client"
import { useEffect, useRef, useState } from "react";
import Style from "./page.module.css"
function Shine() {
    const shineRef = useRef<null>(null);
    const [play , setPaly ] = useState<boolean>(false)

        useEffect(() => {
         const handleIntersection = (entries: IntersectionObserverEntry[]) => {
           entries.forEach(entry => {
             if (entry.isIntersecting) {
                setPaly(true); // Set state to true when the div is in view
             } else {
                setPaly(false); // Set state to false when the div is out of view
             }
           });
         };
     
         const observer = new IntersectionObserver(handleIntersection, {
           root: null, // Observe with respect to the viewport
           rootMargin: '0px',
           threshold: 0.5, // Trigger when 50% of the div is visible
         });
     
         // Start observing the target div
         if (shineRef.current) {
           observer.observe(shineRef.current);
         }
     
         // Cleanup observer on component unmount
         return () => {
           if (shineRef.current) observer.unobserve(shineRef.current);
         };
         }, []);
    return ( <div ref={shineRef} className={play?Style.shin:""}> </div> );
}

export default Shine;