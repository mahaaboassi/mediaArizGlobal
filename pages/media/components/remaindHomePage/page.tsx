"use client"

import { changeValue } from "@/store/slices/view";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import WhatWeDo from "../whatWeDo/page";
import Technologies from "../technologies/page";
import Steps from "../steps/page";
import FAQs from "../faq/page";

function RefComponet() {
    const targetRef = useRef<null>(null);
    const dispatch = useDispatch()
    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
              dispatch(changeValue(true))
            } else {
              dispatch(changeValue(false))
            }
        });
        };
    
        const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Observe with respect to the viewport
        rootMargin: '0px',
        // threshold: 0.5, // Trigger when 50% of the div is visible
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
    return ( <div ref={targetRef}>
        <WhatWeDo/>
        <Technologies/>
        <Steps/>
        <FAQs/>

    </div> );
}

export default RefComponet;