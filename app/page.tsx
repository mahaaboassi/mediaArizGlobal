
"use client";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeThree } from "@/store/slices/hideThree";
import { changeValue } from "@/store/slices/view";
import { RootState } from "@/store";

import Navbar from "@/components/navbar/navbar";
import ThreeDScene from "@/components/three/page";
import HeroForm from "@/sections/heroForm/page";
import Icons from "@/sections/icons/page";

import FixedComponent from "@/components/fixedComponent/page";
import RefComponet from "@/sections/remaindHomePage/page";
import Footer from "@/components/footer/page";

import WhatWeDo from "@/sections/whatWeDo/page";
import Technologies from "@/sections/technologies/page";
import Steps from "@/sections/steps/page";
import FAQs from "@/sections/faq/page";
import Services from "@/sections/services/page";
import Clients from "@/sections/clients/page";

function Home() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [marginBottom, setMarginBottom] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.target === footerRef.current) {
          dispatch(changeThree(entry.isIntersecting));
          console.log("bla three",entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    });

    // Observe both elements
    if (footerRef.current) observer.observe(footerRef.current);
    // Set marginBottom dynamically
    if (typeof window !== "undefined") {
      setMarginBottom(window.innerHeight);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);
  const viewRedux = useSelector((state: RootState) => state.view.value);
  return (
    <div>

      <div style={{ marginBottom: `${marginBottom}px` }} className="container-home">
        <ThreeDScene />
        <Navbar />
        <FixedComponent />
        <HeroForm />
        <Icons />
        <div className="lg:h-10" ></div>
        <RefComponet returnedValue={(res)=>{
          dispatch(changeValue(res));
        }} />
        
           
        
        <div ref={footerRef}></div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;