"use client"
import React from "react";
import Style from "./page.module.css"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";  // ✅ Import Swiper Modules

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Icons() {
    const data = [
        { name: "Instagram", icon: "/instagram.png" },
        { name: "Facebook", icon: "/facebook.png" },
        { name: "TikTok", icon: "/tiktok.png" },
        { name: "Twitter", icon: "/twitter.png" },
        { name: "Pinterest", icon: "/pinterest.png" },
        { name: "Linkedin", icon: "/linkedin.png" },
        { name: "Botim", icon: "/botim.png" },
        { name: "Youtube", icon: "/youtube.png" },
        { name: "Snapchat", icon: "/snapchat.png" },
        { name: "Google", icon: "/google.png" }
    ];

    return (<div className={`px-6 md:px-14  ${Style.container}`}>
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}  // ✅ Include modules
            navigation ={false}
            loop={true}
            slidesPerView={3}
            pagination={false}
            autoplay={{ delay: 3000 }}
            breakpoints={{
                320: { slidesPerView: 3, spaceBetween: 10 }, // Small screens (mobile)
                640: { slidesPerView: 4, spaceBetween: 15 }, // Tablets
                1024: { slidesPerView: 4, spaceBetween: 20 }, // Laptops
                1280: { slidesPerView: 6, spaceBetween: 25 }, // Large screens
            }}
            className="mySwiper"
        >
            {data.map((e, index) => (
                <SwiperSlide key={`Awards_${e.name}_${index}`}>
                    <div className="flex justify-center items-center">
                        <Image width={150} height={80} alt={`Awards_${e.name}`} src={e.icon} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
        
    );
}

export default Icons;