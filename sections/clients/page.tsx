import Header from "@/components/header/header";
import Style from "./page.module.css"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";  // ✅ Import Swiper Modules

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function Clients() {
    const data = [        {
        name: "John Doe",
        profession: "Marketing Manager",
        image: "/image.avif",
        description: "This company provided exceptional service and helped us grow our business. Highly recommended!"
    },
    {
        name: "Jane Smith",
        profession: "CEO of XYZ Corp",
        image: "/image3.jpg",
        description: "Amazing experience! The team was professional, and their expertise made a huge difference."
    },
    {
        name: "Michael Johnson",
        profession: "Freelance Designer",
        image: "/image2.jpg",
        description: "I'm extremely satisfied with the results. Great communication and top-quality work!"
    },
    {
        name: "Emily Davis",
        profession: "Software Engineer",
        image: "/image4.jpg",
        description: "Fantastic service! The team was knowledgeable and met all my expectations."
    },
    {
        name: "Robert Wilson",
        profession: "Entrepreneur",
        image: "/image5.jpg",
        description: "Very professional and reliable. Would definitely work with them again!"
    }]
    const svg = <svg xmlns="http://www.w3.org/2000/svg" width="56" height="47" viewBox="0 0 36 27" fill="none">
    <path d="M27.9502 22.94L18.0002 22.94L18.0002 12.98L21.9902 5L26.9502 5L22.9802 12.98L27.9502 12.98L27.9502 22.94Z" fill="url(#paint0_linear_150_45)"/>
    <path d="M15.9502 22.94L6.0002 22.94L6.0002 12.98L9.9902 5L14.9502 5L10.9802 12.98L15.9502 12.98L15.9502 22.94Z" fill="url(#paint1_linear_150_45)"/>
    <defs>
    <linearGradient id="paint0_linear_150_45" x1="22.9752" y1="5" x2="22.9752" y2="22.94" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="0.5" stop-color="#E1D0BE"/>
    <stop offset="1" stop-color="#A06F3A"/>
    </linearGradient>
    <linearGradient id="paint1_linear_150_45" x1="10.9752" y1="5" x2="10.9752" y2="22.94" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="0.5" stop-color="#E1D0BE"/>
    <stop offset="1" stop-color="#A06F3A"/>
    </linearGradient>
    </defs>
    </svg>
    const svg2 = <svg xmlns="http://www.w3.org/2000/svg" width="56" height="47" viewBox="0 0 36 27" fill="none">
    <g filter="url(#filter0_d_150_45)">
    <path d="M27.9502 22.94L18.0002 22.94L18.0002 12.98L21.9902 5L26.9502 5L22.9802 12.98L27.9502 12.98L27.9502 22.94Z" fill="url(#paint0_linear_150_45)"/>
    </g>
    <g filter="url(#filter1_d_150_45)">
    <path d="M14.9502 22.94L5.0002 22.94L5.0002 12.98L8.9902 5L13.9502 5L9.9802 12.98L14.9502 12.98L14.9502 22.94Z" fill="url(#paint1_linear_150_45)"/>
    </g>
    <defs>
    <filter id="filter0_d_150_45" x="16" y="4" width="13.9502" height="21.94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="1"/>
    <feGaussianBlur stdDeviation="1"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.65 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_150_45"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_150_45" result="shape"/>
    </filter>
    <filter id="filter1_d_150_45" x="3" y="4" width="13.9502" height="21.94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="1"/>
    <feGaussianBlur stdDeviation="1"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.65 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_150_45"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_150_45" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_150_45" x1="22.9752" y1="5" x2="22.9752" y2="22.94" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="0.5" stop-color="#E1D0BE"/>
    <stop offset="1" stop-color="#A06F3A"/>
    </linearGradient>
    <linearGradient id="paint1_linear_150_45" x1="9.9752" y1="5" x2="9.9752" y2="22.94" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="0.5" stop-color="#E1D0BE"/>
    <stop offset="1" stop-color="#A06F3A"/>
    </linearGradient>
    </defs>
    </svg>
    return ( <div className={`${Style.container} px-5 sm:px-10 md:px-20 py-10 md:py-14`}>
        <Header dark={true} title="What Our Clients Are Saying About Us" upTitle="Testimonials" />
        <div className="py-10 md:py-16">
            <Swiper
                        modules={[Navigation, Pagination, Autoplay]}  // ✅ Include modules
                        navigation ={false}
                        loop={true}
                        slidesPerView={1}
                        pagination={false}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 }, // Small screens (mobile)
                            640: { slidesPerView: 3, spaceBetween: 15 }, // Tablets
                            1024: { slidesPerView: 4, spaceBetween: 20 }, // Laptops
                            1280: { slidesPerView: 4, spaceBetween: 25 }, // Large screens
                        }}
                        className="mySwiper"
                    >
                        {data.map((e,idx)=>(<SwiperSlide key={`Testimonials_${e.name}_${idx}`}>
                            <div  className={`${Style.card} p-5`}>
                                <div className="flex">
                                    {svg}
                                </div>
                                <p className="py-5">{e.description}</p>
                                <div className={`${Style.line} mt-10 mb-5`}></div>
                                <div className={`flex items-center gap-5 ${Style.info}`}>
                                    <div><Image alt={e.name} src={e.image} width={200} height={200} /></div>
                                    <div>
                                        <h5>{e.name}</h5>
                                        <h6>{e.profession}</h6>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>))}
                    </Swiper>
            
        </div>
    </div> );
}

export default Clients;