"use client"
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeThree } from "@/store/slices/hideThree";

import Navbar from "@/components/navbar/navbar";
import ThreeDScene from "@/components/three/page";
import HeroForm from "@/sections/heroForm/page";
import Icons from "@/sections/icons/page";

import FixedComponent from "@/components/fixedComponent/page";
import RefComponet from "@/sections/remaindHomePage/page";
import Footer from "@/components/footer/page";


function HomePage() {
    const footerRef = useRef<null>(null)
    const dispatch = useDispatch()
        useEffect(() => {
         const handleIntersection = (entries: IntersectionObserverEntry[]) => {
           entries.forEach(entry => {
             if (entry.isIntersecting) {
                dispatch(changeThree(true))
             } else {
                dispatch(changeThree(false))
             }
           });
         };
     
         const observer = new IntersectionObserver(handleIntersection, {
           root: null, // Observe with respect to the viewport
           rootMargin: '0px',
           threshold: 0.5, // Trigger when 50% of the div is visible
         });
     
         // Start observing the target div
         if (footerRef.current) {
           observer.observe(footerRef.current);
         }
     
         // Cleanup observer on component unmount
         return () => {
           if (footerRef.current) observer.unobserve(footerRef.current);
         };
         }, []);
    return ( <div>
      <div style={{marginBottom:innerHeight}} className="container-home" >
            <ThreeDScene/>
            <Navbar/>
            <FixedComponent/>
            <HeroForm/>
            <Icons/>
            <RefComponet/>
            <div ref={footerRef}></div>
      </div>
      <Footer/>
      
   
      {/* For Website */}
      {/* <ThreeDScene/>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <WhatWeDo/>
      <Technologies/> */}
    </div> );
}

export default HomePage;