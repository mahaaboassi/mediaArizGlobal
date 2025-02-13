import Navbar from "@/components/navbar/navbar";
import ThreeDScene from "@/components/three/page";
import HeroForm from "./components/heroForm/page";
import Icons from "./components/icons/page";
import Technologies from "./components//technologies/page";
import WhatWeDo from "./components/whatWeDo/page";

import FixedComponent from "@/components/fixedComponent/page";
import RefComponet from "./components/remaindHomePage/page";


function MediaPage() {
    return ( <div>
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
    </div> );
}

export default MediaPage;