

"use client"
import React, { useState, useEffect } from "react";
import Style from "./page.module.css"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";  // ✅ Import Swiper Modules

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Customers: React.FC = () => {
  return (
    <div className={`${Style.container} proof px-5 sm:px-10 md:px-20`}>
        <div className={`${Style.content} justify-center  `}>
                  <Swiper
                      modules={[Navigation, Pagination, Autoplay]}  // ✅ Include modules
                      navigation ={false}
                      loop={true}
                      slidesPerView={6}
                      pagination={false}
                      autoplay={{
                        delay: 0
                      }}
                      freeMode={true}
                      speed={6400}
              
                      breakpoints={{
                          320: { slidesPerView: 3, spaceBetween: 10 }, // Small screens (mobile)
                          640: { slidesPerView: 4, spaceBetween: 15 }, // Tablets
                          1024: { slidesPerView: 4, spaceBetween: 20 }, // Laptops
                          1280: { slidesPerView: 6, spaceBetween: 25 }, // Large screens
                      }}
                    //   allowTouchMove={true}
                      className="mySwiper"
                  >
                      {[
                          "/foreshore.png",
                          "/escape.png",
                          "/kodeks.png",
                          "/foreshore.png",
                          "/escape.png",
                          "/kodeks.png",
                          "/foreshore.png",
                          "/escape.png",
                          "/kodeks.png",
                        ].map((e, index) => (
                          <SwiperSlide key={`Customers_${e}_${index}`}>
                              <div className="flex justify-center items-center">
                                  <Image width={150} height={80} alt={`Awards_${e}`} src={e} />
                              </div>
                          </SwiperSlide>
                      ))}
                  </Swiper>
        </div>
      
    </div>
  );
};

export default Customers;