"use client"
import Navbar from "@/components/navbar/navbar";
import ThreeDScene from "@/components/three/page";
import HeroForm from "@/sections/heroForm/page";
import Icons from "@/sections/icons/page";
import Technologies from "@/sections/technologies/page";
import WhatWeDo from "@/sections/whatWeDo/page";
// Redux 
import { Provider } from "react-redux";
import { store } from "../store";
import FixedComponent from "@/components/fixedComponent/page";
import RefComponet from "@/sections/remaindHomePage/page";

export default function Home() {

  return (
    <Provider store={store}>
      <ThreeDScene/>
      <Navbar/>
      <FixedComponent/>
      <HeroForm/>
      <Icons/>
      {/* <AboutUs/> */}
      <RefComponet/>
      
   
      {/* For Website */}
      {/* <ThreeDScene/>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <WhatWeDo/>
      <Technologies/> */}
    </Provider>
  );
}
