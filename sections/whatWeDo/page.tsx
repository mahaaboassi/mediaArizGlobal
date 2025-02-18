"use client"
import Header from "@/components/header/header";
import Style from "./page.module.css"
import Image from "next/image";
import Tabs from "@/components/tabs/page";
import { useState} from "react";
interface Service {
    name: string;
    subTitle :string,
    description: string;
    id: number;
    content?: { name: string; id: number; description: string}[];
    svg: string;
    image : string
}

function WhatWeDo() {
    const data = [
        {
            name: "Marketing",
            subTitle : "professional Marketing Services",
            description: "Digital marketing is the practice of promoting brands, products, or services using online channels such as social media, search engines, email, and websites. It includes strategies like SEO, content marketing, PPC advertising, and social media marketing to reach and engage target audiences effectively.",
            id: 1,
            content: [
                { name: "Digital Marketing", id: 11, description: "We strategically optimize your brand and audience across all platforms."},
                { name: "Global Network", id: 12, description: "We help you create new partnerships between luxury brands." },
                { name: "Social Media Marketing", id: 13, description: "We help our clients engage with their relevant audience to gain positive reach."},
                { name: "Influencer Marketing", id: 14, description: "We target influencers who make a real buzz for your brand." },
                { name: "Public Relations", id: 15, description: "Our approach is fresh and aligned with today's media landscape." }
            ],
            image: "/marketing.png",
            svg :""
        },
        {
            name: "Web",
            subTitle : "professional Web Design services",
            description: "Our web development services include custom website design, web application development, e-commerce solutions, and more. We use the latest technologies to create responsive, SEO-friendly websites that drive engagement and sales.",
            id: 2,
            content: [
                { name: "Custom Websites", id: 21, description: "We design and develop custom websites tailored to your brand." },
                { name: "E-commerce Solutions", id: 22, description: "We build secure, scalable online stores that are easy to manage." },
                { name: "SEO Optimization", id: 23, description: "We ensure your website is optimized for search engines to increase visibility." },
                { name: "Web Application Development", id: 24, description: "We create web applications that are fast, reliable, and user-friendly." },
                { name: "Website Maintenance", id: 25, description: "We provide ongoing support and updates to keep your website running smoothly." }
            ],
            image: "/web.png",
            svg : ""
        },
        {
            name: "Design",
            subTitle : "Professional Design Solutions ",
            description: "We offer professional graphic design services to create visually stunning branding, marketing materials, and digital content. Our team ensures that your brand stands out with custom logos, banners, and other design assets.",
            id: 3,
            content: [
                { name: "Brand Identity", id: 31, description: "We create unique visual identities that reflect your brand's personality." },
                { name: "UI/UX Design", id: 32, description: "We design user-friendly interfaces that enhance the user experience." },
                { name: "Print Design", id: 33, description: "We design print materials like brochures, business cards, and posters." },
                { name: "Social Media Graphics", id: 34, description: "We create engaging graphics for social media marketing." },
                { name: "Packaging Design", id: 35, description: "We design creative and attractive packaging for your products." }
            ],
            image: "/marketing.png",
            svg : ""
        },
        {
            name: "Creative",
            subTitle : "professional creative Solutions",
            description: "Our creative content services help you craft engaging narratives through copywriting, video production, and photography. We specialize in delivering high-quality content that resonates with your audience.",
            id: 4,
            content: [
                { name: "Content Writing", id: 41, description: "We create compelling written content for blogs, websites, and marketing campaigns." },
                { name: "Video Production", id: 42, description: "We produce high-quality video content to tell your brand’s story." },
                { name: "Photography", id: 43, description: "We provide professional photography for your brand's needs, from products to events." },
                { name: "Email Marketing", id: 44, description: "We design email campaigns that boost engagement and conversion." },
                { name: "Podcast & Audio Content", id: 45, description: "We produce podcasts and audio content to connect with audiences in a new way." }
            ],
            image: "/creative.png",
            svg : ""
        }
    ];
    
    const [selectedObj, setSelectedObj] = useState<Service>(data[0]);
    const svg = <svg xmlns="http://www.w3.org/2000/svg" width="200" height="194" viewBox="0 0 107 94" fill="none">
    <g clipPath="url(#clip0_51_43)">
    <circle cx="8" cy="8" r="5" fill="#C3996B"/>
    <circle cx="21" cy="8" r="5" fill="#C3996B"/>
    <circle cx="34" cy="8" r="5" fill="#C3996B"/>
    <circle cx="47" cy="8" r="5" fill="#C3996B"/>
    <circle cx="60" cy="8" r="5" fill="#C3996B"/>
    <circle cx="73" cy="8" r="5" fill="#C3996B"/>
    <circle cx="86" cy="8" r="5" fill="#C3996B"/>
    <circle cx="8" cy="8" r="5" fill="#C3996B"/>
    <circle cx="99" cy="8" r="5" fill="#C3996B"/>
    <circle cx="8" cy="21" r="5" fill="#C3996B"/>
    <circle cx="21" cy="21" r="5" fill="#C3996B"/>
    <circle cx="34" cy="21" r="5" fill="#C3996B"/>
    <circle cx="47" cy="21" r="5" fill="#C3996B"/>
    <circle cx="60" cy="21" r="5" fill="#C3996B"/>
    <circle cx="73" cy="21" r="5" fill="#C3996B"/>
    <circle cx="86" cy="21" r="5" fill="#C3996B"/>
    <circle cx="8" cy="21" r="5" fill="#C3996B"/>
    <circle cx="99" cy="21" r="5" fill="#C3996B"/>
    <circle cx="8" cy="34" r="5" fill="#C3996B"/>
    <circle cx="21" cy="34" r="5" fill="#C3996B"/>
    <circle cx="34" cy="34" r="5" fill="#C3996B"/>
    <circle cx="47" cy="34" r="5" fill="#C3996B"/>
    <circle cx="60" cy="34" r="5" fill="#C3996B"/>
    <circle cx="73" cy="34" r="5" fill="#C3996B"/>
    <circle cx="86" cy="34" r="5" fill="#C3996B"/>
    <circle cx="8" cy="34" r="5" fill="#C3996B"/>
    <circle cx="99" cy="34" r="5" fill="#C3996B"/>
    <circle cx="8" cy="47" r="5" fill="#C3996B"/>
    <circle cx="21" cy="47" r="5" fill="#C3996B"/>
    <circle cx="34" cy="47" r="5" fill="#C3996B"/>
    <circle cx="47" cy="47" r="5" fill="#C3996B"/>
    <circle cx="60" cy="47" r="5" fill="#C3996B"/>
    <circle cx="73" cy="47" r="5" fill="#C3996B"/>
    <circle cx="86" cy="47" r="5" fill="#C3996B"/>
    <circle cx="8" cy="47" r="5" fill="#C3996B"/>
    <circle cx="99" cy="47" r="5" fill="#C3996B"/>
    <circle cx="8" cy="60" r="5" fill="#C3996B"/>
    <circle cx="21" cy="60" r="5" fill="#C3996B"/>
    <circle cx="34" cy="60" r="5" fill="#C3996B"/>
    <circle cx="47" cy="60" r="5" fill="#C3996B"/>
    <circle cx="60" cy="60" r="5" fill="#C3996B"/>
    <circle cx="73" cy="60" r="5" fill="#C3996B"/>
    <circle cx="86" cy="60" r="5" fill="#C3996B"/>
    <circle cx="8" cy="60" r="5" fill="#C3996B"/>
    <circle cx="99" cy="60" r="5" fill="#C3996B"/>
    <circle cx="8" cy="73" r="5" fill="#C3996B"/>
    <circle cx="21" cy="73" r="5" fill="#C3996B"/>
    <circle cx="34" cy="73" r="5" fill="#C3996B"/>
    <circle cx="47" cy="73" r="5" fill="#C3996B"/>
    <circle cx="60" cy="73" r="5" fill="#C3996B"/>
    <circle cx="73" cy="73" r="5" fill="#C3996B"/>
    <circle cx="86" cy="73" r="5" fill="#C3996B"/>
    <circle cx="8" cy="73" r="5" fill="#C3996B"/>
    <circle cx="99" cy="73" r="5" fill="#C3996B"/>
    <circle cx="8" cy="86" r="5" fill="#C3996B"/>
    <circle cx="21" cy="86" r="5" fill="#C3996B"/>
    <circle cx="34" cy="86" r="5" fill="#C3996B"/>
    <circle cx="47" cy="86" r="5" fill="#C3996B"/>
    <circle cx="60" cy="86" r="5" fill="#C3996B"/>
    <circle cx="73" cy="86" r="5" fill="#C3996B"/>
    <circle cx="86" cy="86" r="5" fill="#C3996B"/>
    <circle cx="8" cy="86" r="5" fill="#C3996B"/>
    <circle cx="99" cy="86" r="5" fill="#C3996B"/>
    </g>
    <defs>
    <clipPath id="clip0_51_43">
    <rect width="107" height="94" fill="white"/>
    </clipPath>
    </defs>
    </svg>

    return ( <div >
        <div className={`${Style.container} pt-20 pb-5 px-5 sm:px-10 md:px-20`}>
            <Header upTitle="Our Work" title="What We Do" dark={false} />
            <p className="text-center py-4">
                At our company, we seamlessly blend <span>digital marketing</span>, <span>web development</span>, and <span>creative content</span> to elevate your brand. Using cutting-edge technologies, we create stunning websites that truly represent your identity and engage your audience.
                Join us on our company to discover innovative strategies that drive success and amplify your online presence.
            </p>
            <p className="text-center py-1 "> Let's talk for insights, tips, and inspiration!</p>
        </div>
        <div className={`${Style.card} mx-5 sm:mx-10 md:mx-20  `}>
            <Tabs returnValue={(res)=>setSelectedObj(res)} selected={selectedObj} data={data}/>
            <div className={`grid grid-cols-1 md:grid-cols-2 py-12`}>
                
                <div className="px-4">
                <h4>{selectedObj.subTitle}</h4>
                <p className="py-3">{selectedObj.description}</p>
                <div className={`grid grid-cols-1 sm:grid-cols-2 `}>
                    {selectedObj.content?.map((ele,i)=><div className={`${Style.checked} py-2`} key={`Content_${ele.id}_${i}`}>{"  "}{ele.name}</div>)}

                </div>
                </div>
                <div  className="flex justify-center items-center">
                        
                  <Image alt={selectedObj.name} width={450} height={450} src={selectedObj.image} />
                </div>
                
                
            </div>
        </div>
        

    </div> );
}

export default WhatWeDo;