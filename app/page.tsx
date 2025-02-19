
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
import PopupAlert from "@/components/popup/page";
import { openPopup } from "@/store/slices/popup";


function Home() {
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [marginBottom, setMarginBottom] = useState<number>(0);
  const dispatch = useDispatch();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopup = (): boolean => {
      setIsPopupOpen((prev) => !prev); // Toggle state
      dispatch(openPopup(!isPopupOpen)) 
      return !isPopupOpen; // Return updated state
  };


  return (
    <div>

      {/* <div style={{ marginBottom: `${marginBottom-120}px` }} className="container-home"> */}
      <div >
        <ThreeDScene />
        <Navbar callPopup={handlePopup} />
        <FixedComponent />
        <HeroForm />
        <Icons />
        <div className="lg:h-10" ></div>
        <RefComponet handlePopup={(res)=>handlePopup()} returnedValue={(res)=>{
          dispatch(changeValue(res));
        }} />
        
          
        <PopupAlert handlePopup={handlePopup}/>
      </div>
    </div>
  );
}

export default Home;