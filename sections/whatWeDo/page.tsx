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
    content?: { name: string; id: number; description: string; icon?: string }[];
    svg: string;
}

function WhatWeDo() {
    const data = [
        {
            name: "Marketing",
            subTitle : "professional Marketing Services",
            description: "Digital marketing is the practice of promoting brands, products, or services using online channels such as social media, search engines, email, and websites. It includes strategies like SEO, content marketing, PPC advertising, and social media marketing to reach and engage target audiences effectively.",
            id: 1,
            content: [
                { name: "Digital Marketing", id: 11, description: "We strategically optimize your brand and audience across all platforms.", icon: "" },
                { name: "Global Network", id: 12, description: "We help you create new partnerships between luxury brands." },
                { name: "Social Media Marketing", id: 13, description: "We help our clients engage with their relevant audience to gain positive reach.", icon: "" },
                { name: "Influencer Marketing", id: 14, description: "We target influencers who make a real buzz for your brand.", icon: "" },
                { name: "Public Relations", id: 15, description: "Our approach is fresh and aligned with today's media landscape.", icon: "" }
            ],
            image: "/Digital Marketing Target Audience.png",
            svg : ""
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
            image: "/WebCodingConceptByBarsind.png",
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
            image: "/Digital Marketing 3.png",
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
            image: "/creativeContent.png",
            svg :`<svg width="451" height="352" viewBox="0 0 351 352" fill="none">
            <path d="M215.8 346.3C219 352.6 233.3 352.6 247.7 346.3C262.1 340 271.1 329.7 267.8 323.4C264.6 317.1 250.3 317.1 235.9 323.4C221.5 329.7 212.5 340 215.8 346.3Z" fill="url(#paint0_linear_101_114)"/>
            <path d="M163.1 288.9C110.9 262 91.6001 211.6 120.1 176.2C148.6 140.9 214 134.1 266.3 161C318.6 187.9 337.8 238.3 309.3 273.7C280.7 309 215.3 315.8 163.1 288.9Z" fill="url(#paint1_radial_101_114)"/>
            <path d="M87.1 326.4L43 301.4L21.2 313.8L36.3 322.5L44.1 318L45.2 319.8L36.3 324.9L16.9 313.7L42.9 298.9L43.4 299.2L87 323.9L178.8 270.9C171.7 266.8 145 251.4 143.7 250.6L142 249.6L158 241.3L124.5 222.1L169.5 196.3L178.5 201.3L177.5 203.1L169.6 198.7L128.8 222.1L162.4 241.3L146.4 249.6C153.3 253.6 179.6 268.8 181.4 269.8L183.1 270.7L87.1 326.4Z" fill="url(#paint2_linear_101_114)"/>
            <path d="M288.7 300.7L263.4 285.5L275.9 278.2L237.6 256.3L238.6 254.5L280.1 278.2L267.6 285.5L289.8 298.9L288.7 300.7Z" fill="url(#paint3_linear_101_114)"/>
            <path d="M255.7 325.7L254.8 323.8L264.7 318.8L256.3 313.9L264.8 309L258.3 305.3L243.4 313.6L226.3 303.7L209.2 313.5L181.5 297.5L196.6 289.1L191.8 286.5L220.8 270.4L177.7 245.2L188 239.1L189.1 240.9L181.9 245.2L225 270.4L196.1 286.5L200.9 289.2L185.8 297.5L209.2 311.1L226.3 301.2L243.4 311.2L258.4 302.8L269 309L260.5 313.9L269.1 318.9L255.7 325.7Z" fill="url(#paint4_linear_101_114)"/>
            <path d="M211.1 322.7L168 298.1L181.5 290.5L174.9 286.7L206.6 269.2L164.3 244.9L181.5 235.1L182.5 236.9L168.5 244.9L210.9 269.3L179.2 286.7L185.7 290.5L172.3 298.1L211.1 320.2L226.4 311.4L227.5 313.2L211.1 322.7Z" fill="url(#paint5_linear_101_114)"/>
            <path d="M305.3 282.9L304.2 281.1L319.8 272.2L296.3 258.6L279.2 268.5L268.5 262.3L285.6 252.5L279.2 248.7L262.5 258.4L249.1 250.7L250.1 248.9L262.5 256L279.2 246.3L289.8 252.5L272.7 262.3L279.2 266L296.3 256.2L324 272.2L305.3 282.9Z" fill="url(#paint6_linear_101_114)"/>
            <path d="M248.7 298.1L235.6 290.3L258.1 277.4L229.4 261L230.5 259.2L262.4 277.4L239.8 290.3L249.8 296.3L248.7 298.1Z" fill="url(#paint7_linear_101_114)"/>
            <path d="M226.7 263.2L149.2 218.4L197.9 190.3L198.4 190.6L274.4 231.2V235.7L226.7 263.2ZM153.3 218.4L226.6 260.7L272.2 234.4V232.4L197.8 192.6L153.3 218.4Z" fill="url(#paint8_linear_101_114)"/>
            <path d="M187.9 336.1L170.8 326.2L160.5 332.2L159.4 330.4L170.8 323.8L187.9 333.7L201.4 325.9L167.2 305.9L153.5 313.8L136.7 304.2L176.1 280.8L177.2 282.6L140.9 304.2L153.4 311.3L167.2 303.4L205.6 325.9L187.9 336.1Z" fill="url(#paint9_linear_101_114)"/>
            <path d="M104.6 275.7L104.1 275.4L61.2001 250.8L62.2001 249L104.6 273.2L127.1 259.5L128.2 261.3L104.6 275.7Z" fill="url(#paint10_linear_101_114)"/>
            <path d="M89.4 296.5L51.4 274.4L61.9 268.3L87 282.9L93.4 279.4L53 255.7L54.1 253.9L97.6 279.5L87 285.4L61.9 270.7L55.6 274.4L89.3 294L135.8 266.4L136.9 268.2L89.4 296.5Z" fill="url(#paint11_linear_101_114)"/>
            <path d="M56.4001 303.5L18.7001 281.8L19.7001 280L56.4001 301.1L64.2001 296.6L38.0001 282.1L47.1001 276.8L89.4001 301L105.2 291.8L114.5 297.1L160.9 270.3L150 264.1L151 262.2L165.1 270.3L114.5 299.6L105.2 294.2L89.4001 303.4L47.1001 279.3L42.3 282.1L68.5001 296.5L56.4001 303.5Z" fill="url(#paint12_linear_101_114)"/>
            <path d="M44.6 328.7C49.9019 328.7 54.2 324.402 54.2 319.1C54.2 313.798 49.9019 309.5 44.6 309.5C39.2981 309.5 35 313.798 35 319.1C35 324.402 39.2981 328.7 44.6 328.7Z" fill="url(#paint13_radial_101_114)"/>
            <path d="M160 340.7C165.302 340.7 169.6 336.402 169.6 331.1C169.6 325.798 165.302 321.5 160 321.5C154.698 321.5 150.4 325.798 150.4 331.1C150.4 336.402 154.698 340.7 160 340.7Z" fill="url(#paint14_radial_101_114)"/>
            <path d="M227.4 321.7C232.702 321.7 237 317.402 237 312.1C237 306.798 232.702 302.5 227.4 302.5C222.098 302.5 217.8 306.798 217.8 312.1C217.8 317.402 222.098 321.7 227.4 321.7Z" fill="url(#paint15_radial_101_114)"/>
            <path d="M256.8 334C262.102 334 266.4 329.702 266.4 324.4C266.4 319.098 262.102 314.8 256.8 314.8C251.498 314.8 247.2 319.098 247.2 324.4C247.2 329.702 251.498 334 256.8 334Z" fill="url(#paint16_radial_101_114)"/>
            <path d="M304.3 291.5C309.602 291.5 313.9 287.202 313.9 281.9C313.9 276.598 309.602 272.3 304.3 272.3C298.998 272.3 294.7 276.598 294.7 281.9C294.7 287.202 298.998 291.5 304.3 291.5Z" fill="url(#paint17_radial_101_114)"/>
            <path d="M288.8 309.4C294.102 309.4 298.4 305.102 298.4 299.8C298.4 294.498 294.102 290.2 288.8 290.2C283.498 290.2 279.2 294.498 279.2 299.8C279.2 305.102 283.498 309.4 288.8 309.4Z" fill="url(#paint18_radial_101_114)"/>
            <path d="M249.4 306.8C254.702 306.8 259 302.502 259 297.2C259 291.898 254.702 287.6 249.4 287.6C244.098 287.6 239.8 291.898 239.8 297.2C239.8 302.502 244.098 306.8 249.4 306.8Z" fill="url(#paint19_radial_101_114)"/>
            <path d="M19 290.1C24.302 290.1 28.6 285.802 28.6 280.5C28.6 275.198 24.302 270.9 19 270.9C13.6981 270.9 9.40002 275.198 9.40002 280.5C9.40002 285.802 13.6981 290.1 19 290.1Z" fill="url(#paint20_radial_101_114)"/>
            <path d="M53.2001 264.4C58.502 264.4 62.8001 260.102 62.8001 254.8C62.8001 249.498 58.502 245.2 53.2001 245.2C47.8982 245.2 43.6001 249.498 43.6001 254.8C43.6001 260.102 47.8982 264.4 53.2001 264.4Z" fill="url(#paint21_radial_101_114)"/>
            <path d="M61.9001 259.5C67.202 259.5 71.5001 255.202 71.5001 249.9C71.5001 244.598 67.202 240.3 61.9001 240.3C56.5981 240.3 52.3 244.598 52.3 249.9C52.3 255.202 56.5981 259.5 61.9001 259.5Z" fill="url(#paint22_radial_101_114)"/>
            <path d="M226.4 258.5L158.4 219.3V216.4L200.4 195L268.4 231.4V234.3L226.4 258.5Z" fill="url(#paint23_linear_101_114)"/>
            <path d="M226.4 255.6L158.4 216.4L200.4 192.1L268.4 231.4L226.4 255.6Z" fill="url(#paint24_linear_101_114)"/>
            <path d="M176.4 302.6L64.4 237.9C63.5 237.4 63.1001 236.6 63.2001 235.9V232.5L92.1001 218.2C94.1001 217 97.2 216.9 99 217.9L212.2 280.9V284.1C212.3 284.9 211.7 285.9 210.5 286.6L183.2 302.3C181.3 303.5 178.2 303.6 176.4 302.6Z" fill="url(#paint25_linear_101_114)"/>
            <path d="M176.4 299.2L64.4001 234.5C62.6001 233.5 62.9001 231.7 64.9001 230.5L92.2001 214.8C94.2001 213.6 97.3001 213.5 99.1001 214.5L211.1 279.2C212.9 280.2 212.6 282 210.6 283.2L183.3 298.9C181.3 300.1 178.2 300.2 176.4 299.2Z" fill="url(#paint26_linear_101_114)"/>
            <path d="M103.4 225.2L98.1001 222.1L101.9 219.9L107.2 223L103.4 225.2Z" fill="white"/>
            <path d="M109.7 228.8L104.4 225.8L108.2 223.6L113.5 226.6L109.7 228.8Z" fill="white"/>
            <path d="M115.9 232.4L110.7 229.4L114.5 227.2L119.7 230.2L115.9 232.4Z" fill="white"/>
            <path d="M122.2 236L117 233L120.8 230.8L126 233.9L122.2 236Z" fill="white"/>
            <path d="M128.5 239.7L123.2 236.6L127 234.4L132.3 237.5L128.5 239.7Z" fill="white"/>
            <path d="M134.8 243.3L129.5 240.3L133.3 238.1L138.6 241.1L134.8 243.3Z" fill="white"/>
            <path d="M141.1 246.9L135.8 243.9L139.6 241.7L144.9 244.7L141.1 246.9Z" fill="white"/>
            <path d="M147.3 250.5L142.1 247.5L145.9 245.3L151.1 248.4L147.3 250.5Z" fill="white"/>
            <path d="M153.6 254.2L148.3 251.1L152.1 248.9L157.4 252L153.6 254.2Z" fill="white"/>
            <path d="M159.9 257.8L154.6 254.8L158.4 252.6L163.7 255.6L159.9 257.8Z" fill="white"/>
            <path d="M169.4 263.3L160.9 258.4L164.7 256.2L173.2 261.1L169.4 263.3Z" fill="white"/>
            <path d="M100 230.9L91.5 225.9L95.3 223.8L103.8 228.7L100 230.9Z" fill="white"/>
            <path d="M106.3 234.5L101 231.4L104.8 229.2L110.1 232.3L106.3 234.5Z" fill="white"/>
            <path d="M112.6 238.1L107.3 235.1L111.1 232.9L116.4 235.9L112.6 238.1Z" fill="white"/>
            <path d="M118.9 241.7L113.6 238.7L117.4 236.5L122.7 239.5L118.9 241.7Z" fill="white"/>
            <path d="M125.1 245.4L119.9 242.3L123.7 240.1L128.9 243.2L125.1 245.4Z" fill="white"/>
            <path d="M131.4 249L126.2 245.9L130 243.7L135.2 246.8L131.4 249Z" fill="white"/>
            <path d="M137.7 252.6L132.4 249.6L136.2 247.4L141.5 250.4L137.7 252.6Z" fill="white"/>
            <path d="M144 256.2L138.7 253.2L142.5 251L147.8 254L144 256.2Z" fill="white"/>
            <path d="M150.3 259.9L145 256.8L148.8 254.6L154.1 257.7L150.3 259.9Z" fill="white"/>
            <path d="M156.5 263.5L151.3 260.4L155.1 258.2L160.3 261.3L156.5 263.5Z" fill="white"/>
            <path d="M162.8 267.1L157.5 264.1L161.3 261.9L166.6 264.9L162.8 267.1Z" fill="white"/>
            <path d="M94.3 234.2L85.8 229.2L89.6001 227.1L98.1001 232L94.3 234.2Z" fill="white"/>
            <path d="M100.6 237.8L95.3 234.7L99.1001 232.6L104.4 235.6L100.6 237.8Z" fill="white"/>
            <path d="M106.9 241.4L101.6 238.4L105.4 236.2L110.7 239.2L106.9 241.4Z" fill="white"/>
            <path d="M113.1 245L107.9 242L111.7 239.8L116.9 242.8L113.1 245Z" fill="white"/>
            <path d="M119.4 248.7L114.2 245.6L118 243.4L123.2 246.5L119.4 248.7Z" fill="white"/>
            <path d="M125.7 252.3L120.4 249.2L124.2 247L129.5 250.1L125.7 252.3Z" fill="white"/>
            <path d="M132 255.9L126.7 252.9L130.5 250.7L135.8 253.7L132 255.9Z" fill="white"/>
            <path d="M138.3 259.5L133 256.5L136.8 254.3L142.1 257.3L138.3 259.5Z" fill="white"/>
            <path d="M144.5 263.2L139.3 260.1L143.1 257.9L148.3 261L144.5 263.2Z" fill="white"/>
            <path d="M157.1 270.4L145.5 263.7L149.3 261.5L160.9 268.2L157.1 270.4Z" fill="white"/>
            <path d="M88.6001 237.5L80.1001 232.6L83.9001 230.4L92.4001 235.3L88.6001 237.5Z" fill="white"/>
            <path d="M94.9001 241.1L89.6001 238L93.4001 235.9L98.7001 238.9L94.9001 241.1Z" fill="white"/>
            <path d="M101.1 244.7L95.9 241.7L99.7 239.5L105 242.5L101.1 244.7Z" fill="white"/>
            <path d="M107.4 248.3L102.2 245.3L106 243.1L111.2 246.1L107.4 248.3Z" fill="white"/>
            <path d="M113.7 252L108.4 248.9L112.2 246.7L117.5 249.8L113.7 252Z" fill="white"/>
            <path d="M120 255.6L114.7 252.5L118.5 250.4L123.8 253.4L120 255.6Z" fill="white"/>
            <path d="M126.3 259.2L121 256.2L124.8 254L130.1 257L126.3 259.2Z" fill="white"/>
            <path d="M132.5 262.8L127.3 259.8L131.1 257.6L136.3 260.6L132.5 262.8Z" fill="white"/>
            <path d="M138.8 266.5L133.5 263.4L137.3 261.2L142.6 264.3L138.8 266.5Z" fill="white"/>
            <path d="M145.1 270.1L139.8 267L143.6 264.8L148.9 267.9L145.1 270.1Z" fill="white"/>
            <path d="M151.4 273.7L146.1 270.7L149.9 268.5L155.2 271.5L151.4 273.7Z" fill="white"/>
            <path d="M82.9 240.8L74.4 235.9L78.2 233.7L86.7 238.6L82.9 240.8Z" fill="white"/>
            <path d="M89.2 244.4L83.9 241.4L87.7 239.2L93 242.2L89.2 244.4Z" fill="white"/>
            <path d="M126.8 266.1L90.2001 245L94.0001 242.8L130.6 263.9L126.8 266.1Z" fill="white"/>
            <path d="M133.1 269.8L127.8 266.7L131.6 264.5L136.9 267.6L133.1 269.8Z" fill="white"/>
            <path d="M139.4 273.4L134.1 270.3L137.9 268.2L143.2 271.2L139.4 273.4Z" fill="white"/>
            <path d="M145.6 277L140.4 274L144.2 271.8L149.5 274.8L145.6 277Z" fill="white"/>
            <path d="M178.2 276L172.9 272.9L176.7 270.7L182 273.8L178.2 276Z" fill="white"/>
            <path d="M184.4 279.6L179.2 276.6L183 274.4L188.2 277.4L184.4 279.6Z" fill="white"/>
            <path d="M190.7 283.2L185.5 280.2L189.3 278L194.5 281L190.7 283.2Z" fill="white"/>
            <path d="M184.8 272.2L179.5 269.1L183.3 266.9L188.6 270L184.8 272.2Z" fill="white"/>
            <path d="M191 275.8L185.8 272.7L189.6 270.5L194.8 273.6L191 275.8Z" fill="white"/>
            <path d="M197.3 279.4L192.1 276.4L195.9 274.2L201.1 277.2L197.3 279.4Z" fill="white"/>
            <path d="M172.4 279.3L167.2 276.2L171 274L176.2 277.1L172.4 279.3Z" fill="white"/>
            <path d="M178.7 282.9L173.5 279.9L177.3 277.7L182.5 280.7L178.7 282.9Z" fill="white"/>
            <path d="M185 286.5L179.7 283.5L183.5 281.3L188.8 284.3L185 286.5Z" fill="white"/>
            <path d="M166.7 282.6L161.5 279.5L165.3 277.3L170.5 280.4L166.7 282.6Z" fill="white"/>
            <path d="M173 286.2L167.7 283.2L171.5 281L176.8 284L173 286.2Z" fill="white"/>
            <path d="M179.3 289.8L174 286.8L177.8 284.6L183.1 287.6L179.3 289.8Z" fill="white"/>
            <path d="M161 285.9L155.7 282.8L159.5 280.6L164.8 283.7L161 285.9Z" fill="white"/>
            <path d="M167.3 289.5L162 286.5L165.8 284.3L171.1 287.3L167.3 289.5Z" fill="white"/>
            <path d="M173.6 293.1L168.3 290.1L172.1 287.9L177.4 290.9L173.6 293.1Z" fill="white"/>
            <path d="M112.3 192.4C113.6 193.1 113.6 194.3 112.3 195.1L54.7001 228.6C53.4001 229.3 51.4001 229.3 50.1001 228.6L8.40005 204.5C7.10005 203.8 7.10005 202.6 8.40005 201.8L66.0001 168.3C67.3001 167.6 69.3001 167.6 70.6001 168.3L112.3 192.4Z" fill="url(#paint27_linear_101_114)"/>
            <path d="M54.7 228.5C53.4 229.2 51.8 229.2 50.4 228.7C50 228.6 8.70002 204.6 8.40002 204.5V205.4C8.70002 205.5 50.1 229.5 50.3 229.6C51 229.9 51.7 230 52.5 230C53.3 230 54 229.8 54.7 229.4L112.3 195.9V195L54.7 228.5Z" fill="url(#paint28_linear_101_114)"/>
            <path d="M113.2 193.7C113.2 194.3 112.7 194.7 112.3 195V195.9C112.7 195.7 112.9 195.5 113.1 195.1L113.2 194.9C113.2 194.9 113.2 194.9 113.2 195C113.2 195 113.2 194.8 113.3 194.7V194.8C113.3 194.8 113.3 194.6 113.3 194.5C113.3 194.3 113.2 194 113.2 193.7Z" fill="url(#paint29_linear_101_114)"/>
            <mask id="mask0_101_114"  maskUnits="userSpaceOnUse" x="7" y="203" width="2" height="3">
            <path d="M7.40002 204V203.1C7.40002 203.6 7.70002 204.1 8.40002 204.4V205.3C7.70002 204.9 7.40002 204.4 7.40002 204Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_101_114)">
            <path d="M8.40002 204.4V205.3C7.80002 204.9 7.40002 204.4 7.40002 204V203.1C7.40002 203.6 7.70002 204.1 8.40002 204.4Z" fill="url(#paint30_linear_101_114)"/>
            </g>
            <path d="M110.9 191.8V192.9L52.4 226.9V225.8L110.9 191.8Z" fill="url(#paint31_linear_101_114)"/>
            <path d="M52.4001 225.8V226.9L10.3 202.5V201.5L52.4001 225.8Z" fill="url(#paint32_linear_101_114)"/>
            <path d="M110.9 191.8L52.4001 225.8L10.3 201.5L68.7001 167.5L110.9 191.8Z" fill="url(#paint33_linear_101_114)"/>
            <mask id="mask1_101_114" maskUnits="userSpaceOnUse" x="78" y="176" width="2" height="2">
            <path d="M78.6001 177.1V176C78.6001 176.3 78.8001 176.7 79.2001 176.9V178C78.8001 177.8 78.6001 177.5 78.6001 177.1Z" fill="white"/>
            </mask>
            <g mask="url(#mask1_101_114)">
            <path d="M79.2001 177V178.1C78.8001 177.9 78.6001 177.5 78.6001 177.2V176.1C78.6001 176.4 78.8001 176.7 79.2001 177Z" fill="#282D70"/>
            </g>
            <path d="M97.4001 176.6C97.4001 176.8 97.2001 176.9 97.1001 177V178.1C97.2001 178 97.4001 177.9 97.4001 177.7C97.4001 177.7 97.4001 177.7 97.4001 177.6V176.6Z" fill="url(#paint34_linear_101_114)"/>
            <path d="M93.9001 178.9V180L97.1002 178.1V177.1L93.9001 178.9Z" fill="url(#paint35_linear_101_114)"/>
            <path d="M100.1 182.5V183.6L96.0001 186V184.9L100.1 182.5Z" fill="#282D70"/>
            <path d="M92.9001 184.9V186L79.2001 178V177L92.9001 184.9Z" fill="#282D70"/>
            <path d="M95.8001 186.1C95.9001 186.1 95.9002 186 96.0002 186V184.9C95.1002 185.4 93.8001 185.4 92.9001 184.9V186C93.8001 186.4 94.9001 186.4 95.8001 186.1Z" fill="#282D70"/>
            <path d="M97.1001 177.1L93.9001 178.9L100.2 182.5L96.1001 184.9C95.3001 185.4 93.9001 185.4 93.0001 184.9L79.3001 177C78.4001 176.5 78.4001 175.7 79.3001 175.2L83.4001 172.8L89.7001 176.4L92.9001 174.6C93.3001 174.3 94.1001 174.3 94.5001 174.6L97.2001 176.2C97.5001 176.4 97.5001 176.8 97.1001 177.1Z" fill="url(#paint36_linear_101_114)"/>
            <path d="M94.7001 177.2C94.1001 177.5 93.2001 177.5 92.7001 177.2C92.1001 176.9 92.1001 176.4 92.7001 176C93.3001 175.7 94.2001 175.7 94.7001 176C95.2001 176.4 95.2001 176.9 94.7001 177.2Z" fill="#282D70"/>
            <path d="M302.5 254.5L306 253.3L328.3 115.4L324.8 116.6L302.5 254.5Z" fill="url(#paint37_linear_101_114)"/>
            <path d="M145.6 163.9L149 162.7L171.3 24.8L167.8 25.9L145.6 163.9Z" fill="url(#paint38_linear_101_114)"/>
            <path d="M302.5 254.5L145.6 163.9L167.8 25.9L324.8 116.6L302.5 254.5Z" fill="url(#paint39_linear_101_114)"/>
            <g opacity="0.4">
            <rect x="122.014" y="0.12561" width="228.331" height="280.894" fill="url(#pattern0_101_114)"/>
            </g>
            <path d="M321.1 118.3L170.4 31.3L149.3 162.1L300 249.2L321.1 118.3Z" fill="url(#paint40_linear_101_114)"/>
            <path d="M171.3 24.8L328.3 115.4L324.8 116.6L167.8 25.9L171.3 24.8Z" fill="url(#paint41_linear_101_114)"/>
            <path d="M229.9 97.9L267.7 119.6L260.7 163L222.9 141.3L229.9 97.9Z" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M224.1 134L261.9 155.8" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M225.2 126.8L263.1 148.6" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M226.4 119.6L264.2 141.3" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M227.6 112.3L265.4 134.1" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M228.8 105.1L266.6 126.9" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M261.4 116L254.4 159.4" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M255.1 112.4L248.1 155.8" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M248.8 108.8L241.8 152.2" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M242.5 105.1L235.5 148.5" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M236.2 101.5L229.2 144.9" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M267.7 119.6L305.4 141.4L298.4 184.7L260.7 163L267.7 119.6Z" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M261.9 155.8L299.6 177.5" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M263.1 148.6L300.7 170.2" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M264.2 141.3L301.9 163" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M265.4 134.1L303.1 155.8" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M266.6 126.9L304.2 148.6" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M299.1 137.8L292.1 181.1" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M292.9 134.1L285.9 177.5" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M286.6 130.5L279.6 173.9" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M280.3 126.9L273.3 170.2" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M274 123.3L267 166.6" stroke="#42BAEC" strokeWidth="0.501" stroke-miterlimit="10"/>
            <path d="M294.3 162.6C291.6 170.6 286.4 178 283.9 158.8C281.4 139.6 271.7 151.3 267.2 158.6C258.6 165.4 256.9 137.1 253.6 135.6C250.3 134.1 247.3 147 242.8 148.7C241.1 149 239.9 141 239.9 141C239.9 141 240.2 126.4 235.3 123.8C230.5 121.2 223.1 134.9 221.7 148.3L297.2 191.6L301.9 162.3C299.2 160.5 296.1 159.2 294.3 162.6Z" fill="url(#paint42_linear_101_114)"/>
            <path d="M293.7 173C292.2 172.8 292.3 170.3 291.7 168.7C291 167.4 289.6 166.2 288.7 166.5C287.2 166.9 286.6 168.5 285.5 169.7C284.3 170.7 283.3 172.6 281.6 172C277.8 170.6 275 166 273.6 161.9C271.5 155.5 272.4 147.1 266.5 143.1C265.8 142.7 264.7 144 264 144.9C261.5 148.2 261 154.8 255.8 153.9C254 153.7 252.9 151.1 251.9 149.1C249.1 144 248.1 138 244.2 134.1C241.1 130.9 236.5 130.1 233.1 130.7C231.6 131 230.5 132.1 229 132.5C227.4 132.8 225.8 133 224.2 133.3L221.2 152.1L296.7 195.5L300.7 170.6C300.2 170.7 299.7 170.9 299.2 171C297.2 171.3 296.1 173.5 293.7 173Z" fill="#42BAEC"/>
            <path d="M296.2 180.2C295.8 179.3 294.8 174.4 292.4 173.2C290.5 172.2 288.8 176.5 287.3 177.2C285 178.1 285.3 173.1 283.9 171.6C280.5 168 280.8 179.1 278.7 177.8C276.6 176.6 276.6 171.1 276.1 167.5C274.3 140.4 267.5 172.1 261.1 168.8C254.6 165.5 258.5 156.1 253.4 151.7C248.2 148.1 247.1 158.8 242.6 157.8C232.7 153.7 246 137.6 222.5 144.3L220.6 156L296.1 199.4L299.7 177.2C298.6 177.6 297.4 182.1 296.2 180.2Z" fill="white"/>
            <path d="M169.4 143.5L165.3 141.2L165.5 139.7L169.6 142.1L169.4 143.5Z" fill="white"/>
            <path d="M177.6 148.2L173.5 145.9L173.7 144.4L177.9 146.8L177.6 148.2Z" fill="white"/>
            <path d="M181.7 150.6L177.6 148.2L177.9 146.8L182 149.1L181.7 150.6Z" fill="white"/>
            <path d="M185.9 153L181.7 150.6L182 149.1L186.1 151.5L185.9 153Z" fill="white"/>
            <path d="M190 155.3L185.9 153L186.1 151.5L190.2 153.9L190 155.3Z" fill="white"/>
            <path d="M168.9 146.7L164.8 144.3L165 142.9L169.1 145.2L168.9 146.7Z" fill="white"/>
            <path d="M173 149L168.9 146.7L169.1 145.2L173.2 147.6L173 149Z" fill="white"/>
            <path d="M177.1 151.4L173 149L173.2 147.6L177.4 149.9L177.1 151.4Z" fill="white"/>
            <path d="M185.3 156.1L181.2 153.8L181.5 152.3L185.6 154.7L185.3 156.1Z" fill="white"/>
            <path d="M189.5 158.5L185.3 156.1L185.6 154.7L189.7 157L189.5 158.5Z" fill="white"/>
            <path d="M168.4 149.8L164.2 147.5L164.5 146L168.6 148.4L168.4 149.8Z" fill="white"/>
            <path d="M176.6 154.6L172.5 152.2L172.7 150.7L176.8 153.1L176.6 154.6Z" fill="white"/>
            <path d="M180.7 156.9L176.6 154.6L176.8 153.1L181 155.5L180.7 156.9Z" fill="white"/>
            <path d="M188.9 161.6L184.8 159.3L185.1 157.8L189.2 160.2L188.9 161.6Z" fill="white"/>
            <path d="M167.8 153L163.7 150.7L164 149.2L168.1 151.6L167.8 153Z" fill="white"/>
            <path d="M172 155.4L167.8 153L168.1 151.6L172.2 153.9L172 155.4Z" fill="white"/>
            <path d="M180.2 160.1L176.1 157.7L176.3 156.3L180.4 158.6L180.2 160.1Z" fill="white"/>
            <path d="M184.3 162.5L180.2 160.1L180.4 158.6L184.6 161L184.3 162.5Z" fill="white"/>
            <path d="M188.4 164.8L184.3 162.5L184.6 161L188.7 163.3L188.4 164.8Z" fill="white"/>
            <path d="M167.3 156.2L163.2 153.8L163.4 152.4L167.6 154.7L167.3 156.2Z" fill="white"/>
            <path d="M171.5 158.5L167.3 156.2L167.6 154.7L171.7 157.1L171.5 158.5Z" fill="white"/>
            <path d="M175.6 160.9L171.5 158.5L171.7 157.1L175.8 159.4L175.6 160.9Z" fill="white"/>
            <path d="M179.7 163.3L175.6 160.9L175.8 159.4L179.9 161.8L179.7 163.3Z" fill="white"/>
            <path d="M187.9 168L183.8 165.6L184 164.2L188.2 166.5L187.9 168Z" fill="white"/>
            <path d="M166.8 159.4L162.7 157L162.9 155.5L167.1 157.9L166.8 159.4Z" fill="white"/>
            <path d="M175.1 164.1L170.9 161.7L171.2 160.2L175.3 162.6L175.1 164.1Z" fill="white"/>
            <path d="M179.2 166.4L175.1 164.1L175.3 162.6L179.4 165L179.2 166.4Z" fill="white"/>
            <path d="M183.3 168.8L179.2 166.4L179.4 165L183.5 167.3L183.3 168.8Z" fill="white"/>
            <path d="M187.4 171.1L183.3 168.8L183.5 167.3L187.6 169.7L187.4 171.1Z" fill="white"/>
            <path d="M166.3 162.5L162.2 160.2L162.4 158.7L166.5 161.1L166.3 162.5Z" fill="white"/>
            <path d="M174.5 167.2L170.4 164.9L170.7 163.4L174.8 165.8L174.5 167.2Z" fill="white"/>
            <path d="M178.7 169.6L174.5 167.2L174.8 165.8L178.9 168.1L178.7 169.6Z" fill="white"/>
            <path d="M186.9 174.3L182.8 171.9L183 170.5L187.1 172.8L186.9 174.3Z" fill="white"/>
            <path d="M276.8 205.1L272.7 202.7L272.9 201.3L277 203.6L276.8 205.1Z" fill="white"/>
            <path d="M281 207.5L276.9 205.2L277.2 203.7L281.2 206L281 207.5Z" fill="white"/>
            <path d="M285.1 209.8L281 207.5L281.2 206L285.3 208.4L285.1 209.8Z" fill="white"/>
            <path d="M289.2 212.2L285.1 209.8L285.3 208.4L289.4 210.7L289.2 212.2Z" fill="white"/>
            <path d="M293.2 214.5L289.2 212.2L289.4 210.7L293.5 213.1L293.2 214.5Z" fill="white"/>
            <path d="M276.3 208.2L272.2 205.9L272.4 204.4L276.5 206.8L276.3 208.2Z" fill="white"/>
            <path d="M276.4 208.3L276.3 208.2L276.5 206.8L276.6 206.9L276.4 208.3Z" fill="white"/>
            <path d="M280.5 210.7L276.4 208.3L276.6 206.9L280.7 209.2L280.5 210.7Z" fill="white"/>
            <path d="M288.7 215.3L284.6 213L284.8 211.5L288.9 213.9L288.7 215.3Z" fill="white"/>
            <path d="M292.7 217.7L288.7 215.3L288.9 213.9L293 216.2L292.7 217.7Z" fill="white"/>
            <path d="M275.7 211.4L271.7 209L271.9 207.6L276 209.9L275.7 211.4Z" fill="white"/>
            <path d="M280 213.8L275.9 211.5L276.1 210L280.2 212.4L280 213.8Z" fill="white"/>
            <path d="M284.1 216.2L280 213.8L280.2 212.4L284.3 214.7L284.1 216.2Z" fill="white"/>
            <path d="M292.2 220.8L288.1 218.5L288.4 217L292.5 219.4L292.2 220.8Z" fill="white"/>
            <path d="M275.2 214.5L271.1 212.2L271.4 210.7L275.5 213.1L275.2 214.5Z" fill="white"/>
            <path d="M275.4 214.6L275.2 214.5L275.5 213.1L275.6 213.2L275.4 214.6Z" fill="white"/>
            <path d="M283.6 219.3L279.5 217L279.7 215.5L283.8 217.9L283.6 219.3Z" fill="white"/>
            <path d="M287.6 221.6L283.6 219.3L283.8 217.9L287.9 220.2L287.6 221.6Z" fill="white"/>
            <path d="M291.7 224L287.6 221.6L287.9 220.2L292 222.5L291.7 224Z" fill="white"/>
            <path d="M274.7 217.7L270.6 215.4L270.9 213.9L275 216.2L274.7 217.7Z" fill="white"/>
            <path d="M274.9 217.8L274.7 217.7L275 216.2L275.1 216.3L274.9 217.8Z" fill="white"/>
            <path d="M279 220.1L274.9 217.8L275.1 216.3L279.2 218.7L279 220.1Z" fill="white"/>
            <path d="M283 222.5L279 220.1L279.2 218.7L283.3 221L283 222.5Z" fill="white"/>
            <path d="M291.2 227.1L287.1 224.8L287.4 223.3L291.4 225.7L291.2 227.1Z" fill="white"/>
            <path d="M274.2 220.8L270.1 218.5L270.4 217.1L274.4 219.4L274.2 220.8Z" fill="white"/>
            <path d="M278.5 223.3L274.4 220.9L274.6 219.5L278.7 221.8L278.5 223.3Z" fill="white"/>
            <path d="M282.5 225.6L278.5 223.3L278.7 221.8L282.8 224.2L282.5 225.6Z" fill="white"/>
            <path d="M286.6 228L282.5 225.6L282.8 224.2L286.9 226.5L286.6 228Z" fill="white"/>
            <path d="M290.7 230.3L286.6 228L286.9 226.5L290.9 228.8L290.7 230.3Z" fill="white"/>
            <path d="M273.7 224L269.6 221.7L269.9 220.2L273.9 222.5L273.7 224Z" fill="white"/>
            <path d="M277.9 226.4L273.9 224.1L274.1 222.6L278.2 225L277.9 226.4Z" fill="white"/>
            <path d="M282 228.8L277.9 226.4L278.2 225L282.3 227.3L282 228.8Z" fill="white"/>
            <path d="M290.2 233.4L286.1 231.1L286.3 229.7L290.4 232L290.2 233.4Z" fill="white"/>
            <path d="M203 170.5L198.4 167.9L198.7 166.3L203.2 168.9L203 170.5Z" fill="white"/>
            <path d="M207.5 173.1L203 170.5L203.2 168.9L207.8 171.5L207.5 173.1Z" fill="white"/>
            <path d="M212.1 175.7L207.5 173.1L207.8 171.5L212.3 174.1L212.1 175.7Z" fill="white"/>
            <path d="M216.6 178.3L212.1 175.7L212.3 174.1L216.9 176.7L216.6 178.3Z" fill="white"/>
            <path d="M221.1 180.9L216.6 178.3L216.9 176.7L221.4 179.3L221.1 180.9Z" fill="white"/>
            <path d="M202.4 174L197.9 171.4L198.1 169.8L202.7 172.4L202.4 174Z" fill="white"/>
            <path d="M206.9 176.6L202.4 174L202.7 172.4L207.2 175L206.9 176.6Z" fill="white"/>
            <path d="M211.5 179.2L206.9 176.6L207.2 175L211.8 177.6L211.5 179.2Z" fill="white"/>
            <path d="M216 181.8L211.5 179.2L211.8 177.6L216.3 180.2L216 181.8Z" fill="white"/>
            <path d="M220.6 184.4L216 181.8L216.3 180.2L220.8 182.8L220.6 184.4Z" fill="white"/>
            <path d="M225.1 187L220.6 184.4L220.8 182.8L225.4 185.4L225.1 187Z" fill="white"/>
            <path d="M201.8 177.5L197.3 174.9L197.6 173.3L202.1 175.9L201.8 177.5Z" fill="white"/>
            <path d="M206.4 180.1L201.8 177.5L202.1 175.9L206.6 178.5L206.4 180.1Z" fill="white"/>
            <path d="M210.9 182.7L206.4 180.1L206.6 178.5L211.2 181.1L210.9 182.7Z" fill="white"/>
            <path d="M220 187.9L215.5 185.3L215.7 183.7L220.3 186.3L220 187.9Z" fill="white"/>
            <path d="M224.5 190.5L220 187.9L220.3 186.3L224.8 188.9L224.5 190.5Z" fill="white"/>
            <path d="M236.9 86.9L232.1 84.2L232.4 82.6L237.1 85.3L236.9 86.9Z" fill="#40A1DA"/>
            <path d="M241.6 89.6001L236.9 86.9L237.1 85.3L241.8 88L241.6 89.6001Z" fill="#40A1DA"/>
            <path d="M246.3 92.3L241.6 89.6L241.8 88L246.5 90.7L246.3 92.3Z" fill="#40A1DA"/>
            <path d="M250.9 95.1L246.3 92.3L246.5 90.7L251.2 93.5L250.9 95.1Z" fill="#40A1DA"/>
            <path d="M255.6 97.8L250.9 95.1L251.2 93.5L255.9 96.2L255.6 97.8Z" fill="#40A1DA"/>
            <path d="M236.3 90.4L231.6 87.7L231.8 86.1L236.5 88.8L236.3 90.4Z" fill="#40A1DA"/>
            <path d="M241 93.1001L236.3 90.4L236.5 88.8L241.2 91.5L241 93.1001Z" fill="#40A1DA"/>
            <path d="M245.7 95.8L241 93.1L241.2 91.5L245.9 94.2L245.7 95.8Z" fill="#40A1DA"/>
            <path d="M250.4 98.5L245.7 95.8L245.9 94.2L250.6 96.9L250.4 98.5Z" fill="#40A1DA"/>
            <path d="M255.1 101.3L250.4 98.5L250.6 96.9L255.3 99.6L255.1 101.3Z" fill="#40A1DA"/>
            <path d="M259.8 104L255.1 101.3L255.3 99.6L260 102.4L259.8 104Z" fill="#40A1DA"/>
            <path d="M235.7 93.9L231 91.2L231.3 89.6L236 92.3L235.7 93.9Z" fill="#40A1DA"/>
            <path d="M240.4 96.6001L235.7 93.9L236 92.3L240.7 95L240.4 96.6001Z" fill="#40A1DA"/>
            <path d="M245.1 99.3L240.4 96.6L240.7 95L245.4 97.7L245.1 99.3Z" fill="#40A1DA"/>
            <path d="M254.5 104.7L249.8 102L250.1 100.4L254.8 103.1L254.5 104.7Z" fill="#40A1DA"/>
            <path d="M259.2 107.5L254.5 104.7L254.8 103.1L259.5 105.8L259.2 107.5Z" fill="#40A1DA"/>
            <path d="M251.2 93.5L303.2 123.5L302.9 125.1L250.9 95.1" fill="#40A1DA"/>
            <path d="M250.6 96.9L302.6 126.9L302.4 128.5L250.4 98.5" fill="#40A1DA"/>
            <path d="M307 131.2L302.4 128.5L302.6 126.9L307.3 129.6L307 131.2Z" fill="#40A1DA"/>
            <path d="M250.1 100.4L302.1 130.4L301.8 132L249.8 102" fill="#40A1DA"/>
            <path d="M306.5 134.7L301.8 132L302.1 130.4L306.7 133.1L306.5 134.7Z" fill="#40A1DA"/>
            <path d="M244.1 194.8L240.7 192.9L240.9 191.7L244.3 193.6L244.1 194.8Z" fill="white"/>
            <path d="M250.8 198.7L247.4 196.7L247.6 195.6L251 197.5L250.8 198.7Z" fill="white"/>
            <path d="M257.5 202.5L254.1 200.6L254.3 199.4L257.7 201.3L257.5 202.5Z" fill="white"/>
            <path d="M243.7 197.4L240.3 195.5L240.5 194.3L243.9 196.2L243.7 197.4Z" fill="white"/>
            <path d="M250.4 201.2L247 199.3L247.2 198.1L250.6 200.1L250.4 201.2Z" fill="white"/>
            <path d="M253.7 203.2L250.4 201.2L250.6 200.1L253.9 202L253.7 203.2Z" fill="white"/>
            <path d="M260.4 207L257.1 205.1L257.2 203.9L260.6 205.8L260.4 207Z" fill="white"/>
            <path d="M243.2 200L239.9 198.1L240.1 196.9L243.4 198.8L243.2 200Z" fill="white"/>
            <path d="M246.6 201.9L243.2 200L243.4 198.8L246.8 200.7L246.6 201.9Z" fill="white"/>
            <path d="M249.9 203.8L246.6 201.9L246.8 200.7L250.1 202.6L249.9 203.8Z" fill="white"/>
            <path d="M256.6 207.7L253.3 205.7L253.5 204.6L256.8 206.5L256.6 207.7Z" fill="white"/>
            <path d="M260 209.6L256.6 207.7L256.8 206.5L260.2 208.4L260 209.6Z" fill="white"/>
            <path d="M193.6 67.5C193.6 67.3 193.7 67.2 193.7 67L195.4 68C195.4 68.2 195.3 68.4 195.3 68.6L193.6 67.5Z" fill="url(#paint43_linear_101_114)"/>
            <path d="M193.4 68.3C193.5 68.2 193.5 68 193.5 67.9L195.1 69.1C195 69.3 195 69.5 194.9 69.6L193.4 68.3Z" fill="url(#paint44_linear_101_114)"/>
            <path d="M193.1 69C193.2 68.9 193.2 68.7 193.3 68.6L194.9 70C194.8 70.2 194.8 70.3 194.7 70.5L193.1 69Z" fill="url(#paint45_linear_101_114)"/>
            <path d="M192.7 69.6C192.8 69.5 192.8 69.4 192.9 69.2L194.4 70.8C194.3 71 194.2 71.1 194.1 71.3L192.7 69.6Z" fill="url(#paint46_linear_101_114)"/>
            <path d="M192.3 70.2C192.4 70.1 192.5 70 192.5 69.9L193.9 71.6C193.8 71.7 193.7 71.9 193.6 72L192.3 70.2Z" fill="url(#paint47_linear_101_114)"/>
            <path d="M191.9 70.7C192 70.6 192.1 70.5 192.2 70.4L193.5 72.2C193.4 72.3 193.3 72.4 193.2 72.6L191.9 70.7Z" fill="url(#paint48_linear_101_114)"/>
            <path d="M191.3 71.1C191.4 71 191.5 70.9 191.6 70.9L192.8 72.8C192.7 72.9 192.5 73 192.4 73.1L191.3 71.1Z" fill="url(#paint49_linear_101_114)"/>
            <path d="M190.8 71.4C190.9 71.3 191 71.3 191.1 71.2L192.1 73.2C192 73.3 191.8 73.4 191.7 73.4L190.8 71.4Z" fill="url(#paint50_linear_101_114)"/>
            <path d="M190.2 71.7C190.3 71.7 190.4 71.6 190.6 71.6L191.5 73.7C191.4 73.8 191.2 73.8 191.1 73.9L190.2 71.7Z" fill="url(#paint51_linear_101_114)"/>
            <path d="M189.5 71.9C189.6 71.9 189.8 71.8 189.9 71.8L190.7 74C190.5 74 190.4 74.1 190.2 74.1L189.5 71.9Z" fill="url(#paint52_linear_101_114)"/>
            <path d="M188.9 72C189 72 189.2 72 189.3 72L189.9 74.2C189.7 74.2 189.6 74.2 189.4 74.2L188.9 72Z" fill="url(#paint53_linear_101_114)"/>
            <path d="M188.2 72C188.3 72 188.5 72 188.6 72L189 74.2C188.8 74.2 188.7 74.2 188.5 74.2L188.2 72Z" fill="url(#paint54_linear_101_114)"/>
            <path d="M187.5 71.9C187.6 71.9 187.8 71.9 187.9 72L188.2 74.2C188 74.2 187.9 74.1 187.7 74.1L187.5 71.9Z" fill="url(#paint55_linear_101_114)"/>
            <path d="M186.8 71.7C186.9 71.7 187.1 71.8 187.2 71.8L187.3 74C187.1 74 187 73.9 186.8 73.8V71.7Z" fill="url(#paint56_linear_101_114)"/>
            <path d="M186.1 71.4C186.2 71.5 186.4 71.5 186.5 71.6L186.4 73.7C186.2 73.6 186.1 73.6 185.9 73.5L186.1 71.4Z" fill="url(#paint57_linear_101_114)"/>
            <path d="M185.4 71C185.5 71.1 185.7 71.2 185.8 71.2L185.6 73.2C185.4 73.1 185.3 73 185.1 72.9L185.4 71Z" fill="url(#paint58_linear_101_114)"/>
            <path d="M184.8 70.6C184.9 70.7 185.1 70.8 185.2 70.9L184.8 72.9C184.6 72.8 184.5 72.7 184.3 72.6L184.8 70.6Z" fill="url(#paint59_linear_101_114)"/>
            <path d="M184.1 70.1C184.2 70.2 184.4 70.3 184.5 70.4L184 72.3C183.8 72.2 183.7 72 183.5 71.9L184.1 70.1Z" fill="url(#paint60_linear_101_114)"/>
            <path d="M183.5 69.6C183.6 69.7 183.7 69.8 183.9 70L183.2 71.7C183 71.6 182.9 71.4 182.7 71.3L183.5 69.6Z" fill="url(#paint61_linear_101_114)"/>
            <path d="M182.9 68.9C183 69 183.1 69.2 183.3 69.3L182.5 70.9C182.3 70.7 182.2 70.6 182.1 70.4L182.9 68.9Z" fill="url(#paint62_linear_101_114)"/>
            <path d="M182.3 68.2C182.4 68.3 182.5 68.5 182.6 68.6L181.6 70C181.5 69.8 181.3 69.7 181.2 69.5L182.3 68.2Z" fill="url(#paint63_linear_101_114)"/>
            <path d="M181.8 67.4C181.9 67.6 182 67.7 182.1 67.9L181 69.1C180.9 68.9 180.7 68.7 180.6 68.5L181.8 67.4Z" fill="url(#paint64_linear_101_114)"/>
            <path d="M181.3 66.6C181.4 66.8 181.5 66.9 181.6 67.1L180.4 68.2C180.3 68 180.2 67.8 180.1 67.6L181.3 66.6Z" fill="url(#paint65_linear_101_114)"/>
            <path d="M180.9 65.8C181 66 181.1 66.1 181.1 66.3L179.7 67.2C179.6 67 179.5 66.8 179.4 66.6L180.9 65.8Z" fill="url(#paint66_linear_101_114)"/>
            <path d="M180.5 64.9C180.6 65.1 180.6 65.2 180.7 65.4L179.2 66C179.1 65.8 179 65.6 178.9 65.4L180.5 64.9Z" fill="url(#paint67_linear_101_114)"/>
            <path d="M180.2 64C180.3 64.2 180.3 64.4 180.4 64.5L178.9 64.9C178.8 64.7 178.8 64.5 178.7 64.2L180.2 64Z" fill="url(#paint68_linear_101_114)"/>
            <path d="M179.9 63.1C179.9 63.3 180 63.5 180 63.6L178.4 63.8C178.3 63.6 178.3 63.4 178.2 63.1H179.9Z" fill="url(#paint69_linear_101_114)"/>
            <path d="M179.8 62.2C179.8 62.4 179.9 62.6 179.9 62.7H178.2C178.2 62.5 178.1 62.3 178.1 62L179.8 62.2Z" fill="url(#paint70_linear_101_114)"/>
            <path d="M179.7 61.3C179.7 61.5 179.7 61.7 179.8 61.8L178.1 61.6C178.1 61.4 178 61.2 178 60.9L179.7 61.3Z" fill="url(#paint71_linear_101_114)"/>
            <path d="M179.6 60.4C179.6 60.6 179.6 60.7 179.6 60.9L177.9 60.5C177.9 60.3 177.9 60.1 177.9 59.8L179.6 60.4Z" fill="url(#paint72_linear_101_114)"/>
            <path d="M179.7 59.5C179.7 59.7 179.7 59.8 179.7 60L178 59.4C178 59.2 178 59 178 58.8L179.7 59.5Z" fill="url(#paint73_linear_101_114)"/>
            <path d="M179.8 58.7C179.8 58.9 179.8 59 179.7 59.2L178 58.3C178 58.1 178.1 57.9 178.1 57.7L179.8 58.7Z" fill="url(#paint74_linear_101_114)"/>
            <path d="M179.9 58C179.9 58.2 179.8 58.3 179.8 58.5L178.1 57.5C178.1 57.3 178.2 57.1 178.2 56.9L179.9 58Z" fill="url(#paint75_linear_101_114)"/>
            <path d="M180.1 57.2C180 57.3 180 57.5 180 57.6L178.4 56.4C178.5 56.2 178.5 56 178.6 55.9L180.1 57.2Z" fill="url(#paint76_linear_101_114)"/>
            <path d="M180.4 56.5C180.3 56.6 180.3 56.8 180.2 56.9L178.6 55.5C178.7 55.3 178.7 55.2 178.8 55L180.4 56.5Z" fill="url(#paint77_linear_101_114)"/>
            <path d="M180.8 55.9C180.7 56 180.6 56.1 180.6 56.3L179.1 54.7C179.2 54.5 179.3 54.4 179.4 54.2L180.8 55.9Z" fill="url(#paint78_linear_101_114)"/>
            <path d="M181.2 55.3C181.1 55.4 181 55.5 180.9 55.6L179.5 53.9C179.6 53.8 179.7 53.6 179.8 53.5L181.2 55.3Z" fill="url(#paint79_linear_101_114)"/>
            <path d="M181.7 54.8C181.6 54.9 181.5 55 181.4 55.1L180.1 53.3C180.2 53.2 180.3 53.1 180.4 52.9L181.7 54.8Z" fill="url(#paint80_linear_101_114)"/>
            <path d="M182.2 54.4C182.1 54.5 182 54.6 181.9 54.6L180.7 52.6C180.8 52.5 181 52.4 181.1 52.3L182.2 54.4Z" fill="url(#paint81_linear_101_114)"/>
            <path d="M182.7 54C182.6 54.1 182.5 54.1 182.4 54.2L181.4 52.2C181.5 52.1 181.7 52 181.8 52L182.7 54Z" fill="url(#paint82_linear_101_114)"/>
            <path d="M183.3 53.8C183.2 53.8 183.1 53.9 182.9 53.9L182 51.8C182.1 51.7 182.3 51.7 182.4 51.6L183.3 53.8Z" fill="url(#paint83_linear_101_114)"/>
            <path d="M184 53.6C183.9 53.6 183.7 53.7 183.6 53.7L182.8 51.5C183 51.5 183.1 51.4 183.3 51.4L184 53.6Z" fill="url(#paint84_linear_101_114)"/>
            <path d="M184.6 53.5C184.5 53.5 184.3 53.5 184.2 53.5L183.6 51.3C183.8 51.3 183.9 51.3 184.1 51.3L184.6 53.5Z" fill="url(#paint85_linear_101_114)"/>
            <path d="M185.3 53.5C185.2 53.5 185 53.5 184.9 53.5L184.5 51.3C184.7 51.3 184.8 51.3 185 51.3L185.3 53.5Z" fill="url(#paint86_linear_101_114)"/>
            <path d="M186 53.6C185.9 53.6 185.7 53.6 185.6 53.5L185.3 51.3C185.5 51.3 185.6 51.4 185.8 51.4L186 53.6Z" fill="url(#paint87_linear_101_114)"/>
            <path d="M186.7 53.8C186.6 53.8 186.4 53.7 186.3 53.7L186.2 51.5C186.4 51.5 186.5 51.6 186.7 51.7V53.8Z" fill="url(#paint88_linear_101_114)"/>
            <path d="M187.4 54.1C187.3 54 187.1 54 187 53.9L187.1 51.8C187.3 51.9 187.4 51.9 187.6 52L187.4 54.1Z" fill="url(#paint89_linear_101_114)"/>
            <path d="M188.1 54.4C188 54.3 187.8 54.2 187.7 54.2L187.9 52.2C188.1 52.3 188.2 52.4 188.4 52.5L188.1 54.4Z" fill="url(#paint90_linear_101_114)"/>
            <path d="M188.7 54.8C188.6 54.7 188.4 54.6 188.3 54.5L188.7 52.5C188.9 52.6 189 52.7 189.2 52.8L188.7 54.8Z" fill="url(#paint91_linear_101_114)"/>
            <path d="M189.4 55.3C189.3 55.2 189.1 55.1 189 55L189.5 53.1C189.7 53.2 189.8 53.4 190 53.5L189.4 55.3Z" fill="url(#paint92_linear_101_114)"/>
            <path d="M190 55.9C189.9 55.8 189.8 55.7 189.6 55.5L190.3 53.8C190.5 53.9 190.6 54.1 190.8 54.2L190 55.9Z" fill="url(#paint93_linear_101_114)"/>
            <path d="M190.6 56.6C190.5 56.5 190.4 56.3 190.2 56.2L191 54.6C191.2 54.8 191.3 54.9 191.4 55.1L190.6 56.6Z" fill="url(#paint94_linear_101_114)"/>
            <path d="M191.2 57.3C191.1 57.2 191 57 190.9 56.9L191.9 55.5C192 55.7 192.2 55.8 192.3 56L191.2 57.3Z" fill="url(#paint95_linear_101_114)"/>
            <path d="M191.7 58C191.6 57.8 191.5 57.7 191.4 57.5L192.5 56.3C192.6 56.5 192.8 56.7 192.9 56.9L191.7 58Z" fill="url(#paint96_linear_101_114)"/>
            <path d="M192.2 58.8C192.1 58.6 192 58.5 191.9 58.3L193.1 57.3C193.2 57.5 193.3 57.7 193.4 57.9L192.2 58.8Z" fill="url(#paint97_linear_101_114)"/>
            <path d="M192.6 59.7C192.5 59.5 192.4 59.4 192.4 59.2L193.8 58.3C193.9 58.5 194 58.7 194.1 58.9L192.6 59.7Z" fill="url(#paint98_linear_101_114)"/>
            <path d="M193 60.6C192.9 60.4 192.9 60.3 192.8 60.1L194.2 59.5C194.3 59.7 194.4 59.9 194.5 60.1L193 60.6Z" fill="url(#paint99_linear_101_114)"/>
            <path d="M193.3 61.5C193.2 61.3 193.2 61.1 193.1 61L194.6 60.6C194.7 60.8 194.7 61 194.8 61.3L193.3 61.5Z" fill="url(#paint100_linear_101_114)"/>
            <path d="M193.6 62.4C193.6 62.2 193.5 62 193.5 61.9L195.1 61.7C195.2 61.9 195.2 62.1 195.3 62.4H193.6Z" fill="url(#paint101_linear_101_114)"/>
            <path d="M193.7 63.3C193.7 63.1 193.6 62.9 193.6 62.8H195.3C195.3 63 195.4 63.2 195.4 63.5L193.7 63.3Z" fill="url(#paint102_linear_101_114)"/>
            <path d="M193.8 64.2C193.8 64 193.8 63.8 193.7 63.7L195.4 63.9C195.4 64.1 195.5 64.3 195.5 64.6L193.8 64.2Z" fill="url(#paint103_linear_101_114)"/>
            <path d="M193.9 65.1C193.9 64.9 193.9 64.8 193.9 64.6L195.6 65C195.6 65.2 195.6 65.4 195.6 65.7L193.9 65.1Z" fill="url(#paint104_linear_101_114)"/>
            <path d="M193.8 65.9C193.8 65.7 193.8 65.6 193.8 65.4L195.5 66C195.5 66.2 195.5 66.4 195.5 66.6L193.8 65.9Z" fill="url(#paint105_linear_101_114)"/>
            <path d="M193.7 66.8C193.7 66.6 193.7 66.5 193.8 66.3L195.5 67.2C195.5 67.4 195.4 67.6 195.4 67.8L193.7 66.8Z" fill="url(#paint106_linear_101_114)"/>
            <path d="M182.4 58.7L182.5 57.8L183.9 58.6L183.2 63.1L182.4 62.6L183 58.9L182.4 58.7Z" fill="#F2F2F2"/>
            <path d="M184.7 59.6C184.8 59.5 185 59.4 185.2 59.4C185.4 59.4 185.7 59.5 186 59.7C186.3 59.9 186.5 60.1 186.7 60.3C186.9 60.5 187 60.8 187.1 61C187.2 61.2 187.2 61.5 187.2 61.7C187.2 61.9 187.1 62.1 186.9 62.2C186.8 62.3 186.6 62.4 186.4 62.3C186.6 62.5 186.8 62.8 186.9 63.1C187 63.4 187 63.6 187 63.9C187 64.2 186.8 64.4 186.7 64.6C186.5 64.7 186.3 64.8 186.1 64.8C185.9 64.8 185.6 64.7 185.3 64.5C185 64.3 184.8 64.1 184.6 63.9C184.4 63.7 184.3 63.4 184.2 63.1C184.1 62.8 184.1 62.5 184.1 62.2C184.1 61.9 184.2 61.7 184.4 61.6C184.6 61.5 184.8 61.4 185 61.5C184.8 61.3 184.7 61.1 184.6 60.8C184.5 60.6 184.5 60.3 184.5 60.1C184.5 59.9 184.6 59.7 184.7 59.6ZM184.9 63.3C185 63.5 185.2 63.7 185.4 63.8C185.6 63.9 185.8 64 186 63.9C186.2 63.8 186.2 63.7 186.3 63.5C186.3 63.3 186.3 63.1 186.2 62.9C186.1 62.7 185.9 62.5 185.7 62.4C185.5 62.3 185.3 62.2 185.2 62.3C185 62.3 185 62.5 184.9 62.7C184.8 62.9 184.8 63.1 184.9 63.3ZM185.3 61.3C185.4 61.5 185.5 61.6 185.7 61.7C185.9 61.8 186 61.8 186.2 61.8C186.3 61.8 186.4 61.6 186.4 61.4C186.4 61.2 186.4 61 186.3 60.8C186.2 60.6 186.1 60.5 185.9 60.4C185.7 60.3 185.6 60.3 185.4 60.3C185.3 60.4 185.2 60.5 185.2 60.7C185.2 60.9 185.2 61.1 185.3 61.3Z" fill="#F2F2F2"/>
            <path d="M189.4 62C189.5 62.3 189.6 62.6 189.5 62.9C189.4 63.2 189.3 63.4 189.1 63.5C188.9 63.6 188.7 63.6 188.4 63.4C188.1 63.3 188 63 187.8 62.8C187.7 62.5 187.6 62.2 187.7 61.9C187.8 61.6 187.9 61.4 188.1 61.3C188.3 61.2 188.5 61.2 188.8 61.4C189 61.5 189.2 61.8 189.4 62ZM191.2 62.9L188.3 66.2L187.6 65.8L190.5 62.5L191.2 62.9ZM188.3 62.6C188.3 62.7 188.4 62.8 188.5 62.9C188.6 63 188.7 63 188.8 62.9C188.9 62.8 188.9 62.8 189 62.6C189 62.5 189 62.3 189 62.2C188.9 62.1 188.9 62 188.8 61.9C188.7 61.8 188.6 61.8 188.5 61.9C188.4 62 188.4 62.1 188.4 62.2C188.2 62.4 188.3 62.5 188.3 62.6ZM191 65.8C191.1 66.1 191.2 66.4 191.1 66.7C191 67 190.9 67.2 190.7 67.3C190.5 67.4 190.3 67.4 190 67.2C189.7 67.1 189.6 66.8 189.4 66.6C189.3 66.3 189.2 66 189.3 65.7C189.4 65.4 189.5 65.2 189.7 65.1C189.9 65 190.1 65 190.4 65.2C190.6 65.3 190.8 65.5 191 65.8ZM189.9 66.4C189.9 66.5 190 66.6 190.1 66.7C190.2 66.8 190.3 66.8 190.4 66.7C190.5 66.6 190.5 66.5 190.6 66.4C190.6 66.3 190.6 66.1 190.6 66C190.5 65.9 190.5 65.8 190.4 65.7C190.3 65.6 190.2 65.6 190.1 65.7C190 65.8 190 65.9 189.9 66C189.9 66.2 189.9 66.3 189.9 66.4Z" fill="#F2F2F2"/>
            <path d="M188.9 96.5C188.9 96.3 189 96.2 189 96L190.7 97C190.7 97.2 190.6 97.4 190.6 97.6L188.9 96.5Z" fill="url(#paint107_linear_101_114)"/>
            <path d="M188.7 97.3C188.8 97.2 188.8 97 188.8 96.9L190.4 98.1C190.3 98.3 190.3 98.5 190.2 98.6L188.7 97.3Z" fill="url(#paint108_linear_101_114)"/>
            <path d="M188.4 98C188.5 97.9 188.5 97.7 188.6 97.6L190.2 99C190.1 99.2 190.1 99.3 190 99.5L188.4 98Z" fill="url(#paint109_linear_101_114)"/>
            <path d="M188 98.6C188.1 98.5 188.1 98.4 188.2 98.2L189.7 99.8C189.6 100 189.5 100.1 189.4 100.3L188 98.6Z" fill="url(#paint110_linear_101_114)"/>
            <path d="M187.6 99.2C187.7 99.1 187.8 99 187.9 98.9L189.3 100.6C189.2 100.7 189.1 100.9 189 101L187.6 99.2Z" fill="url(#paint111_linear_101_114)"/>
            <path d="M187.1 99.7C187.2 99.6 187.3 99.5 187.4 99.4L188.7 101.2C188.6 101.3 188.5 101.4 188.4 101.6L187.1 99.7Z" fill="url(#paint112_linear_101_114)"/>
            <path d="M186.6 100.1C186.7 100 186.8 99.9 186.9 99.9L188.1 101.8C188 101.9 187.8 102 187.7 102.1L186.6 100.1Z" fill="url(#paint113_linear_101_114)"/>
            <path d="M186.1 100.4C186.2 100.3 186.3 100.3 186.4 100.2L187.4 102.2C187.3 102.3 187.1 102.4 187 102.4L186.1 100.4Z" fill="url(#paint114_linear_101_114)"/>
            <path d="M185.5 100.7C185.6 100.7 185.7 100.6 185.9 100.6L186.8 102.7C186.7 102.8 186.5 102.8 186.4 102.9L185.5 100.7Z" fill="url(#paint115_linear_101_114)"/>
            <path d="M184.8 100.9C184.9 100.9 185.1 100.8 185.2 100.8L186 103C185.8 103 185.7 103.1 185.5 103.1L184.8 100.9Z" fill="url(#paint116_linear_101_114)"/>
            <path d="M184.2 101C184.3 101 184.5 101 184.6 101L185.2 103.2C185 103.2 184.9 103.2 184.7 103.2L184.2 101Z" fill="url(#paint117_linear_101_114)"/>
            <path d="M183.5 101C183.6 101 183.8 101 183.9 101L184.3 103.2C184.1 103.2 184 103.2 183.8 103.2L183.5 101Z" fill="url(#paint118_linear_101_114)"/>
            <path d="M182.8 100.9C182.9 100.9 183.1 100.9 183.2 101L183.5 103.2C183.3 103.2 183.2 103.1 183 103.1L182.8 100.9Z" fill="url(#paint119_linear_101_114)"/>
            <path d="M182.1 100.7C182.2 100.7 182.4 100.8 182.5 100.8L182.6 103C182.4 103 182.3 102.9 182.1 102.8V100.7Z" fill="url(#paint120_linear_101_114)"/>
            <path d="M181.4 100.4C181.5 100.5 181.7 100.5 181.8 100.6L181.7 102.7C181.5 102.6 181.4 102.6 181.2 102.5L181.4 100.4Z" fill="url(#paint121_linear_101_114)"/>
            <path d="M180.7 100C180.8 100.1 181 100.2 181.1 100.2L180.9 102.2C180.7 102.1 180.6 102 180.4 101.9L180.7 100Z" fill="url(#paint122_linear_101_114)"/>
            <path d="M180.1 99.7C180.2 99.8 180.4 99.9 180.5 100L180.1 102C179.9 101.9 179.8 101.8 179.6 101.7L180.1 99.7Z" fill="url(#paint123_linear_101_114)"/>
            <path d="M179.4 99.1C179.5 99.2 179.7 99.3 179.8 99.4L179.3 101.3C179.1 101.2 179 101 178.8 100.9L179.4 99.1Z" fill="url(#paint124_linear_101_114)"/>
            <path d="M178.8 98.6C178.9 98.7 179 98.8 179.2 99L178.5 100.7C178.3 100.6 178.2 100.4 178 100.3L178.8 98.6Z" fill="url(#paint125_linear_101_114)"/>
            <path d="M178.1 97.9C178.2 98 178.3 98.2 178.5 98.3L177.7 99.9C177.5 99.7 177.4 99.6 177.3 99.4L178.1 97.9Z" fill="url(#paint126_linear_101_114)"/>
            <path d="M177.6 97.2C177.7 97.3 177.8 97.5 177.9 97.6L176.9 99C176.8 98.8 176.6 98.7 176.5 98.5L177.6 97.2Z" fill="url(#paint127_linear_101_114)"/>
            <path d="M177.1 96.5C177.2 96.7 177.3 96.8 177.4 97L176.3 98.2C176.2 98 176 97.8 175.9 97.6L177.1 96.5Z" fill="url(#paint128_linear_101_114)"/>
            <path d="M176.6 95.7C176.7 95.9 176.8 96 176.9 96.2L175.7 97.3C175.6 97.1 175.5 96.9 175.4 96.7L176.6 95.7Z" fill="url(#paint129_linear_101_114)"/>
            <path d="M176.1 94.8C176.2 95 176.3 95.1 176.3 95.3L174.9 96.2C174.8 96 174.7 95.8 174.6 95.6L176.1 94.8Z" fill="url(#paint130_linear_101_114)"/>
            <path d="M175.8 93.9C175.9 94.1 175.9 94.2 176 94.4L174.5 95.1C174.4 94.9 174.3 94.7 174.2 94.5L175.8 93.9Z" fill="url(#paint131_linear_101_114)"/>
            <path d="M175.5 93C175.6 93.2 175.6 93.4 175.7 93.5L174.2 93.9C174.1 93.7 174.1 93.5 174 93.2L175.5 93Z" fill="url(#paint132_linear_101_114)"/>
            <path d="M175.2 92.1C175.2 92.3 175.3 92.5 175.3 92.6L173.7 92.8C173.6 92.6 173.6 92.4 173.5 92.1H175.2Z" fill="url(#paint133_linear_101_114)"/>
            <path d="M175 91.2C175 91.4 175.1 91.6 175.1 91.7H173.4C173.4 91.5 173.3 91.3 173.3 91L175 91.2Z" fill="url(#paint134_linear_101_114)"/>
            <path d="M174.9 90.3C174.9 90.5 174.9 90.7 175 90.8L173.3 90.6C173.3 90.4 173.2 90.2 173.2 89.9L174.9 90.3Z" fill="url(#paint135_linear_101_114)"/>
            <path d="M174.9 89.4C174.9 89.6 174.9 89.7 174.9 89.9L173.2 89.5C173.2 89.3 173.2 89.1 173.2 88.8L174.9 89.4Z" fill="url(#paint136_linear_101_114)"/>
            <path d="M174.9 88.6C174.9 88.8 174.9 88.9 174.9 89.1L173.2 88.5C173.2 88.3 173.2 88.1 173.2 87.9L174.9 88.6Z" fill="url(#paint137_linear_101_114)"/>
            <path d="M175 87.7C175 87.9 175 88 174.9 88.2L173.2 87.3C173.2 87.1 173.3 86.9 173.3 86.7L175 87.7Z" fill="url(#paint138_linear_101_114)"/>
            <path d="M175.2 87C175.2 87.2 175.1 87.3 175.1 87.5L173.4 86.5C173.4 86.3 173.5 86.1 173.5 85.9L175.2 87Z" fill="url(#paint139_linear_101_114)"/>
            <path d="M175.4 86.2C175.3 86.3 175.3 86.5 175.3 86.6L173.7 85.4C173.8 85.2 173.8 85 173.9 84.9L175.4 86.2Z" fill="url(#paint140_linear_101_114)"/>
            <path d="M175.7 85.5C175.6 85.6 175.6 85.8 175.5 85.9L173.9 84.5C174 84.3 174 84.2 174.1 84L175.7 85.5Z" fill="url(#paint141_linear_101_114)"/>
            <path d="M176.1 84.9C176 85 175.9 85.1 175.9 85.3L174.4 83.7C174.5 83.5 174.6 83.4 174.7 83.2L176.1 84.9Z" fill="url(#paint142_linear_101_114)"/>
            <path d="M176.5 84.3C176.4 84.4 176.3 84.5 176.2 84.6L174.8 82.9C174.9 82.8 175 82.6 175.1 82.5L176.5 84.3Z" fill="url(#paint143_linear_101_114)"/>
            <path d="M176.9 83.8C176.8 83.9 176.7 84 176.6 84.1L175.3 82.3C175.4 82.2 175.5 82.1 175.6 81.9L176.9 83.8Z" fill="url(#paint144_linear_101_114)"/>
            <path d="M177.4 83.4C177.3 83.5 177.2 83.6 177.1 83.6L175.9 81.6C176 81.5 176.2 81.4 176.3 81.3L177.4 83.4Z" fill="url(#paint145_linear_101_114)"/>
            <path d="M178 83C177.9 83.1 177.8 83.1 177.7 83.2L176.7 81.2C176.8 81.1 177 81 177.1 81L178 83Z" fill="url(#paint146_linear_101_114)"/>
            <path d="M178.6 82.8C178.5 82.8 178.4 82.9 178.2 82.9L177.3 80.8C177.4 80.7 177.6 80.7 177.7 80.6L178.6 82.8Z" fill="url(#paint147_linear_101_114)"/>
            <path d="M179.2 82.6C179.1 82.6 178.9 82.7 178.8 82.7L178 80.5C178.2 80.5 178.3 80.4 178.5 80.4L179.2 82.6Z" fill="url(#paint148_linear_101_114)"/>
            <path d="M179.9 82.5C179.8 82.5 179.6 82.5 179.5 82.5L178.9 80.3C179.1 80.3 179.2 80.3 179.4 80.3L179.9 82.5Z" fill="url(#paint149_linear_101_114)"/>
            <path d="M180.6 82.5C180.5 82.5 180.3 82.5 180.2 82.5L179.8 80.3C180 80.3 180.1 80.3 180.3 80.3L180.6 82.5Z" fill="url(#paint150_linear_101_114)"/>
            <path d="M181.3 82.6C181.2 82.6 181 82.6 180.9 82.5L180.6 80.3C180.8 80.3 180.9 80.4 181.1 80.4L181.3 82.6Z" fill="url(#paint151_linear_101_114)"/>
            <path d="M182 82.8C181.9 82.8 181.7 82.7 181.6 82.7L181.5 80.5C181.7 80.5 181.8 80.6 182 80.7V82.8Z" fill="url(#paint152_linear_101_114)"/>
            <path d="M182.7 83.1C182.6 83 182.4 83 182.3 82.9L182.4 80.8C182.6 80.9 182.7 80.9 182.9 81L182.7 83.1Z" fill="url(#paint153_linear_101_114)"/>
            <path d="M183.4 83.4C183.3 83.3 183.1 83.2 183 83.2L183.2 81.2C183.4 81.3 183.5 81.4 183.7 81.5L183.4 83.4Z" fill="url(#paint154_linear_101_114)"/>
            <path d="M184 83.8C183.9 83.7 183.7 83.6 183.6 83.5L184 81.5C184.2 81.6 184.3 81.7 184.5 81.8L184 83.8Z" fill="url(#paint155_linear_101_114)"/>
            <path d="M184.7 84.3C184.6 84.2 184.4 84.1 184.3 84L184.8 82.1C185 82.2 185.1 82.4 185.3 82.5L184.7 84.3Z" fill="url(#paint156_linear_101_114)"/>
            <path d="M185.3 84.9C185.2 84.8 185.1 84.7 184.9 84.5L185.6 82.8C185.8 82.9 185.9 83.1 186.1 83.2L185.3 84.9Z" fill="url(#paint157_linear_101_114)"/>
            <path d="M185.9 85.6C185.8 85.5 185.7 85.3 185.5 85.2L186.3 83.6C186.5 83.8 186.6 83.9 186.7 84.1L185.9 85.6Z" fill="url(#paint158_linear_101_114)"/>
            <path d="M186.5 86.3C186.4 86.2 186.3 86 186.2 85.9L187.2 84.5C187.3 84.7 187.5 84.8 187.6 85L186.5 86.3Z" fill="url(#paint159_linear_101_114)"/>
            <path d="M187 87C186.9 86.8 186.8 86.7 186.7 86.5L187.8 85.3C187.9 85.5 188.1 85.7 188.2 85.9L187 87Z" fill="url(#paint160_linear_101_114)"/>
            <path d="M187.5 87.8C187.4 87.6 187.3 87.5 187.2 87.3L188.4 86.2C188.5 86.4 188.6 86.6 188.7 86.8L187.5 87.8Z" fill="url(#paint161_linear_101_114)"/>
            <path d="M187.9 88.7C187.8 88.5 187.7 88.4 187.7 88.2L189.1 87.3C189.2 87.5 189.3 87.7 189.4 87.9L187.9 88.7Z" fill="url(#paint162_linear_101_114)"/>
            <path d="M188.3 89.6C188.2 89.4 188.2 89.3 188.1 89.1L189.5 88.4C189.6 88.6 189.7 88.8 189.8 89L188.3 89.6Z" fill="url(#paint163_linear_101_114)"/>
            <path d="M188.6 90.5C188.5 90.3 188.5 90.1 188.4 90L189.9 89.6C190 89.8 190 90 190.1 90.3L188.6 90.5Z" fill="url(#paint164_linear_101_114)"/>
            <path d="M188.8 91.4C188.8 91.2 188.7 91 188.7 90.9L190.3 90.7C190.4 90.9 190.4 91.1 190.5 91.4H188.8Z" fill="url(#paint165_linear_101_114)"/>
            <path d="M189 92.3C189 92.1 188.9 91.9 188.9 91.8H190.6C190.6 92 190.7 92.2 190.7 92.5L189 92.3Z" fill="url(#paint166_linear_101_114)"/>
            <path d="M189.1 93.2C189.1 93 189.1 92.8 189 92.7L190.7 92.9C190.7 93.1 190.8 93.3 190.8 93.6L189.1 93.2Z" fill="url(#paint167_linear_101_114)"/>
            <path d="M189.2 94.1C189.2 93.9 189.2 93.8 189.2 93.6L190.9 94C190.9 94.2 190.9 94.4 190.9 94.7L189.2 94.1Z" fill="url(#paint168_linear_101_114)"/>
            <path d="M189.1 94.9C189.1 94.7 189.1 94.6 189.1 94.4L190.8 95C190.8 95.2 190.8 95.4 190.8 95.6L189.1 94.9Z" fill="url(#paint169_linear_101_114)"/>
            <path d="M189 95.8C189 95.6 189 95.5 189.1 95.3L190.8 96.2C190.8 96.4 190.7 96.6 190.7 96.8L189 95.8Z" fill="url(#paint170_linear_101_114)"/>
            <path d="M179.8 88.8L178 87.8L177.8 88.9C177.9 88.8 178 88.8 178.2 88.8C178.4 88.8 178.5 88.9 178.7 89C179 89.2 179.2 89.3 179.3 89.6C179.5 89.8 179.6 90.1 179.6 90.4C179.6 90.7 179.7 90.9 179.6 91.2C179.5 91.7 179.3 92 179.1 92.2C178.8 92.4 178.5 92.3 178 92.1C177.7 91.9 177.5 91.7 177.3 91.5C177.1 91.3 177 91 176.9 90.7C176.8 90.4 176.8 90.1 176.8 89.8L177.5 90.2C177.5 90.4 177.5 90.6 177.6 90.8C177.7 91 177.8 91.1 178 91.2C178.2 91.3 178.4 91.3 178.5 91.2C178.6 91.1 178.7 90.9 178.8 90.7C178.8 90.5 178.8 90.2 178.7 90C178.6 89.8 178.5 89.6 178.3 89.5C178.2 89.4 178 89.4 177.9 89.4C177.8 89.4 177.7 89.5 177.6 89.6L176.9 89.2L177.3 86.5L179.8 87.9V88.8Z" fill="#F2F2F2"/>
            <path d="M182.2 90.8C182.2 90.6 182.2 90.4 182.2 90.3C182.1 90.1 182 90 181.8 89.9C181.4 89.7 181.2 89.9 181.1 90.4L180.4 90C180.5 89.5 180.7 89.1 181 89C181.3 88.9 181.6 88.9 182 89.1C182.4 89.3 182.7 89.6 182.9 90C183.1 90.4 183.1 90.7 183.1 91.2C183 91.5 182.9 91.8 182.7 92C182.5 92.2 182.2 92.4 182 92.5C181.7 92.6 181.4 92.7 181.1 92.8L182.8 93.8L182.7 94.5L180 92.9L180.1 92.2C181.4 92 182.1 91.5 182.2 90.8Z" fill="#F2F2F2"/>
            <path d="M185.1 91.3C185.2 91.6 185.3 91.9 185.2 92.2C185.1 92.5 185 92.7 184.8 92.8C184.6 92.9 184.4 92.9 184.1 92.7C183.8 92.6 183.7 92.3 183.5 92.1C183.3 91.9 183.3 91.5 183.4 91.2C183.5 90.9 183.6 90.7 183.8 90.6C184 90.5 184.2 90.5 184.5 90.7C184.8 90.8 184.9 91 185.1 91.3ZM186.9 92.1L184 95.4L183.3 95L186.2 91.7L186.9 92.1ZM184 91.9C184 92 184.1 92.1 184.2 92.2C184.3 92.3 184.4 92.3 184.5 92.2C184.6 92.1 184.6 92.1 184.7 91.9C184.7 91.8 184.7 91.6 184.7 91.5C184.6 91.4 184.6 91.3 184.5 91.2C184.4 91.1 184.3 91.1 184.2 91.2C184.1 91.3 184.1 91.4 184.1 91.5C184 91.6 184 91.7 184 91.9ZM186.7 95C186.8 95.3 186.9 95.6 186.8 95.9C186.7 96.2 186.6 96.4 186.4 96.5C186.2 96.6 186 96.6 185.7 96.4C185.4 96.3 185.3 96 185.1 95.8C185 95.5 184.9 95.2 185 94.9C185.1 94.6 185.2 94.4 185.4 94.3C185.6 94.2 185.8 94.2 186.1 94.4C186.4 94.6 186.6 94.8 186.7 95ZM185.6 95.7C185.6 95.8 185.7 95.9 185.8 96C185.9 96.1 186 96.1 186.1 96C186.2 95.9 186.2 95.8 186.3 95.7C186.3 95.6 186.3 95.4 186.3 95.3C186.2 95.2 186.2 95.1 186.1 95C186 94.9 185.9 94.9 185.8 95C185.7 95.1 185.7 95.2 185.6 95.3C185.6 95.4 185.6 95.5 185.6 95.7Z" fill="#F2F2F2"/>
            <path d="M184.2 125.5C184.2 125.3 184.3 125.2 184.3 125L186 126C186 126.2 185.9 126.4 185.9 126.6L184.2 125.5Z" fill="url(#paint171_linear_101_114)"/>
            <path d="M183.9 126.3C184 126.2 184 126 184 125.9L185.6 127.1C185.5 127.3 185.5 127.5 185.4 127.6L183.9 126.3Z" fill="url(#paint172_linear_101_114)"/>
            <path d="M183.6 127C183.7 126.9 183.7 126.7 183.8 126.6L185.4 128C185.3 128.2 185.3 128.3 185.2 128.5L183.6 127Z" fill="url(#paint173_linear_101_114)"/>
            <path d="M183.3 127.6C183.4 127.5 183.5 127.4 183.5 127.2L185 128.8C184.9 129 184.8 129.1 184.7 129.3L183.3 127.6Z" fill="url(#paint174_linear_101_114)"/>
            <path d="M182.9 128.2C183 128.1 183.1 128 183.2 127.9L184.6 129.6C184.5 129.7 184.4 129.9 184.3 130L182.9 128.2Z" fill="url(#paint175_linear_101_114)"/>
            <path d="M182.4 128.7C182.5 128.6 182.6 128.5 182.7 128.4L184 130.2C183.9 130.3 183.8 130.4 183.7 130.6L182.4 128.7Z" fill="url(#paint176_linear_101_114)"/>
            <path d="M181.9 129.1C182 129 182.1 128.9 182.2 128.9L183.4 130.8C183.3 130.9 183.1 131 183 131.1L181.9 129.1Z" fill="url(#paint177_linear_101_114)"/>
            <path d="M181.3 129.5C181.4 129.4 181.5 129.4 181.6 129.3L182.6 131.3C182.5 131.4 182.3 131.5 182.2 131.5L181.3 129.5Z" fill="url(#paint178_linear_101_114)"/>
            <path d="M180.7 129.7C180.8 129.7 180.9 129.6 181.1 129.6L182 131.7C181.9 131.8 181.7 131.8 181.6 131.9L180.7 129.7Z" fill="url(#paint179_linear_101_114)"/>
            <path d="M180.1 129.9C180.2 129.9 180.4 129.8 180.5 129.8L181.3 132C181.1 132 181 132.1 180.8 132.1L180.1 129.9Z" fill="url(#paint180_linear_101_114)"/>
            <path d="M179.4 130C179.5 130 179.7 130 179.8 130L180.4 132.2C180.2 132.2 180.1 132.2 179.9 132.2L179.4 130Z" fill="url(#paint181_linear_101_114)"/>
            <path d="M178.8 130C178.9 130 179.1 130 179.2 130L179.6 132.2C179.4 132.2 179.3 132.2 179.1 132.2L178.8 130Z" fill="url(#paint182_linear_101_114)"/>
            <path d="M178.1 129.9C178.2 129.9 178.4 129.9 178.5 130L178.8 132.2C178.6 132.2 178.5 132.1 178.3 132.1L178.1 129.9Z" fill="url(#paint183_linear_101_114)"/>
            <path d="M177.4 129.7C177.5 129.7 177.7 129.8 177.8 129.8L177.9 132C177.7 132 177.6 131.9 177.4 131.9V129.7Z" fill="url(#paint184_linear_101_114)"/>
            <path d="M176.7 129.4C176.8 129.5 177 129.5 177.1 129.6L177 131.7C176.8 131.6 176.7 131.6 176.5 131.5L176.7 129.4Z" fill="url(#paint185_linear_101_114)"/>
            <path d="M176 129.1C176.1 129.2 176.3 129.3 176.4 129.3L176.2 131.3C176 131.2 175.9 131.1 175.7 131L176 129.1Z" fill="url(#paint186_linear_101_114)"/>
            <path d="M175.3 128.7C175.4 128.8 175.6 128.9 175.7 129L175.3 131C175.1 130.9 175 130.8 174.8 130.7L175.3 128.7Z" fill="url(#paint187_linear_101_114)"/>
            <path d="M174.7 128.2C174.8 128.3 175 128.4 175.1 128.5L174.6 130.4C174.4 130.3 174.3 130.1 174.1 130L174.7 128.2Z" fill="url(#paint188_linear_101_114)"/>
            <path d="M174 127.6C174.1 127.7 174.2 127.8 174.4 127.9L173.7 129.6C173.5 129.5 173.4 129.3 173.2 129.2L174 127.6Z" fill="url(#paint189_linear_101_114)"/>
            <path d="M173.4 127C173.5 127.1 173.6 127.3 173.8 127.4L173 129C172.8 128.8 172.7 128.7 172.6 128.5L173.4 127Z" fill="url(#paint190_linear_101_114)"/>
            <path d="M172.9 126.2C173 126.3 173.1 126.5 173.2 126.6L172.2 128C172.1 127.8 171.9 127.7 171.8 127.5L172.9 126.2Z" fill="url(#paint191_linear_101_114)"/>
            <path d="M172.3 125.5C172.4 125.7 172.5 125.8 172.6 126L171.5 127.2C171.4 127 171.2 126.8 171.1 126.6L172.3 125.5Z" fill="url(#paint192_linear_101_114)"/>
            <path d="M171.8 124.7C171.9 124.9 172 125 172.1 125.2L170.9 126.3C170.8 126.1 170.7 125.9 170.6 125.7L171.8 124.7Z" fill="url(#paint193_linear_101_114)"/>
            <path d="M171.4 123.8C171.5 124 171.6 124.1 171.6 124.3L170.2 125.2C170.1 125 170 124.8 169.9 124.6L171.4 123.8Z" fill="url(#paint194_linear_101_114)"/>
            <path d="M171.1 123C171.2 123.2 171.2 123.3 171.3 123.5L169.8 124.2C169.7 124 169.6 123.8 169.5 123.6L171.1 123Z" fill="url(#paint195_linear_101_114)"/>
            <path d="M170.7 122.1C170.8 122.3 170.8 122.5 170.9 122.6L169.4 123C169.3 122.8 169.3 122.6 169.2 122.3L170.7 122.1Z" fill="url(#paint196_linear_101_114)"/>
            <path d="M170.5 121.2C170.5 121.4 170.6 121.6 170.6 121.7L169 121.9C168.9 121.7 168.9 121.5 168.8 121.2H170.5Z" fill="url(#paint197_linear_101_114)"/>
            <path d="M170.3 120.3C170.3 120.5 170.4 120.7 170.4 120.8H168.7C168.7 120.6 168.6 120.4 168.6 120.1L170.3 120.3Z" fill="url(#paint198_linear_101_114)"/>
            <path d="M170.2 119.3C170.2 119.5 170.2 119.7 170.3 119.8L168.6 119.6C168.6 119.4 168.5 119.2 168.5 118.9L170.2 119.3Z" fill="url(#paint199_linear_101_114)"/>
            <path d="M170.2 118.5C170.2 118.7 170.2 118.8 170.2 119L168.5 118.6C168.5 118.4 168.5 118.2 168.5 117.9L170.2 118.5Z" fill="url(#paint200_linear_101_114)"/>
            <path d="M170.2 117.6C170.2 117.8 170.2 117.9 170.2 118.1L168.5 117.5C168.5 117.3 168.5 117.1 168.5 116.9L170.2 117.6Z" fill="url(#paint201_linear_101_114)"/>
            <path d="M170.3 116.7C170.3 116.9 170.3 117 170.2 117.2L168.5 116.3C168.5 116.1 168.6 115.9 168.6 115.7L170.3 116.7Z" fill="url(#paint202_linear_101_114)"/>
            <path d="M170.5 116C170.5 116.2 170.4 116.3 170.4 116.5L168.7 115.5C168.7 115.3 168.8 115.1 168.8 114.9L170.5 116Z" fill="url(#paint203_linear_101_114)"/>
            <path d="M170.7 115.3C170.6 115.4 170.6 115.6 170.6 115.7L169 114.5C169.1 114.3 169.1 114.1 169.2 114L170.7 115.3Z" fill="url(#paint204_linear_101_114)"/>
            <path d="M171 114.6C170.9 114.7 170.9 114.9 170.8 115L169.2 113.6C169.3 113.4 169.3 113.3 169.4 113.1L171 114.6Z" fill="url(#paint205_linear_101_114)"/>
            <path d="M171.3 113.9C171.2 114 171.1 114.1 171.1 114.3L169.6 112.7C169.7 112.5 169.8 112.4 169.9 112.2L171.3 113.9Z" fill="url(#paint206_linear_101_114)"/>
            <path d="M171.7 113.3C171.6 113.4 171.5 113.5 171.4 113.6L170 111.9C170.1 111.8 170.2 111.6 170.3 111.5L171.7 113.3Z" fill="url(#paint207_linear_101_114)"/>
            <path d="M172.2 112.8C172.1 112.9 172 113 171.9 113.1L170.6 111.3C170.7 111.2 170.8 111.1 171 110.9L172.2 112.8Z" fill="url(#paint208_linear_101_114)"/>
            <path d="M172.7 112.4C172.6 112.5 172.5 112.6 172.4 112.6L171.2 110.7C171.3 110.6 171.5 110.5 171.6 110.4L172.7 112.4Z" fill="url(#paint209_linear_101_114)"/>
            <path d="M173.3 112.1C173.2 112.2 173.1 112.2 173 112.3L172 110.3C172.1 110.2 172.3 110.1 172.4 110.1L173.3 112.1Z" fill="url(#paint210_linear_101_114)"/>
            <path d="M173.9 111.8C173.8 111.8 173.7 111.9 173.5 111.9L172.6 109.8C172.7 109.7 172.9 109.7 173 109.6L173.9 111.8Z" fill="url(#paint211_linear_101_114)"/>
            <path d="M174.5 111.6C174.4 111.6 174.2 111.7 174.1 111.7L173.3 109.5C173.5 109.5 173.6 109.4 173.8 109.4L174.5 111.6Z" fill="url(#paint212_linear_101_114)"/>
            <path d="M175.2 111.5C175.1 111.5 174.9 111.5 174.8 111.5L174.2 109.3C174.4 109.3 174.5 109.3 174.7 109.3L175.2 111.5Z" fill="url(#paint213_linear_101_114)"/>
            <path d="M175.9 111.6C175.8 111.6 175.6 111.6 175.5 111.6L175.1 109.4C175.3 109.4 175.4 109.4 175.6 109.4L175.9 111.6Z" fill="url(#paint214_linear_101_114)"/>
            <path d="M176.6 111.6C176.5 111.6 176.3 111.6 176.2 111.5L175.9 109.3C176.1 109.3 176.2 109.4 176.4 109.4L176.6 111.6Z" fill="url(#paint215_linear_101_114)"/>
            <path d="M177.3 111.8C177.2 111.8 177 111.7 176.9 111.7L176.8 109.5C177 109.5 177.1 109.6 177.3 109.7V111.8Z" fill="url(#paint216_linear_101_114)"/>
            <path d="M178 112.1C177.9 112 177.7 112 177.6 111.9L177.7 109.8C177.9 109.9 178 109.9 178.2 110L178 112.1Z" fill="url(#paint217_linear_101_114)"/>
            <path d="M178.7 112.5C178.6 112.4 178.4 112.3 178.3 112.3L178.5 110.3C178.7 110.4 178.8 110.5 179 110.6L178.7 112.5Z" fill="url(#paint218_linear_101_114)"/>
            <path d="M179.3 112.9C179.2 112.8 179 112.7 178.9 112.6L179.3 110.6C179.5 110.7 179.6 110.8 179.8 110.9L179.3 112.9Z" fill="url(#paint219_linear_101_114)"/>
            <path d="M179.9 113.4C179.8 113.3 179.6 113.2 179.5 113.1L180 111.2C180.2 111.3 180.3 111.5 180.5 111.6L179.9 113.4Z" fill="url(#paint220_linear_101_114)"/>
            <path d="M180.6 113.9C180.5 113.8 180.4 113.7 180.2 113.6L180.9 111.9C181.1 112 181.2 112.2 181.4 112.3L180.6 113.9Z" fill="url(#paint221_linear_101_114)"/>
            <path d="M181.2 114.6C181.1 114.5 181 114.3 180.8 114.2L181.6 112.6C181.8 112.8 181.9 112.9 182 113.1L181.2 114.6Z" fill="url(#paint222_linear_101_114)"/>
            <path d="M181.8 115.3C181.7 115.2 181.6 115 181.5 114.9L182.5 113.5C182.6 113.7 182.8 113.8 182.9 114L181.8 115.3Z" fill="url(#paint223_linear_101_114)"/>
            <path d="M182.3 116.1C182.2 115.9 182.1 115.8 182 115.6L183.1 114.4C183.2 114.6 183.4 114.8 183.5 115L182.3 116.1Z" fill="url(#paint224_linear_101_114)"/>
            <path d="M182.8 116.9C182.7 116.7 182.6 116.6 182.5 116.4L183.7 115.3C183.8 115.5 183.9 115.7 184 115.9L182.8 116.9Z" fill="url(#paint225_linear_101_114)"/>
            <path d="M183.2 117.7C183.1 117.5 183 117.4 183 117.2L184.4 116.3C184.5 116.5 184.6 116.7 184.7 116.9L183.2 117.7Z" fill="url(#paint226_linear_101_114)"/>
            <path d="M183.6 118.6C183.5 118.4 183.5 118.3 183.4 118.1L184.9 117.4C185 117.6 185.1 117.8 185.2 118L183.6 118.6Z" fill="url(#paint227_linear_101_114)"/>
            <path d="M183.9 119.5C183.8 119.3 183.8 119.1 183.7 119L185.2 118.6C185.3 118.8 185.3 119 185.4 119.3L183.9 119.5Z" fill="url(#paint228_linear_101_114)"/>
            <path d="M184.1 120.4C184.1 120.2 184 120 184 119.9L185.6 119.7C185.7 119.9 185.7 120.1 185.8 120.4H184.1Z" fill="url(#paint229_linear_101_114)"/>
            <path d="M184.3 121.3C184.3 121.1 184.2 120.9 184.2 120.8H185.9C185.9 121 186 121.2 186 121.5L184.3 121.3Z" fill="url(#paint230_linear_101_114)"/>
            <path d="M184.4 122.2C184.4 122 184.4 121.8 184.3 121.7L186 121.9C186 122.1 186.1 122.3 186.1 122.6L184.4 122.2Z" fill="url(#paint231_linear_101_114)"/>
            <path d="M184.4 123.1C184.4 122.9 184.4 122.8 184.4 122.6L186.1 123C186.1 123.2 186.1 123.4 186.1 123.7L184.4 123.1Z" fill="url(#paint232_linear_101_114)"/>
            <path d="M184.4 123.9C184.4 123.7 184.4 123.6 184.4 123.4L186.1 124C186.1 124.2 186.1 124.4 186.1 124.6L184.4 123.9Z" fill="url(#paint233_linear_101_114)"/>
            <path d="M184.3 124.8C184.3 124.6 184.3 124.5 184.4 124.3L186.1 125.1C186.1 125.3 186 125.5 186 125.7L184.3 124.8Z" fill="url(#paint234_linear_101_114)"/>
            <path d="M172.6 116.1C172.7 116 172.9 115.9 173.1 115.9C173.3 115.9 173.6 116 173.9 116.2C174.2 116.4 174.4 116.6 174.6 116.8C174.8 117 174.9 117.3 175 117.5C175.1 117.7 175.1 118 175.1 118.2C175.1 118.4 175 118.6 174.8 118.7C174.7 118.8 174.5 118.9 174.3 118.8C174.5 119 174.7 119.3 174.8 119.5C174.9 119.8 174.9 120 174.9 120.3C174.9 120.6 174.7 120.8 174.6 121C174.4 121.1 174.2 121.2 174 121.2C173.8 121.2 173.5 121.1 173.2 120.9C172.9 120.7 172.7 120.5 172.5 120.3C172.3 120.1 172.2 119.8 172.1 119.5C172 119.2 172 118.9 172 118.6C172 118.3 172.1 118.1 172.3 118C172.5 117.9 172.7 117.8 172.9 117.9C172.7 117.7 172.6 117.5 172.5 117.2C172.4 117 172.4 116.7 172.4 116.5C172.4 116.4 172.4 116.2 172.6 116.1ZM172.7 119.8C172.8 120 173 120.2 173.2 120.3C173.4 120.4 173.6 120.5 173.8 120.4C174 120.3 174 120.2 174.1 120C174.1 119.8 174.1 119.6 174 119.4C173.9 119.2 173.7 119 173.5 118.9C173.3 118.8 173.1 118.7 173 118.8C172.8 118.8 172.8 119 172.7 119.2C172.6 119.3 172.6 119.6 172.7 119.8ZM173.1 117.8C173.2 118 173.3 118.1 173.5 118.2C173.7 118.3 173.8 118.3 174 118.3C174.1 118.3 174.2 118.1 174.2 117.9C174.2 117.7 174.2 117.5 174.1 117.3C174 117.1 173.9 117 173.7 116.9C173.5 116.8 173.4 116.8 173.2 116.8C173.1 116.9 173 117 173 117.2C173 117.4 173.1 117.6 173.1 117.8Z" fill="#F2F2F2"/>
            <path d="M175.5 119.7C175.8 118.2 176.4 117.7 177.3 118.2C177.8 118.5 178.2 118.9 178.3 119.5C178.5 120 178.5 120.7 178.4 121.4C178.3 122.1 178.1 122.6 177.8 122.9C177.5 123.2 177.1 123.2 176.6 122.9C175.6 122.3 175.2 121.3 175.5 119.7ZM177.7 121C177.8 120.5 177.8 120.2 177.7 119.8C177.6 119.5 177.5 119.3 177.2 119.1C176.9 118.9 176.7 119 176.6 119.2C176.5 119.4 176.4 119.7 176.3 120.2C176.2 120.7 176.2 121.1 176.3 121.4C176.4 121.7 176.5 121.9 176.8 122.1C177.1 122.3 177.3 122.2 177.4 122C177.5 121.8 177.6 121.4 177.7 121Z" fill="#F2F2F2"/>
            <path d="M180.6 120.5C180.7 120.8 180.8 121.1 180.7 121.4C180.6 121.7 180.5 121.9 180.3 122C180.1 122.1 179.9 122.1 179.6 121.9C179.3 121.8 179.2 121.5 179 121.3C178.9 121 178.8 120.7 178.9 120.4C179 120.1 179.1 119.9 179.3 119.8C179.5 119.7 179.7 119.7 180 119.9C180.3 120 180.5 120.2 180.6 120.5ZM182.5 121.3L179.6 124.6L178.9 124.2L181.8 120.9L182.5 121.3ZM179.6 121.1C179.6 121.2 179.7 121.3 179.8 121.4C179.9 121.5 180 121.5 180.1 121.4C180.2 121.3 180.2 121.3 180.3 121.1C180.3 121 180.3 120.8 180.3 120.7C180.2 120.6 180.2 120.5 180.1 120.4C180 120.3 179.9 120.3 179.8 120.4C179.7 120.5 179.7 120.6 179.7 120.7C179.5 120.8 179.5 120.9 179.6 121.1ZM182.3 124.3C182.4 124.6 182.5 124.9 182.4 125.2C182.3 125.5 182.2 125.7 182 125.8C181.8 125.9 181.6 125.9 181.3 125.7C181 125.6 180.9 125.3 180.7 125.1C180.6 124.8 180.5 124.5 180.6 124.2C180.7 123.9 180.8 123.7 181 123.6C181.2 123.5 181.4 123.5 181.7 123.7C181.9 123.8 182.1 124 182.3 124.3ZM181.2 124.9C181.2 125 181.3 125.1 181.4 125.2C181.5 125.3 181.6 125.3 181.7 125.2C181.8 125.1 181.8 125 181.9 124.9C181.9 124.8 181.9 124.6 181.9 124.5C181.8 124.4 181.8 124.3 181.7 124.2C181.6 124.1 181.5 124.1 181.4 124.2C181.3 124.3 181.3 124.4 181.2 124.5C181.1 124.6 181.1 124.7 181.2 124.9Z" fill="#F2F2F2"/>
            <path d="M218.7 82C218.7 81.8 218.8 81.7 218.8 81.5L220.5 82.5C220.5 82.7 220.4 82.9 220.4 83.1L218.7 82Z" fill="url(#paint235_linear_101_114)"/>
            <path d="M218.5 82.8C218.5 82.7 218.6 82.5 218.6 82.4L220.2 83.6C220.1 83.8 220.1 84 220 84.1L218.5 82.8Z" fill="url(#paint236_linear_101_114)"/>
            <path d="M218.2 83.5C218.3 83.4 218.3 83.2 218.4 83.1L220 84.5C219.9 84.7 219.9 84.8 219.8 85L218.2 83.5Z" fill="url(#paint237_linear_101_114)"/>
            <path d="M217.8 84.1C217.9 84 217.9 83.9 218 83.7L219.5 85.3C219.4 85.5 219.3 85.6 219.2 85.8L217.8 84.1Z" fill="url(#paint238_linear_101_114)"/>
            <path d="M217.4 84.7C217.5 84.6 217.6 84.5 217.6 84.4L219 86.1C218.9 86.2 218.8 86.4 218.7 86.5L217.4 84.7Z" fill="url(#paint239_linear_101_114)"/>
            <path d="M217 85.2C217.1 85.1 217.2 85 217.3 84.9L218.6 86.7C218.5 86.8 218.4 86.9 218.3 87.1L217 85.2Z" fill="url(#paint240_linear_101_114)"/>
            <path d="M216.5 85.6C216.6 85.5 216.7 85.4 216.8 85.4L218 87.3C217.9 87.4 217.7 87.5 217.6 87.6L216.5 85.6Z" fill="url(#paint241_linear_101_114)"/>
            <path d="M215.9 85.9C216 85.8 216.1 85.8 216.2 85.7L217.2 87.7C217.1 87.8 216.9 87.9 216.8 87.9L215.9 85.9Z" fill="url(#paint242_linear_101_114)"/>
            <path d="M215.3 86.2C215.4 86.2 215.5 86.1 215.7 86.1L216.6 88.2C216.5 88.3 216.3 88.3 216.2 88.4L215.3 86.2Z" fill="url(#paint243_linear_101_114)"/>
            <path d="M214.7 86.4C214.8 86.4 215 86.3 215.1 86.3L215.9 88.5C215.7 88.5 215.6 88.6 215.4 88.6L214.7 86.4Z" fill="url(#paint244_linear_101_114)"/>
            <path d="M214 86.5C214.1 86.5 214.3 86.5 214.4 86.5L215 88.7C214.8 88.7 214.7 88.7 214.5 88.7L214 86.5Z" fill="url(#paint245_linear_101_114)"/>
            <path d="M213.3 86.4C213.4 86.4 213.6 86.4 213.7 86.4L214.1 88.6C213.9 88.6 213.8 88.6 213.6 88.6L213.3 86.4Z" fill="url(#paint246_linear_101_114)"/>
            <path d="M212.6 86.4C212.7 86.4 212.9 86.4 213 86.5L213.3 88.7C213.1 88.7 213 88.6 212.8 88.6L212.6 86.4Z" fill="url(#paint247_linear_101_114)"/>
            <path d="M211.9 86.2C212 86.2 212.2 86.3 212.3 86.3L212.4 88.5C212.2 88.5 212.1 88.4 211.9 88.3V86.2Z" fill="url(#paint248_linear_101_114)"/>
            <path d="M211.2 85.9C211.3 86 211.5 86 211.6 86.1L211.5 88.2C211.3 88.1 211.2 88.1 211 88L211.2 85.9Z" fill="url(#paint249_linear_101_114)"/>
            <path d="M210.5 85.5C210.6 85.6 210.8 85.7 210.9 85.7L210.7 87.7C210.5 87.6 210.4 87.5 210.2 87.4L210.5 85.5Z" fill="url(#paint250_linear_101_114)"/>
            <path d="M209.9 85.1C210 85.2 210.2 85.3 210.3 85.4L209.9 87.4C209.7 87.3 209.6 87.2 209.4 87.1L209.9 85.1Z" fill="url(#paint251_linear_101_114)"/>
            <path d="M209.3 84.6C209.4 84.7 209.6 84.8 209.7 84.9L209.2 86.8C209 86.7 208.9 86.5 208.7 86.4L209.3 84.6Z" fill="url(#paint252_linear_101_114)"/>
            <path d="M208.6 84.1C208.7 84.2 208.8 84.3 209 84.4L208.3 86.1C208.1 86 208 85.8 207.8 85.7L208.6 84.1Z" fill="url(#paint253_linear_101_114)"/>
            <path d="M208 83.4C208.1 83.5 208.2 83.7 208.4 83.8L207.6 85.4C207.4 85.2 207.3 85.1 207.2 84.9L208 83.4Z" fill="url(#paint254_linear_101_114)"/>
            <path d="M207.4 82.7C207.5 82.8 207.6 83 207.7 83.1L206.7 84.5C206.6 84.3 206.4 84.2 206.3 84L207.4 82.7Z" fill="url(#paint255_linear_101_114)"/>
            <path d="M206.9 81.9C207 82.1 207.1 82.2 207.2 82.4L206.1 83.6C206 83.4 205.8 83.2 205.7 83L206.9 81.9Z" fill="url(#paint256_linear_101_114)"/>
            <path d="M206.4 81.1C206.5 81.3 206.6 81.4 206.7 81.6L205.5 82.6C205.4 82.4 205.3 82.2 205.2 82L206.4 81.1Z" fill="url(#paint257_linear_101_114)"/>
            <path d="M206 80.3C206.1 80.5 206.2 80.6 206.2 80.8L204.8 81.7C204.7 81.5 204.6 81.3 204.5 81.1L206 80.3Z" fill="url(#paint258_linear_101_114)"/>
            <path d="M205.6 79.4C205.7 79.6 205.7 79.7 205.8 79.9L204.4 80.5C204.3 80.3 204.2 80.1 204.1 79.9L205.6 79.4Z" fill="url(#paint259_linear_101_114)"/>
            <path d="M205.3 78.5C205.4 78.7 205.4 78.9 205.5 79L204 79.4C203.9 79.2 203.9 79 203.8 78.7L205.3 78.5Z" fill="url(#paint260_linear_101_114)"/>
            <path d="M205.1 77.6C205.1 77.8 205.2 78 205.2 78.1L203.6 78.3C203.5 78.1 203.5 77.9 203.4 77.6H205.1Z" fill="url(#paint261_linear_101_114)"/>
            <path d="M204.9 76.7C204.9 76.9 205 77.1 205 77.2H203.4C203.4 77 203.3 76.8 203.3 76.5L204.9 76.7Z" fill="url(#paint262_linear_101_114)"/>
            <path d="M204.8 75.8C204.8 76 204.8 76.2 204.9 76.3L203.2 76.1C203.2 75.9 203.1 75.7 203.1 75.4L204.8 75.8Z" fill="url(#paint263_linear_101_114)"/>
            <path d="M204.8 74.9C204.8 75.1 204.8 75.2 204.8 75.4L203.1 75C203.1 74.8 203.1 74.6 203.1 74.3L204.8 74.9Z" fill="url(#paint264_linear_101_114)"/>
            <path d="M204.8 74.1C204.8 74.3 204.8 74.4 204.8 74.6L203.1 74C203.1 73.8 203.1 73.6 203.1 73.4L204.8 74.1Z" fill="url(#paint265_linear_101_114)"/>
            <path d="M204.9 73.2C204.9 73.4 204.9 73.5 204.8 73.7L203.1 72.8C203.1 72.6 203.2 72.4 203.2 72.2L204.9 73.2Z" fill="url(#paint266_linear_101_114)"/>
            <path d="M205 72.5C205 72.7 204.9 72.8 204.9 73L203.2 72C203.2 71.8 203.3 71.6 203.3 71.4L205 72.5Z" fill="url(#paint267_linear_101_114)"/>
            <path d="M205.3 71.7C205.2 71.8 205.2 72 205.2 72.1L203.6 70.9C203.7 70.7 203.7 70.5 203.8 70.4L205.3 71.7Z" fill="url(#paint268_linear_101_114)"/>
            <path d="M205.6 71C205.5 71.1 205.5 71.3 205.4 71.4L203.8 70C203.9 69.8 203.9 69.7 204 69.5L205.6 71Z" fill="url(#paint269_linear_101_114)"/>
            <path d="M205.9 70.4C205.8 70.5 205.8 70.6 205.7 70.8L204.2 69.2C204.3 69 204.4 68.9 204.5 68.7L205.9 70.4Z" fill="url(#paint270_linear_101_114)"/>
            <path d="M206.3 69.8C206.2 69.9 206.1 70 206.1 70.1L204.7 68.4C204.8 68.3 204.9 68.1 205 68L206.3 69.8Z" fill="url(#paint271_linear_101_114)"/>
            <path d="M206.8 69.3C206.7 69.4 206.6 69.5 206.5 69.6L205.2 67.8C205.3 67.7 205.4 67.6 205.5 67.4L206.8 69.3Z" fill="url(#paint272_linear_101_114)"/>
            <path d="M207.3 68.9C207.2 69 207.1 69.1 207 69.1L205.8 67.2C205.9 67.1 206.1 67 206.2 66.9L207.3 68.9Z" fill="url(#paint273_linear_101_114)"/>
            <path d="M207.9 68.5C207.8 68.6 207.7 68.6 207.6 68.7L206.6 66.7C206.7 66.6 206.9 66.5 207 66.5L207.9 68.5Z" fill="url(#paint274_linear_101_114)"/>
            <path d="M208.5 68.3C208.4 68.3 208.3 68.4 208.1 68.4L207.2 66.3C207.3 66.2 207.5 66.2 207.6 66.1L208.5 68.3Z" fill="url(#paint275_linear_101_114)"/>
            <path d="M209.1 68.1C209 68.1 208.8 68.2 208.7 68.2L208 66C208.2 66 208.3 65.9 208.5 65.9L209.1 68.1Z" fill="url(#paint276_linear_101_114)"/>
            <path d="M209.8 68C209.7 68 209.5 68 209.4 68L208.8 65.8C209 65.8 209.1 65.8 209.3 65.8L209.8 68Z" fill="url(#paint277_linear_101_114)"/>
            <path d="M210.4 68C210.3 68 210.1 68 210 68L209.6 65.8C209.8 65.8 209.9 65.8 210.1 65.8L210.4 68Z" fill="url(#paint278_linear_101_114)"/>
            <path d="M211.1 68.1C211 68.1 210.8 68.1 210.7 68L210.4 65.8C210.6 65.8 210.7 65.9 210.9 65.9L211.1 68.1Z" fill="url(#paint279_linear_101_114)"/>
            <path d="M211.8 68.3C211.7 68.3 211.5 68.2 211.4 68.2L211.3 66C211.5 66 211.6 66.1 211.8 66.2V68.3Z" fill="url(#paint280_linear_101_114)"/>
            <path d="M212.5 68.6C212.4 68.5 212.2 68.5 212.1 68.4L212.2 66.3C212.4 66.4 212.5 66.4 212.7 66.5L212.5 68.6Z" fill="url(#paint281_linear_101_114)"/>
            <path d="M213.2 69C213.1 68.9 212.9 68.8 212.8 68.8L213 66.8C213.2 66.9 213.3 67 213.5 67.1L213.2 69Z" fill="url(#paint282_linear_101_114)"/>
            <path d="M213.8 69.4C213.7 69.3 213.5 69.2 213.4 69.1L213.8 67.1C214 67.2 214.1 67.3 214.3 67.4L213.8 69.4Z" fill="url(#paint283_linear_101_114)"/>
            <path d="M214.5 69.9C214.4 69.8 214.2 69.7001 214.1 69.6001L214.6 67.8C214.8 67.9 214.9 68.1 215.1 68.2L214.5 69.9Z" fill="url(#paint284_linear_101_114)"/>
            <path d="M215.2 70.4C215.1 70.3 215 70.2 214.8 70.1L215.5 68.4C215.7 68.5 215.8 68.7 216 68.8L215.2 70.4Z" fill="url(#paint285_linear_101_114)"/>
            <path d="M215.8 71.1C215.7 71 215.6 70.8 215.4 70.7L216.2 69.1C216.4 69.3 216.5 69.4 216.6 69.6L215.8 71.1Z" fill="url(#paint286_linear_101_114)"/>
            <path d="M216.3 71.8C216.2 71.7 216.1 71.5 216 71.4L217 70C217.1 70.2 217.3 70.3 217.4 70.5L216.3 71.8Z" fill="url(#paint287_linear_101_114)"/>
            <path d="M216.9 72.5C216.8 72.3 216.7 72.2 216.6 72L217.7 70.8C217.8 71 218 71.2 218.1 71.4L216.9 72.5Z" fill="url(#paint288_linear_101_114)"/>
            <path d="M217.3 73.4C217.2 73.2 217.1 73.1 217 72.9L218.2 71.9C218.3 72.1 218.4 72.3 218.5 72.5L217.3 73.4Z" fill="url(#paint289_linear_101_114)"/>
            <path d="M217.8 74.2C217.7 74 217.6 73.9 217.6 73.7L219 72.8C219.1 73 219.2 73.2 219.3 73.4L217.8 74.2Z" fill="url(#paint290_linear_101_114)"/>
            <path d="M218.1 75.1C218 74.9 218 74.8 217.9 74.6L219.3 74C219.4 74.2 219.5 74.4 219.6 74.6L218.1 75.1Z" fill="url(#paint291_linear_101_114)"/>
            <path d="M218.4 76C218.3 75.8 218.3 75.6 218.2 75.5L219.7 75.1C219.8 75.3 219.8 75.5 219.9 75.8L218.4 76Z" fill="url(#paint292_linear_101_114)"/>
            <path d="M218.7 76.9C218.7 76.7 218.6 76.5 218.6 76.4L220.2 76.2C220.3 76.4 220.3 76.6 220.4 76.9H218.7Z" fill="url(#paint293_linear_101_114)"/>
            <path d="M218.8 77.8C218.8 77.6 218.7 77.4 218.7 77.3H220.3C220.3 77.5 220.4 77.7 220.4 78L218.8 77.8Z" fill="url(#paint294_linear_101_114)"/>
            <path d="M219 78.7C219 78.5 219 78.3 218.9 78.2L220.6 78.4C220.6 78.6 220.7 78.8 220.7 79.1L219 78.7Z" fill="url(#paint295_linear_101_114)"/>
            <path d="M219 79.6C219 79.4 219 79.3 219 79.1L220.7 79.5C220.7 79.7 220.7 79.9 220.7 80.2L219 79.6Z" fill="url(#paint296_linear_101_114)"/>
            <path d="M219 80.4C219 80.2 219 80.1 219 79.9L220.7 80.5C220.7 80.7 220.7 80.9 220.7 81.1L219 80.4Z" fill="url(#paint297_linear_101_114)"/>
            <path d="M218.9 81.3C218.9 81.1 218.9 81 219 80.8L220.7 81.7C220.7 81.9 220.6 82.1 220.6 82.3L218.9 81.3Z" fill="url(#paint298_linear_101_114)"/>
            <path d="M209.1 74.6C209.1 74.4 209.1 74.2 209.1 74.1C209 73.9 208.9 73.8 208.7 73.7C208.3 73.5 208.1 73.7 208 74.2L207.3 73.8C207.4 73.3 207.6 72.9 207.9 72.8C208.2 72.7 208.5 72.7 208.9 72.9C209.3 73.1 209.6 73.4 209.7 73.8C209.9 74.2 209.9 74.5 209.9 75C209.8 75.3 209.7 75.6 209.5 75.8C209.3 76 209 76.2 208.8 76.3C208.6 76.4 208.2 76.5 207.9 76.6L209.6 77.6L209.5 78.3L206.8 76.7L206.9 76C208.2 75.8 209 75.3 209.1 74.6Z" fill="#F2F2F2"/>
            <path d="M212.9 76.1L210.9 79.2L210.1 78.7L212.1 75.7L210.3 74.7L210.4 73.9L212.9 75.4V76.1Z" fill="#F2F2F2"/>
            <path d="M214.7 76.6C214.8 76.9 214.9 77.2 214.8 77.5C214.7 77.8 214.6 78 214.4 78.1C214.2 78.2 214 78.2 213.7 78C213.4 77.9 213.3 77.6 213.1 77.4C213 77.1 212.9 76.8 213 76.5C213.1 76.2 213.2 76 213.4 75.9C213.6 75.8 213.8 75.8 214.1 76C214.4 76.1 214.6 76.4 214.7 76.6ZM216.6 77.5L213.7 80.8L213 80.4L215.9 77.1L216.6 77.5ZM213.7 77.2C213.7 77.3 213.8 77.4 213.9 77.5C214 77.6 214.1 77.6 214.2 77.5C214.3 77.4 214.3 77.4 214.4 77.2C214.4 77.1 214.4 76.9 214.4 76.8C214.3 76.7 214.3 76.6 214.2 76.5C214.1 76.4 214 76.4 213.9 76.5C213.8 76.6 213.8 76.7 213.8 76.8C213.6 77 213.6 77.1 213.7 77.2ZM216.3 80.4C216.4 80.7 216.5 81 216.4 81.3C216.3 81.6 216.2 81.8 216 81.9C215.8 82 215.6 82 215.3 81.8C215 81.7 214.9 81.4 214.7 81.2C214.6 80.9 214.5 80.6 214.6 80.3C214.7 80 214.8 79.8 215 79.7C215.2 79.6 215.4 79.6 215.7 79.8C216 79.9 216.2 80.1 216.3 80.4ZM215.3 81C215.3 81.1 215.4 81.2 215.5 81.3C215.6 81.4 215.7 81.4 215.8 81.3C215.9 81.2 215.9 81.1 216 81C216 80.9 216 80.7 216 80.6C215.9 80.5 215.9 80.4 215.8 80.3C215.7 80.2 215.6 80.2 215.5 80.3C215.4 80.4 215.4 80.5 215.3 80.6C215.2 80.8 215.2 80.9 215.3 81Z" fill="#F2F2F2"/>
            <path d="M214 111C214 110.8 214.1 110.7 214.1 110.5L215.8 111.5C215.8 111.7 215.7 111.9 215.7 112.1L214 111Z" fill="url(#paint299_linear_101_114)"/>
            <path d="M213.8 111.7C213.8 111.6 213.9 111.4 213.9 111.3L215.5 112.5C215.4 112.7 215.4 112.9 215.3 113L213.8 111.7Z" fill="url(#paint300_linear_101_114)"/>
            <path d="M213.5 112.4C213.6 112.3 213.6 112.1 213.7 112L215.3 113.4C215.2 113.6 215.2 113.7 215.1 113.9L213.5 112.4Z" fill="url(#paint301_linear_101_114)"/>
            <path d="M213.1 113.1C213.2 113 213.2 112.9 213.3 112.7L214.8 114.3C214.7 114.5 214.6 114.6 214.5 114.8L213.1 113.1Z" fill="url(#paint302_linear_101_114)"/>
            <path d="M212.7 113.6C212.8 113.5 212.9 113.4 212.9 113.3L214.3 115C214.2 115.1 214.1 115.3 214 115.4L212.7 113.6Z" fill="url(#paint303_linear_101_114)"/>
            <path d="M212.3 114.1C212.4 114 212.5 113.9 212.6 113.8L213.9 115.6C213.8 115.7 213.7 115.8 213.6 116L212.3 114.1Z" fill="url(#paint304_linear_101_114)"/>
            <path d="M211.8 114.6C211.9 114.5 212 114.4 212.1 114.4L213.3 116.3C213.2 116.4 213 116.5 212.9 116.6L211.8 114.6Z" fill="url(#paint305_linear_101_114)"/>
            <path d="M211.2 114.9C211.3 114.8 211.4 114.8 211.5 114.7L212.5 116.7C212.4 116.8 212.2 116.9 212.1 116.9L211.2 114.9Z" fill="url(#paint306_linear_101_114)"/>
            <path d="M210.6 115.2C210.7 115.2 210.8 115.1 211 115.1L211.9 117.2C211.8 117.3 211.6 117.3 211.5 117.4L210.6 115.2Z" fill="url(#paint307_linear_101_114)"/>
            <path d="M210 115.3C210.1 115.3 210.3 115.2 210.4 115.2L211.2 117.4C211 117.4 210.9 117.5 210.7 117.5L210 115.3Z" fill="url(#paint308_linear_101_114)"/>
            <path d="M209.3 115.4C209.4 115.4 209.6 115.4 209.7 115.4L210.3 117.6C210.1 117.6 210 117.6 209.8 117.6L209.3 115.4Z" fill="url(#paint309_linear_101_114)"/>
            <path d="M208.6 115.4C208.7 115.4 208.9 115.4 209 115.4L209.4 117.6C209.2 117.6 209.1 117.6 208.9 117.6L208.6 115.4Z" fill="url(#paint310_linear_101_114)"/>
            <path d="M207.9 115.3C208 115.3 208.2 115.3 208.3 115.4L208.6 117.6C208.4 117.6 208.3 117.5 208.1 117.5L207.9 115.3Z" fill="url(#paint311_linear_101_114)"/>
            <path d="M207.2 115.1C207.3 115.1 207.5 115.2 207.6 115.2L207.7 117.4C207.5 117.4 207.4 117.3 207.2 117.3V115.1Z" fill="url(#paint312_linear_101_114)"/>
            <path d="M206.5 114.9C206.6 115 206.8 115 206.9 115.1L206.8 117.2C206.6 117.1 206.5 117.1 206.3 117L206.5 114.9Z" fill="url(#paint313_linear_101_114)"/>
            <path d="M205.8 114.5C205.9 114.6 206.1 114.7 206.2 114.7L206 116.7C205.8 116.6 205.7 116.5 205.5 116.4L205.8 114.5Z" fill="url(#paint314_linear_101_114)"/>
            <path d="M205.2 114.1C205.3 114.2 205.5 114.3 205.6 114.4L205.2 116.4C205 116.3 204.9 116.2 204.7 116.1L205.2 114.1Z" fill="url(#paint315_linear_101_114)"/>
            <path d="M204.5 113.6C204.6 113.7 204.8 113.8 204.9 113.9L204.4 115.8C204.2 115.7 204.1 115.6 203.9 115.4L204.5 113.6Z" fill="url(#paint316_linear_101_114)"/>
            <path d="M203.9 113C204 113.1 204.1 113.2 204.3 113.3L203.6 115C203.4 114.9 203.3 114.7 203.1 114.6L203.9 113Z" fill="url(#paint317_linear_101_114)"/>
            <path d="M203.3 112.4C203.4 112.5 203.5 112.7 203.7 112.8L202.9 114.4C202.7 114.2 202.6 114.1 202.5 113.9L203.3 112.4Z" fill="url(#paint318_linear_101_114)"/>
            <path d="M202.7 111.7C202.8 111.8 202.9 112 203 112.1L202 113.5C201.9 113.3 201.7 113.2 201.6 113L202.7 111.7Z" fill="url(#paint319_linear_101_114)"/>
            <path d="M202.2 110.9C202.3 111.1 202.4 111.2 202.5 111.4L201.4 112.6C201.3 112.4 201.1 112.2 201 112L202.2 110.9Z" fill="url(#paint320_linear_101_114)"/>
            <path d="M201.7 110.1C201.8 110.3 201.9 110.4 202 110.6L200.8 111.7C200.7 111.5 200.6 111.3 200.5 111.1L201.7 110.1Z" fill="url(#paint321_linear_101_114)"/>
            <path d="M201.3 109.3C201.4 109.5 201.5 109.6 201.5 109.8L200.1 110.7C200 110.5 199.9 110.3 199.8 110.1L201.3 109.3Z" fill="url(#paint322_linear_101_114)"/>
            <path d="M200.9 108.4C201 108.6 201 108.7 201.1 108.9L199.7 109.6C199.6 109.4 199.5 109.2 199.4 109L200.9 108.4Z" fill="url(#paint323_linear_101_114)"/>
            <path d="M200.6 107.5C200.7 107.7 200.7 107.9 200.8 108L199.3 108.4C199.2 108.2 199.2 108 199.1 107.7L200.6 107.5Z" fill="url(#paint324_linear_101_114)"/>
            <path d="M200.4 106.6C200.4 106.8 200.5 107 200.5 107.1L198.9 107.3C198.8 107.1 198.8 106.9 198.7 106.6H200.4Z" fill="url(#paint325_linear_101_114)"/>
            <path d="M200.2 105.7C200.2 105.9 200.3 106.1 200.3 106.2H198.6C198.6 106 198.5 105.8 198.5 105.5L200.2 105.7Z" fill="url(#paint326_linear_101_114)"/>
            <path d="M200.1 104.8C200.1 105 200.1 105.2 200.2 105.3L198.5 105.1C198.5 104.9 198.4 104.7 198.4 104.4L200.1 104.8Z" fill="url(#paint327_linear_101_114)"/>
            <path d="M200.1 103.9C200.1 104.1 200.1 104.2 200.1 104.4L198.4 104C198.4 103.8 198.4 103.6 198.4 103.3L200.1 103.9Z" fill="url(#paint328_linear_101_114)"/>
            <path d="M200.1 103C200.1 103.2 200.1 103.3 200.1 103.5L198.4 102.9C198.4 102.7 198.4 102.5 198.4 102.3L200.1 103Z" fill="url(#paint329_linear_101_114)"/>
            <path d="M200.2 102.2C200.2 102.4 200.2 102.5 200.1 102.7L198.4 101.9C198.4 101.7 198.5 101.5 198.5 101.3L200.2 102.2Z" fill="url(#paint330_linear_101_114)"/>
            <path d="M200.3 101.5C200.3 101.7 200.2 101.8 200.2 102L198.5 101C198.5 100.8 198.6 100.6 198.6 100.4L200.3 101.5Z" fill="url(#paint331_linear_101_114)"/>
            <path d="M200.6 100.7C200.5 100.8 200.5 101 200.5 101.1L198.9 99.9C199 99.7 199 99.5 199.1 99.4L200.6 100.7Z" fill="url(#paint332_linear_101_114)"/>
            <path d="M200.9 100C200.8 100.1 200.8 100.3 200.7 100.4L199.1 99C199.2 98.8 199.2 98.7 199.3 98.5L200.9 100Z" fill="url(#paint333_linear_101_114)"/>
            <path d="M201.2 99.4C201.1 99.5 201.1 99.6 201 99.8L199.5 98.2C199.6 98 199.7 97.9 199.8 97.7L201.2 99.4Z" fill="url(#paint334_linear_101_114)"/>
            <path d="M201.6 98.8C201.5 98.9 201.4 99 201.4 99.1L200 97.4C200.1 97.3 200.2 97.1 200.3 97L201.6 98.8Z" fill="url(#paint335_linear_101_114)"/>
            <path d="M202.1 98.3C202 98.4 201.9 98.5 201.8 98.6L200.5 96.8C200.6 96.7 200.7 96.6 200.8 96.4L202.1 98.3Z" fill="url(#paint336_linear_101_114)"/>
            <path d="M202.6 97.9C202.5 98 202.4 98.1 202.3 98.1L201.1 96.2C201.2 96.1 201.4 96 201.5 95.9L202.6 97.9Z" fill="url(#paint337_linear_101_114)"/>
            <path d="M203.2 97.5C203.1 97.6 203 97.6 202.9 97.7L201.9 95.7C202 95.6 202.2 95.5 202.3 95.5L203.2 97.5Z" fill="url(#paint338_linear_101_114)"/>
            <path d="M203.8 97.3C203.7 97.3 203.6 97.4 203.4 97.4L202.5 95.3C202.6 95.2 202.8 95.2 202.9 95.1L203.8 97.3Z" fill="url(#paint339_linear_101_114)"/>
            <path d="M204.4 97.1C204.3 97.1 204.1 97.2 204 97.2L203.2 95C203.4 95 203.5 94.9 203.7 94.9L204.4 97.1Z" fill="url(#paint340_linear_101_114)"/>
            <path d="M205.1 97C205 97 204.8 97 204.7 97L204.1 94.8C204.3 94.8 204.4 94.8 204.6 94.8L205.1 97Z" fill="url(#paint341_linear_101_114)"/>
            <path d="M205.7 97C205.6 97 205.4 97 205.3 97L204.9 94.8C205.1 94.8 205.2 94.8 205.4 94.8L205.7 97Z" fill="url(#paint342_linear_101_114)"/>
            <path d="M206.4 97.1C206.3 97.1 206.1 97.1 206 97L205.7 94.8C205.9 94.8 206 94.9 206.2 94.9L206.4 97.1Z" fill="url(#paint343_linear_101_114)"/>
            <path d="M207.1 97.3C207 97.3 206.8 97.2 206.7 97.2L206.6 95C206.8 95 206.9 95.1 207.1 95.2V97.3Z" fill="url(#paint344_linear_101_114)"/>
            <path d="M207.8 97.6C207.7 97.5 207.5 97.5 207.4 97.4L207.5 95.3C207.7 95.4 207.8 95.4 208 95.5L207.8 97.6Z" fill="url(#paint345_linear_101_114)"/>
            <path d="M208.5 97.9C208.4 97.8 208.2 97.7 208.1 97.7L208.3 95.7C208.5 95.8 208.6 95.9 208.8 96L208.5 97.9Z" fill="url(#paint346_linear_101_114)"/>
            <path d="M209.1 98.3C209 98.2 208.8 98.1 208.7 98L209.1 96C209.3 96.1 209.4 96.2 209.6 96.3L209.1 98.3Z" fill="url(#paint347_linear_101_114)"/>
            <path d="M209.8 98.8C209.7 98.7 209.5 98.6 209.4 98.5L209.9 96.6C210.1 96.7 210.2 96.9 210.4 97L209.8 98.8Z" fill="url(#paint348_linear_101_114)"/>
            <path d="M210.4 99.4C210.3 99.3 210.2 99.2 210 99.1L210.7 97.4C210.9 97.5 211 97.7 211.2 97.8L210.4 99.4Z" fill="url(#paint349_linear_101_114)"/>
            <path d="M211.1 100C211 99.9 210.9 99.7 210.7 99.6L211.5 98C211.7 98.2 211.8 98.3 211.9 98.5L211.1 100Z" fill="url(#paint350_linear_101_114)"/>
            <path d="M211.6 100.8C211.5 100.7 211.4 100.5 211.3 100.4L212.3 99C212.4 99.2 212.6 99.3 212.7 99.5L211.6 100.8Z" fill="url(#paint351_linear_101_114)"/>
            <path d="M212.1 101.5C212 101.3 211.9 101.2 211.8 101L212.9 99.8C213 100 213.2 100.2 213.3 100.4L212.1 101.5Z" fill="url(#paint352_linear_101_114)"/>
            <path d="M212.6 102.3C212.5 102.1 212.4 102 212.3 101.8L213.5 100.7C213.6 100.9 213.7 101.1 213.8 101.3L212.6 102.3Z" fill="url(#paint353_linear_101_114)"/>
            <path d="M213.1 103.2C213 103 212.9 102.9 212.9 102.7L214.3 101.8C214.4 102 214.5 102.2 214.6 102.4L213.1 103.2Z" fill="url(#paint354_linear_101_114)"/>
            <path d="M213.4 104C213.3 103.8 213.3 103.7 213.2 103.5L214.6 102.8C214.7 103 214.8 103.2 214.9 103.4L213.4 104Z" fill="url(#paint355_linear_101_114)"/>
            <path d="M213.7 104.9C213.6 104.7 213.6 104.5 213.5 104.4L215 104C215.1 104.2 215.1 104.4 215.2 104.7L213.7 104.9Z" fill="url(#paint356_linear_101_114)"/>
            <path d="M214 105.8C214 105.6 213.9 105.4 213.9 105.3L215.5 105.1C215.6 105.3 215.6 105.5 215.7 105.8H214Z" fill="url(#paint357_linear_101_114)"/>
            <path d="M214.1 106.7C214.1 106.5 214 106.3 214 106.2H215.6C215.6 106.4 215.7 106.6 215.7 106.9L214.1 106.7Z" fill="url(#paint358_linear_101_114)"/>
            <path d="M214.3 107.6C214.3 107.4 214.3 107.2 214.2 107.1L215.9 107.3C215.9 107.5 216 107.7 216 108L214.3 107.6Z" fill="url(#paint359_linear_101_114)"/>
            <path d="M214.3 108.5C214.3 108.3 214.3 108.2 214.3 108L216 108.4C216 108.6 216 108.8 216 109.1L214.3 108.5Z" fill="url(#paint360_linear_101_114)"/>
            <path d="M214.3 109.4C214.3 109.2 214.3 109.1 214.3 108.9L216 109.5C216 109.7 216 109.9 216 110.1L214.3 109.4Z" fill="url(#paint361_linear_101_114)"/>
            <path d="M214.2 110.2C214.2 110 214.2 109.9 214.3 109.7L216 110.5C216 110.7 215.9 110.9 215.9 111.1L214.2 110.2Z" fill="url(#paint362_linear_101_114)"/>
            <path d="M205.1 103.4L203.3 102.4L203.1 103.5C203.2 103.4 203.3 103.4 203.5 103.4C203.7 103.4 203.8 103.5 204 103.6C204.3 103.8 204.5 103.9 204.6 104.2C204.8 104.4 204.9 104.7 204.9 105C204.9 105.3 205 105.5 204.9 105.8C204.8 106.3 204.6 106.6 204.4 106.8C204.1 107 203.8 106.9 203.3 106.7C203 106.5 202.8 106.3 202.6 106.1C202.4 105.9 202.3 105.6 202.2 105.3C202.1 105 202.1 104.7 202.1 104.4L202.8 104.8C202.8 105 202.8 105.2 202.9 105.4C203 105.6 203.1 105.7 203.3 105.8C203.5 105.9 203.7 105.9 203.8 105.8C203.9 105.7 204 105.5 204.1 105.3C204.1 105.1 204.1 104.8 204 104.6C203.9 104.4 203.8 104.2 203.6 104.1C203.5 104 203.3 104 203.2 104C203.1 104 203 104.1 202.9 104.2L202.2 103.8L202.6 101.1L205.1 102.5V103.4Z" fill="#F2F2F2"/>
            <path d="M208.2 105.1L206.2 108.2L205.4 107.7L207.4 104.7L205.6 103.7L205.7 102.9L208.3 104.4L208.2 105.1Z" fill="#F2F2F2"/>
            <path d="M210.1 105.6C210.2 105.9 210.3 106.2 210.2 106.5C210.1 106.8 210 107 209.8 107.1C209.6 107.2 209.4 107.2 209.1 107C208.8 106.9 208.7 106.6 208.5 106.4C208.4 106.1 208.3 105.8 208.4 105.5C208.5 105.2 208.6 105 208.8 104.9C209 104.8 209.2 104.8 209.5 105C209.7 105.1 209.9 105.4 210.1 105.6ZM211.9 106.5L209 109.8L208.3 109.4L211.2 106.1L211.9 106.5ZM209 106.2C209 106.3 209.1 106.4 209.2 106.5C209.3 106.6 209.4 106.6 209.5 106.5C209.6 106.4 209.6 106.4 209.7 106.2C209.7 106.1 209.7 105.9 209.7 105.8C209.6 105.7 209.6 105.6 209.5 105.5C209.4 105.4 209.3 105.4 209.2 105.5C209.1 105.6 209.1 105.7 209.1 105.8C208.9 106 209 106.1 209 106.2ZM211.7 109.4C211.8 109.7 211.9 110 211.8 110.3C211.7 110.6 211.6 110.8 211.4 110.9C211.2 111 211 111 210.7 110.8C210.4 110.7 210.3 110.4 210.1 110.2C210 109.9 209.9 109.6 210 109.3C210.1 109 210.2 108.8 210.4 108.7C210.6 108.6 210.8 108.6 211.1 108.8C211.4 108.9 211.5 109.1 211.7 109.4ZM210.6 110C210.6 110.1 210.7 110.2 210.8 110.3C210.9 110.4 211 110.4 211.1 110.3C211.2 110.2 211.2 110.1 211.3 110C211.3 109.9 211.3 109.7 211.3 109.6C211.2 109.5 211.2 109.4 211.1 109.3C211 109.2 210.9 109.2 210.8 109.3C210.7 109.4 210.7 109.5 210.6 109.6C210.6 109.8 210.6 109.9 210.6 110Z" fill="#F2F2F2"/>
            <path d="M209.3 139.9C209.3 139.7 209.4 139.6 209.4 139.4L211.1 140.4C211.1 140.6 211 140.8 211 141L209.3 139.9Z" fill="url(#paint363_linear_101_114)"/>
            <path d="M209.1 140.7C209.1 140.6 209.2 140.4 209.2 140.3L210.8 141.5C210.7 141.7 210.7 141.9 210.6 142L209.1 140.7Z" fill="url(#paint364_linear_101_114)"/>
            <path d="M208.8 141.4C208.9 141.3 208.9 141.1 209 141L210.6 142.4C210.5 142.6 210.5 142.7 210.4 142.9L208.8 141.4Z" fill="url(#paint365_linear_101_114)"/>
            <path d="M208.4 142C208.5 141.9 208.5 141.8 208.6 141.6L210.1 143.2C210 143.4 209.9 143.5 209.8 143.7L208.4 142Z" fill="url(#paint366_linear_101_114)"/>
            <path d="M208 142.6C208.1 142.5 208.2 142.4 208.2 142.3L209.6 144C209.5 144.1 209.4 144.3 209.3 144.4L208 142.6Z" fill="url(#paint367_linear_101_114)"/>
            <path d="M207.6 143.1C207.7 143 207.8 142.9 207.9 142.8L209.2 144.6C209.1 144.7 209 144.8 208.9 145L207.6 143.1Z" fill="url(#paint368_linear_101_114)"/>
            <path d="M207 143.6C207.1 143.5 207.2 143.4 207.3 143.4L208.5 145.3C208.4 145.4 208.2 145.5 208.1 145.6L207 143.6Z" fill="url(#paint369_linear_101_114)"/>
            <path d="M206.5 143.9C206.6 143.8 206.7 143.8 206.8 143.7L207.8 145.7C207.7 145.8 207.5 145.9 207.4 145.9L206.5 143.9Z" fill="url(#paint370_linear_101_114)"/>
            <path d="M205.9 144.2C206 144.2 206.1 144.1 206.3 144.1L207.2 146.2C207.1 146.3 206.9 146.3 206.8 146.4L205.9 144.2Z" fill="url(#paint371_linear_101_114)"/>
            <path d="M205.3 144.3C205.4 144.3 205.6 144.2 205.7 144.2L206.5 146.4C206.3 146.4 206.2 146.5 206 146.5L205.3 144.3Z" fill="url(#paint372_linear_101_114)"/>
            <path d="M204.6 144.4C204.7 144.4 204.9 144.4 205 144.4L205.6 146.6C205.4 146.6 205.3 146.6 205.1 146.7L204.6 144.4Z" fill="url(#paint373_linear_101_114)"/>
            <path d="M203.9 144.4C204 144.4 204.2 144.4 204.3 144.4L204.7 146.6C204.5 146.6 204.4 146.6 204.2 146.6L203.9 144.4Z" fill="url(#paint374_linear_101_114)"/>
            <path d="M203.2 144.3C203.3 144.3 203.5 144.3 203.6 144.4L203.9 146.6C203.7 146.6 203.6 146.5 203.4 146.5L203.2 144.3Z" fill="url(#paint375_linear_101_114)"/>
            <path d="M202.5 144.1C202.6 144.1 202.8 144.2 202.9 144.2L203 146.4C202.8 146.4 202.7 146.3 202.5 146.3V144.1Z" fill="url(#paint376_linear_101_114)"/>
            <path d="M201.8 143.9C201.9 144 202.1 144 202.2 144.1L202.1 146.2C201.9 146.1 201.8 146.1 201.6 146L201.8 143.9Z" fill="url(#paint377_linear_101_114)"/>
            <path d="M201.1 143.5C201.2 143.6 201.4 143.7 201.5 143.7L201.3 145.7C201.1 145.6 201 145.5 200.8 145.4L201.1 143.5Z" fill="url(#paint378_linear_101_114)"/>
            <path d="M200.5 143.1C200.6 143.2 200.8 143.3 200.9 143.4L200.5 145.4C200.3 145.3 200.2 145.2 200 145.1L200.5 143.1Z" fill="url(#paint379_linear_101_114)"/>
            <path d="M199.8 142.6C199.9 142.7 200.1 142.8 200.2 142.9L199.7 144.8C199.5 144.7 199.4 144.6 199.2 144.4L199.8 142.6Z" fill="url(#paint380_linear_101_114)"/>
            <path d="M199.2 142C199.3 142.1 199.4 142.2 199.6 142.3L198.9 144C198.7 143.9 198.6 143.7 198.4 143.6L199.2 142Z" fill="url(#paint381_linear_101_114)"/>
            <path d="M198.6 141.4C198.7 141.5 198.8 141.7 199 141.8L198.2 143.4C198 143.2 197.9 143.1 197.8 142.9L198.6 141.4Z" fill="url(#paint382_linear_101_114)"/>
            <path d="M198 140.7C198.1 140.8 198.2 141 198.3 141.1L197.3 142.5C197.2 142.3 197 142.2 196.9 142L198 140.7Z" fill="url(#paint383_linear_101_114)"/>
            <path d="M197.5 139.9C197.6 140.1 197.7 140.2 197.8 140.4L196.7 141.6C196.6 141.4 196.4 141.2 196.3 141L197.5 139.9Z" fill="url(#paint384_linear_101_114)"/>
            <path d="M197 139.1C197.1 139.3 197.2 139.4 197.3 139.6L196.1 140.7C196 140.5 195.9 140.3 195.8 140.1L197 139.1Z" fill="url(#paint385_linear_101_114)"/>
            <path d="M196.6 138.3C196.7 138.5 196.8 138.6 196.8 138.8L195.4 139.7C195.3 139.5 195.2 139.3 195.1 139.1L196.6 138.3Z" fill="url(#paint386_linear_101_114)"/>
            <path d="M196.2 137.4C196.3 137.6 196.3 137.7 196.4 137.9L195 138.6C194.9 138.4 194.8 138.2 194.7 138L196.2 137.4Z" fill="url(#paint387_linear_101_114)"/>
            <path d="M195.9 136.5C196 136.7 196 136.9 196.1 137L194.6 137.4C194.5 137.2 194.5 137 194.4 136.7L195.9 136.5Z" fill="url(#paint388_linear_101_114)"/>
            <path d="M195.7 135.6C195.7 135.8 195.8 136 195.8 136.1L194.2 136.3C194.1 136.1 194.1 135.9 194 135.6H195.7Z" fill="url(#paint389_linear_101_114)"/>
            <path d="M195.5 134.7C195.5 134.9 195.6 135.1 195.6 135.2H193.9C193.9 135 193.8 134.8 193.8 134.5L195.5 134.7Z" fill="url(#paint390_linear_101_114)"/>
            <path d="M195.4 133.8C195.4 134 195.4 134.2 195.5 134.3L193.8 134.1C193.8 133.9 193.7 133.7 193.7 133.4L195.4 133.8Z" fill="url(#paint391_linear_101_114)"/>
            <path d="M195.3 132.9C195.3 133.1 195.3 133.2 195.3 133.4L193.6 133C193.6 132.8 193.6 132.6 193.6 132.3L195.3 132.9Z" fill="url(#paint392_linear_101_114)"/>
            <path d="M195.4 132C195.4 132.2 195.4 132.3 195.4 132.5L193.7 131.9C193.7 131.7 193.7 131.5 193.7 131.3L195.4 132Z" fill="url(#paint393_linear_101_114)"/>
            <path d="M195.5 131.2C195.5 131.4 195.5 131.5 195.4 131.7L193.7 130.9C193.7 130.7 193.8 130.5 193.8 130.3L195.5 131.2Z" fill="url(#paint394_linear_101_114)"/>
            <path d="M195.6 130.5C195.6 130.7 195.5 130.8 195.5 131L193.8 130C193.8 129.8 193.9 129.6 193.9 129.4L195.6 130.5Z" fill="url(#paint395_linear_101_114)"/>
            <path d="M195.9 129.7C195.8 129.8 195.8 130 195.8 130.1L194.2 128.9C194.3 128.7 194.3 128.5 194.4 128.4L195.9 129.7Z" fill="url(#paint396_linear_101_114)"/>
            <path d="M196.1 129C196 129.1 196 129.3 195.9 129.4L194.3 128C194.4 127.8 194.4 127.7 194.5 127.5L196.1 129Z" fill="url(#paint397_linear_101_114)"/>
            <path d="M196.5 128.4C196.4 128.5 196.4 128.6 196.3 128.8L194.8 127.2C194.9 127 195 126.9 195.1 126.7L196.5 128.4Z" fill="url(#paint398_linear_101_114)"/>
            <path d="M196.9 127.8C196.8 127.9 196.7 128 196.7 128.1L195.3 126.4C195.4 126.3 195.5 126.1 195.6 126L196.9 127.8Z" fill="url(#paint399_linear_101_114)"/>
            <path d="M197.4 127.3C197.3 127.4 197.2 127.5 197.1 127.6L195.8 125.8C195.9 125.7 196 125.6 196.1 125.4L197.4 127.3Z" fill="url(#paint400_linear_101_114)"/>
            <path d="M197.9 126.9C197.8 127 197.7 127.1 197.6 127.1L196.4 125.2C196.5 125.1 196.7 125 196.8 124.9L197.9 126.9Z" fill="url(#paint401_linear_101_114)"/>
            <path d="M198.5 126.5C198.4 126.6 198.3 126.6 198.2 126.7L197.2 124.7C197.3 124.6 197.5 124.5 197.6 124.5L198.5 126.5Z" fill="url(#paint402_linear_101_114)"/>
            <path d="M199.1 126.3C199 126.3 198.9 126.4 198.7 126.4L197.8 124.3C197.9 124.2 198.1 124.2 198.2 124.1L199.1 126.3Z" fill="url(#paint403_linear_101_114)"/>
            <path d="M199.7 126.1C199.6 126.1 199.4 126.2 199.3 126.2L198.5 124C198.7 124 198.8 123.9 199 123.9L199.7 126.1Z" fill="url(#paint404_linear_101_114)"/>
            <path d="M200.3 126C200.2 126 200 126 199.9 126L199.3 123.8C199.5 123.8 199.6 123.8 199.8 123.8L200.3 126Z" fill="url(#paint405_linear_101_114)"/>
            <path d="M201 126C200.9 126 200.7 126 200.6 126L200.2 123.8C200.4 123.8 200.5 123.8 200.7 123.8L201 126Z" fill="url(#paint406_linear_101_114)"/>
            <path d="M201.7 126.1C201.6 126.1 201.4 126.1 201.3 126L201 123.8C201.2 123.8 201.3 123.9 201.5 123.9L201.7 126.1Z" fill="url(#paint407_linear_101_114)"/>
            <path d="M202.4 126.3C202.3 126.3 202.1 126.2 202 126.2L201.9 124C202.1 124 202.2 124.1 202.4 124.1V126.3Z" fill="url(#paint408_linear_101_114)"/>
            <path d="M203.1 126.6C203 126.5 202.8 126.5 202.7 126.4L202.8 124.3C203 124.4 203.1 124.4 203.3 124.5L203.1 126.6Z" fill="url(#paint409_linear_101_114)"/>
            <path d="M203.8 126.9C203.7 126.8 203.5 126.7 203.4 126.7L203.6 124.7C203.8 124.8 203.9 124.9 204.1 125L203.8 126.9Z" fill="url(#paint410_linear_101_114)"/>
            <path d="M204.4 127.3C204.3 127.2 204.1 127.1 204 127L204.4 125C204.6 125.1 204.7 125.2 204.9 125.3L204.4 127.3Z" fill="url(#paint411_linear_101_114)"/>
            <path d="M205.1 127.8C205 127.7 204.8 127.6 204.7 127.5L205.2 125.6C205.4 125.7 205.5 125.8 205.7 126L205.1 127.8Z" fill="url(#paint412_linear_101_114)"/>
            <path d="M205.7 128.4C205.6 128.3 205.5 128.2 205.3 128.1L206 126.4C206.2 126.5 206.3 126.7 206.5 126.8L205.7 128.4Z" fill="url(#paint413_linear_101_114)"/>
            <path d="M206.3 129C206.2 128.9 206.1 128.7 205.9 128.6L206.7 127C206.9 127.2 207 127.3 207.1 127.5L206.3 129Z" fill="url(#paint414_linear_101_114)"/>
            <path d="M206.9 129.7C206.8 129.6 206.7 129.4 206.6 129.3L207.6 127.9C207.7 128.1 207.9 128.2 208 128.4L206.9 129.7Z" fill="url(#paint415_linear_101_114)"/>
            <path d="M207.4 130.5C207.3 130.3 207.2 130.2 207.1 130L208.2 128.8C208.3 129 208.5 129.2 208.6 129.4L207.4 130.5Z" fill="url(#paint416_linear_101_114)"/>
            <path d="M207.9 131.3C207.8 131.1 207.7 131 207.6 130.8L208.8 129.7C208.9 129.9 209 130.1 209.1 130.3L207.9 131.3Z" fill="url(#paint417_linear_101_114)"/>
            <path d="M208.3 132.1C208.2 131.9 208.1 131.8 208.1 131.6L209.5 130.7C209.6 130.9 209.7 131.1 209.8 131.3L208.3 132.1Z" fill="url(#paint418_linear_101_114)"/>
            <path d="M208.7 133C208.6 132.8 208.6 132.7 208.5 132.5L209.9 131.8C210 132 210.1 132.2 210.2 132.4L208.7 133Z" fill="url(#paint419_linear_101_114)"/>
            <path d="M209 133.9C208.9 133.7 208.9 133.5 208.8 133.4L210.3 133C210.4 133.2 210.4 133.4 210.5 133.7L209 133.9Z" fill="url(#paint420_linear_101_114)"/>
            <path d="M209.3 134.8C209.3 134.6 209.2 134.4 209.2 134.3L210.8 134.1C210.9 134.3 210.9 134.5 211 134.8H209.3Z" fill="url(#paint421_linear_101_114)"/>
            <path d="M209.4 135.7C209.4 135.5 209.3 135.3 209.3 135.2H210.9C210.9 135.4 211 135.6 211 135.9L209.4 135.7Z" fill="url(#paint422_linear_101_114)"/>
            <path d="M209.5 136.6C209.5 136.4 209.5 136.2 209.4 136.1L211.1 136.3C211.1 136.5 211.2 136.7 211.2 137L209.5 136.6Z" fill="url(#paint423_linear_101_114)"/>
            <path d="M209.6 137.5C209.6 137.3 209.6 137.2 209.6 137L211.3 137.4C211.3 137.6 211.3 137.8 211.3 138.1L209.6 137.5Z" fill="url(#paint424_linear_101_114)"/>
            <path d="M209.6 138.4C209.6 138.2 209.6 138.1 209.6 137.9L211.3 138.5C211.3 138.7 211.3 138.9 211.3 139.1L209.6 138.4Z" fill="url(#paint425_linear_101_114)"/>
            <path d="M209.5 139.2C209.5 139 209.5 138.9 209.6 138.7L211.3 139.5C211.3 139.7 211.2 139.9 211.2 140.1L209.5 139.2Z" fill="url(#paint426_linear_101_114)"/>
            <path d="M197.7 130.5C197.8 130.4 198 130.3 198.2 130.3C198.4 130.3 198.7 130.4 199 130.6C199.3 130.8 199.5 131 199.7 131.2C199.9 131.4 200 131.7 200.1 131.9C200.2 132.1 200.2 132.4 200.2 132.6C200.2 132.8 200.1 133 199.9 133.1C199.8 133.2 199.6 133.3 199.4 133.2C199.6 133.4 199.8 133.7 199.9 133.9C200 134.2 200 134.4 200 134.7C200 135 199.8 135.2 199.7 135.4C199.5 135.5 199.3 135.6 199.1 135.6C198.9 135.6 198.6 135.5 198.3 135.3C198 135.1 197.8 134.9 197.6 134.7C197.4 134.5 197.3 134.2 197.2 133.9C197.1 133.6 197.1 133.3 197.1 133C197.1 132.7 197.2 132.5 197.4 132.4C197.6 132.3 197.8 132.2 198 132.3C197.8 132.1 197.7 131.9 197.6 131.6C197.5 131.4 197.5 131.1 197.5 130.9C197.5 130.8 197.6 130.6 197.7 130.5ZM197.8 134.2C197.9 134.4 198.1 134.6 198.3 134.7C198.5 134.8 198.7 134.9 198.9 134.8C199 134.7 199.1 134.6 199.2 134.4C199.2 134.2 199.2 134 199.1 133.8C199 133.6 198.8 133.4 198.6 133.3C198.4 133.2 198.2 133.1 198.1 133.2C197.9 133.2 197.9 133.4 197.8 133.6C197.7 133.8 197.7 134 197.8 134.2ZM198.3 132.2C198.4 132.4 198.5 132.5 198.7 132.6C198.9 132.7 199 132.7 199.2 132.7C199.3 132.7 199.4 132.5 199.4 132.3C199.4 132.1 199.4 131.9 199.3 131.7C199.2 131.5 199.1 131.4 198.9 131.3C198.7 131.2 198.6 131.2 198.4 131.2C198.3 131.3 198.2 131.4 198.2 131.6C198.1 131.8 198.2 132 198.3 132.2Z" fill="#F2F2F2"/>
            <path d="M200.3 135.5L200.4 134.7L202.7 132.8L203.5 133.3L203 136.2L203.5 136.5L203.4 137.3L203 137L202.9 137.9L202.1 137.5L202.2 136.6L200.3 135.5ZM202.7 134L201.2 135.2L202.4 135.9L202.7 134Z" fill="#F2F2F2"/>
            <path d="M205.8 134.9C205.9 135.2 206 135.5 205.9 135.8C205.8 136.1 205.7 136.3 205.5 136.4C205.3 136.5 205.1 136.5 204.8 136.3C204.5 136.2 204.4 135.9 204.2 135.7C204.1 135.4 204 135.1 204.1 134.8C204.2 134.5 204.3 134.3 204.5 134.2C204.7 134.1 204.9 134.1 205.2 134.3C205.5 134.4 205.7 134.7 205.8 134.9ZM207.7 135.8L204.8 139.1L204.1 138.7L207 135.4L207.7 135.8ZM204.8 135.5C204.8 135.6 204.9 135.7 205 135.8C205.1 135.9 205.2 135.9 205.3 135.8C205.4 135.7 205.4 135.7 205.5 135.5C205.5 135.4 205.5 135.2 205.5 135.1C205.4 135 205.4 134.9 205.3 134.8C205.2 134.7 205.1 134.7 205 134.8C204.9 134.9 204.9 135 204.9 135.1C204.7 135.3 204.7 135.4 204.8 135.5ZM207.5 138.7C207.6 139 207.7 139.3 207.6 139.6C207.5 139.9 207.4 140.1 207.2 140.2C207 140.3 206.8 140.3 206.5 140.1C206.2 140 206.1 139.7 205.9 139.5C205.8 139.2 205.7 138.9 205.8 138.6C205.9 138.3 206 138.1 206.2 138C206.4 137.9 206.6 137.9 206.9 138.1C207.1 138.2 207.3 138.4 207.5 138.7ZM206.4 139.3C206.4 139.4 206.5 139.5 206.6 139.6C206.7 139.7 206.8 139.7 206.9 139.6C207 139.5 207 139.4 207.1 139.3C207.1 139.2 207.1 139 207.1 138.9C207 138.8 207 138.7 206.9 138.6C206.8 138.5 206.7 138.5 206.6 138.6C206.5 138.7 206.5 138.8 206.4 138.9C206.3 139.1 206.3 139.2 206.4 139.3Z" fill="#F2F2F2"/>
            <path d="M82.9 202.6L58.9 188.7L58.1 189.2L82.1 203L82.9 202.6Z" fill="url(#paint427_linear_101_114)"/>
            <path d="M83.9 203.6C83.3 203.9 82.4 203.9 81.9 203.6C81.3 203.3 81.3 202.8 81.9 202.4C82.5 202.1 83.4 202.1 83.9 202.4C84.5 202.8 84.5 203.3 83.9 203.6Z" fill="#FFCC2B"/>
            <path d="M76.3999 204L54.4999 191.3L53.7 191.7L75.7 204.4L76.3999 204Z" fill="url(#paint428_linear_101_114)"/>
            <path d="M77.5 205C76.9 205.3 76 205.3 75.5 205C74.9 204.7 74.9 204.2 75.5 203.8C76.1 203.5 77 203.5 77.5 203.8C78 204.2 78 204.7 77.5 205Z" fill="#FFCC2B"/>
            <path d="M60.5001 199.9L50.0001 193.8L49.3 194.3L59.7001 200.3L60.5001 199.9Z" fill="url(#paint429_linear_101_114)"/>
            <path d="M61.5 200.9C60.9 201.2 60 201.2 59.5 200.9C58.9 200.6 58.9 200.1 59.5 199.7C60.1 199.4 61 199.4 61.5 199.7C62.1 200.1 62.1 200.6 61.5 200.9Z" fill="#FFCC2B"/>
            <path d="M63.8 206.9L45.6 196.4L44.9 196.8L63 207.3L63.8 206.9Z" fill="url(#paint430_linear_101_114)"/>
            <path d="M64.8 207.9C64.2 208.2 63.3 208.2 62.8 207.9C62.2 207.6 62.2 207.1 62.8 206.7C63.4 206.4 64.3 206.4 64.8 206.7C65.4 207.1 65.4 207.6 64.8 207.9Z" fill="#FFCC2B"/>
            <path d="M44.8 201.1L41.2 199L40.4 199.4L44.1 201.5L44.8 201.1Z" fill="url(#paint431_linear_101_114)"/>
            <path d="M45.9 202.1C45.3 202.4 44.4 202.4 43.9 202.1C43.3 201.8 43.3 201.3 43.9 200.9C44.5 200.6 45.4 200.6 45.9 200.9C46.4 201.3 46.4 201.8 45.9 202.1Z" fill="#FFCC2B"/>
            <path d="M47.2 207.5L36.7 201.5L36 201.9L46.4 208L47.2 207.5Z" fill="url(#paint432_linear_101_114)"/>
            <path d="M48.2 208.6C47.6 208.9 46.7 208.9 46.2 208.6C45.6 208.3 45.6 207.8 46.2 207.4C46.8 207 47.7 207.1 48.2 207.4C48.8 207.7 48.8 208.2 48.2 208.6Z" fill="#FFCC2B"/>
            <path d="M38.4 207.6L32.3 204.1L31.6 204.5L37.7 208L38.4 207.6Z" fill="url(#paint433_linear_101_114)"/>
            <path d="M39.5 208.6C38.9 208.9 38 208.9 37.5 208.6C36.9 208.3 36.9 207.8 37.5 207.4C38.1 207.1 39 207.1 39.5 207.4C40 207.8 40 208.3 39.5 208.6Z" fill="#FFCC2B"/>
            <path d="M55.5999 187.5L52.2 185.5L53.3999 184.8L56.7999 186.8L55.5999 187.5Z" fill="#CBCBCB"/>
            <path d="M51.0999 190.1L47.7 188.1L48.8999 187.4L52.2999 189.4L51.0999 190.1Z" fill="#CBCBCB"/>
            <path d="M46.5 192.7L43.1 190.8L44.3 190.1L47.7 192L46.5 192.7Z" fill="#CBCBCB"/>
            <path d="M92.3 192.8L72.1 181.1L71.4 181.5L91.6 193.2L92.3 192.8Z" fill="url(#paint434_linear_101_114)"/>
            <path d="M93.4 193.8C92.8 194.1 91.9 194.1 91.4 193.8C90.8 193.5 90.8 193 91.4 192.6C92 192.3 92.9 192.3 93.4 192.6C93.9 192.9 93.9 193.5 93.4 193.8Z" fill="#FFCC2B"/>
            <path d="M85.9 194.1L67.7 183.6L66.9 184.1L85.1 194.6L85.9 194.1Z" fill="url(#paint435_linear_101_114)"/>
            <path d="M86.9 195.2C86.3 195.5 85.4 195.5 84.9 195.2C84.3 194.9 84.3 194.4 84.9 194C85.5 193.7 86.4 193.7 86.9 194C87.5 194.3 87.5 194.9 86.9 195.2Z" fill="#FFCC2B"/>
            <path d="M78 194.7L63.3 186.2L62.5 186.6L77.3 195.1L78 194.7Z" fill="url(#paint436_linear_101_114)"/>
            <path d="M79.1 195.7C78.5 196 77.6 196 77.1 195.7C76.5 195.4 76.5 194.9 77.1 194.5C77.7 194.2 78.6 194.2 79.1 194.5C79.6 194.9 79.6 195.4 79.1 195.7Z" fill="#FFCC2B"/>
            <path d="M68.9 179.8L65.4 177.9L66.6 177.2L70.1 179.2L68.9 179.8Z" fill="#CBCBCB"/>
            <path d="M64.3 182.5L60.9 180.5L62.1 179.8L65.5 181.8L64.3 182.5Z" fill="#CBCBCB"/>
            <path d="M59.8 185.1L56.4 183.1L57.6 182.4L61 184.4L59.8 185.1Z" fill="#CBCBCB"/>
            <path d="M42 195.3L38.6 193.4L39.8 192.7L43.2 194.7L42 195.3Z" fill="#CBCBCB"/>
            <path d="M37.5 198L34 196L35.2 195.3L38.7 197.3L37.5 198Z" fill="#CBCBCB"/>
            <path d="M32.9 200.6L29.5 198.6L30.7 197.9L34.1 199.9L32.9 200.6Z" fill="#CBCBCB"/>
            <path d="M28.4 203.2L25 201.2L26.1 200.6L29.6 202.5L28.4 203.2Z" fill="#CBCBCB"/>
            <path d="M129.8 66.2L118.7 59.7V58.5L129.8 65V66.2Z" fill="#F2F2F2"/>
            <path d="M129.8 68.6L115.7 60.4V59.2L129.8 67.4V68.6Z" fill="#F2F2F2"/>
            <path d="M129.8 70.9L115.7 62.8V61.6L129.8 69.7V70.9Z" fill="#F2F2F2"/>
            <path d="M129.8 73.3L115.7 65.2V64L129.8 72.1V73.3Z" fill="#F2F2F2"/>
            <path d="M134.8 34.1L123.4 27.7V26.5L134.8 32.9V34.1Z" fill="#F2F2F2"/>
            <path d="M134.8 36.5L120.7 28.4V27.2L134.8 35.3V36.5Z" fill="#F2F2F2"/>
            <path d="M133.6 38.3L120.7 30.8V29.6L133.6 37.1V38.3Z" fill="#F2F2F2"/>
            <path d="M124 35.1L120.7 33.2V32L124 33.9V35.1Z" fill="#F2F2F2"/>
            <path d="M121.3 38L134.8 45.6L176.5 57.9" stroke="#F2F2F2" strokeWidth="0.5" stroke-miterlimit="10"/>
            <path d="M115.7 68.6L129.8 76.1L171.4 87.5" stroke="#F2F2F2" strokeWidth="0.5" stroke-miterlimit="10"/>
            <path d="M128.4 98L114.3 89.9V88.7L128.4 96.8V98Z" fill="#F2F2F2"/>
            <path d="M128.4 100.4L114.3 92.3V91.1L128.4 99.2V100.4Z" fill="#F2F2F2"/>
            <path d="M128.4 102.8L114.3 94.7V93.5L128.4 101.6V102.8Z" fill="#F2F2F2"/>
            <path d="M123.3 102.3L114.3 97.1V95.9L123.3 101.1V102.3Z" fill="#F2F2F2"/>
            <path d="M114.3 100.4L128.4 108L166.2 115.8" stroke="#F2F2F2" strokeWidth="0.5" stroke-miterlimit="10"/>
            <path opacity="0.6" d="M22.2 223.7L0.400024 236.3L36.9 257.4L58.7 244.8L22.2 223.7Z" fill="url(#paint437_linear_101_114)"/>
            <path d="M36.9 254.6L0.400024 233.5L22.2 220.9L58.7 242L36.9 254.6Z" fill="#D5E7F7"/>
            <path d="M36.7 252.9L3.40002 233.6L22.4 222.6L55.8 241.9L36.7 252.9Z" fill="url(#paint438_linear_101_114)"/>
            <path d="M31.0001 231.9L12.7001 234.7L26.1001 242.4L31.0001 231.9Z" fill="#42BAEC"/>
            <path d="M39.823 241.161C39.9535 239.011 36.9756 237.081 33.1717 236.85C29.3678 236.619 26.1783 238.175 26.0478 240.325C25.9173 242.475 28.8952 244.405 32.6991 244.636C36.503 244.867 39.6925 243.311 39.823 241.161Z" fill="white"/>
            <path d="M256.8 331.2C254.6 330.6 253.5 331 249.9 332C246.7 325.1 241.9 324.3 239.2 324.5C245.5 321 251.9 321.9 255 322.8C256.3 323.3 257.2 324.3 257.9 325.3C259.2 328.9 258.6 331.4 256.8 331.2Z" fill="url(#paint439_linear_101_114)"/>
            <path d="M256.8 331.2C254.6 330.6 253.5 331 249.9 332V331.9C250.8 331.5 254.1 330.3 256.4 330.9C258.8 331.5 258.4 327.6 258.1 325.8C259.2 329.1 258.5 331.4 256.8 331.2Z" fill="#282D70"/>
            <path d="M259.3 332C259 332.4 258.3 332.5 257.1 332.2C253.8 331.2 248.9 333.4 246.6 335C244.3 336.6 242.1 343.1 235.5 343.2C230.1 343.3 227.7 338.8 227 337.2C227.9 332.2 234.4 327.3 238.5 324.9C238.7 324.8 238.9 324.7 239.1 324.5C241.8 324.3 246.7 325.2 249.8 332C253.4 331.1 254.5 330.6 256.7 331.2C258.4 331.5 259.1 328.9 257.8 325.4C258.8 326.9 259.2 328.8 259.4 330.4C259.4 330.5 259.4 330.5 259.4 330.6C259.7 331 259.6 331.5 259.3 332Z" fill="url(#paint440_linear_101_114)"/>
            <path d="M259.3 332C258 334.4 252.9 336.7 250.4 337.8C247.4 339.1 245.4 342.3 240.4 343.6C227.6 345.7 226.9 337.8 226.9 337.8C226.9 337.6 226.9 337.4 227 337.3C227.7 338.9 230.1 343.4 235.5 343.3C242.1 343.2 244.3 336.7 246.6 335.1C248.9 333.5 253.8 331.3 257.1 332.3C258.3 332.5 259 332.4 259.3 332Z" fill="url(#paint441_linear_101_114)"/>
            <path d="M244.9 325.3C244.9 325.3 249.6 322.5 254.9 322.8L255.2 322.9C254.8 322.9 250.5 322.3 245.2 325.3C244.9 325.3 244.9 325.3 244.9 325.3Z" fill="#282D70"/>
            <path d="M250.4 321.7C250 321.6 249.4 321.8 248.9 322.1C248.2 322.6 248.1 323.2 248.1 323.9C249.3 323.6 250 323.2 251.1 323L251.5 322C251.6 322.1 250.7 321.8 250.4 321.7Z" fill="#282D70"/>
            <path d="M250.3 322.4C250 322.7 249.7 323.1 249.5 323.5C250.4 323.2 251.3 323 252.3 323C252.3 322.9 252.3 322.9 252.2 322.8C252 322 251.1 321.8 250.3 322.4Z" fill="url(#paint442_linear_101_114)"/>
            <defs>
            <pattern id="pattern0_101_114" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use  transform="scale(0.00184162 0.00149701)"/>
            </pattern>
            <linearGradient id="paint0_linear_101_114" x1="117.027" y1="363.256" x2="360.743" y2="307.797" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="0.0904413" stop-color="white"/>
            <stop offset="0.0966591" stop-color="#FEFAFC"/>
            <stop offset="0.1016" stop-color="#FAF1F7"/>
            <stop offset="0.106" stop-color="#F5E3EF"/>
            <stop offset="0.1102" stop-color="#EFD0E4"/>
            <stop offset="0.1113" stop-color="#EDCAE0"/>
            <stop offset="0.1303" stop-color="#EBC7DE"/>
            <stop offset="0.1453" stop-color="#E5BDD9"/>
            <stop offset="0.1589" stop-color="#DAAED1"/>
            <stop offset="0.1597" stop-color="#DAADD0"/>
            <stop offset="0.1687" stop-color="#D4A8CE"/>
            <stop offset="0.2498" stop-color="#A786BE"/>
            <stop offset="0.3199" stop-color="#8972B3"/>
            <stop offset="0.3755" stop-color="#7767AE"/>
            <stop offset="0.4099" stop-color="#7163AC"/>
            <stop offset="0.4112" stop-color="#7163AC"/>
            <stop offset="0.5266" stop-color="#5E5CA9"/>
            <stop offset="0.5991" stop-color="#575AA7"/>
            <stop offset="1" stop-color="#5557A6"/>
            </linearGradient>
            <radialGradient id="paint1_radial_101_114" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(214.668 224.976) rotate(128.897) scale(82.1826 104.176)">
            <stop stop-color="white"/>
            <stop offset="0.0904413" stop-color="white"/>
            <stop offset="0.0966575" stop-color="#FEFAFC"/>
            <stop offset="0.1016" stop-color="#FAF1F7"/>
            <stop offset="0.106" stop-color="#F5E3EF"/>
            <stop offset="0.1102" stop-color="#EFD0E4"/>
            <stop offset="0.1113" stop-color="#EECAE0"/>
            <stop offset="0.1302" stop-color="#EBC7DE"/>
            <stop offset="0.145" stop-color="#E5BDD9"/>
            <stop offset="0.1585" stop-color="#DAAED1"/>
            <stop offset="0.1597" stop-color="#D9ACD0"/>
            <stop offset="0.169" stop-color="#D3A7CE"/>
            <stop offset="0.2499" stop-color="#A686BD"/>
            <stop offset="0.3199" stop-color="#8872B3"/>
            <stop offset="0.3756" stop-color="#7767AE"/>
            <stop offset="0.4099" stop-color="#7163AC"/>
            <stop offset="0.4103" stop-color="#7063AC"/>
            <stop offset="0.5262" stop-color="#5E5CA8"/>
            <stop offset="0.5991" stop-color="#575AA7"/>
            <stop offset="1" stop-color="#5556A5"/>
            </radialGradient>
            <linearGradient id="paint2_linear_101_114" x1="16.9022" y1="261.421" x2="183.185" y2="261.421" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#42AAE0"/>
            </linearGradient>
            <linearGradient id="paint3_linear_101_114" x1="237.582" y1="277.577" x2="289.798" y2="277.577" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#42AAE0"/>
            </linearGradient>
            <linearGradient id="paint4_linear_101_114" x1="177.709" y1="282.393" x2="269.105" y2="282.393" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#42AAE0"/>
            </linearGradient>
            <linearGradient id="paint5_linear_101_114" x1="164.256" y1="278.877" x2="227.491" y2="278.877" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#42AAE0"/>
            </linearGradient>
            <linearGradient id="paint6_linear_101_114" x1="249.06" y1="264.629" x2="323.998" y2="264.629" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#42AAE0"/>
            </linearGradient>
            <linearGradient id="paint7_linear_101_114" x1="229.41" y1="278.654" x2="262.369" y2="278.654" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#42AAE0"/>
            </linearGradient>
            <linearGradient id="paint8_linear_101_114" x1="149.108" y1="226.766" x2="274.355" y2="226.766" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#42AAE0"/>
            </linearGradient>
            <linearGradient id="paint9_linear_101_114" x1="136.679" y1="308.445" x2="205.584" y2="308.445" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#42AAE0"/>
            </linearGradient>
            <linearGradient id="paint10_linear_101_114" x1="61.2026" y1="262.338" x2="128.163" y2="262.338" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#42AAE0"/>
            </linearGradient>
            <linearGradient id="paint11_linear_101_114" x1="51.4251" y1="275.198" x2="136.862" y2="275.198" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#42AAE0"/>
            </linearGradient>
            <linearGradient id="paint12_linear_101_114" x1="18.6612" y1="282.874" x2="165.06" y2="282.874" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#42AAE0"/>
            </linearGradient>
            <radialGradient id="paint13_radial_101_114" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.6413 319.061) scale(9.64301)">
            <stop stop-color="white"/>
            <stop offset="0.0904413" stop-color="white"/>
            <stop offset="0.0966575" stop-color="#FEFAFC"/>
            <stop offset="0.1016" stop-color="#FAF1F7"/>
            <stop offset="0.106" stop-color="#F5E3EF"/>
            <stop offset="0.1102" stop-color="#EFD0E4"/>
            <stop offset="0.1113" stop-color="#EECAE0"/>
            <stop offset="0.1302" stop-color="#EBC7DE"/>
            <stop offset="0.145" stop-color="#E5BDD9"/>
            <stop offset="0.1585" stop-color="#DAAED1"/>
            <stop offset="0.1597" stop-color="#D9ACD0"/>
            <stop offset="0.169" stop-color="#D3A7CE"/>
            <stop offset="0.2499" stop-color="#A686BD"/>
            <stop offset="0.3199" stop-color="#8872B3"/>
            <stop offset="0.3756" stop-color="#7767AE"/>
            <stop offset="0.4099" stop-color="#7163AC"/>
            <stop offset="0.4103" stop-color="#7063AC"/>
            <stop offset="0.5262" stop-color="#5E5CA8"/>
            <stop offset="0.5991" stop-color="#575AA7"/>
            <stop offset="1" stop-color="#5556A5"/>
            </radialGradient>
            <radialGradient id="paint14_radial_101_114" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(159.968 331.102) scale(9.64291)">
            <stop stop-color="white"/>
            <stop offset="0.0904413" stop-color="white"/>
            <stop offset="0.0966575" stop-color="#FEFAFC"/>
            <stop offset="0.1016" stop-color="#FAF1F7"/>
            <stop offset="0.106" stop-color="#F5E3EF"/>
            <stop offset="0.1102" stop-color="#EFD0E4"/>
            <stop offset="0.1113" stop-color="#EECAE0"/>
            <stop offset="0.1302" stop-color="#EBC7DE"/>
            <stop offset="0.145" stop-color="#E5BDD9"/>
            <stop offset="0.1585" stop-color="#DAAED1"/>
            <stop offset="0.1597" stop-color="#D9ACD0"/>
            <stop offset="0.169" stop-color="#D3A7CE"/>
            <stop offset="0.2499" stop-color="#A686BD"/>
            <stop offset="0.3199" stop-color="#8872B3"/>
            <stop offset="0.3756" stop-color="#7767AE"/>
            <stop offset="0.4099" stop-color="#7163AC"/>
            <stop offset="0.4103" stop-color="#7063AC"/>
            <stop offset="0.5262" stop-color="#5E5CA8"/>
            <stop offset="0.5991" stop-color="#575AA7"/>
            <stop offset="1" stop-color="#5556A5"/>
            </radialGradient>
            <radialGradient id="paint15_radial_101_114" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(227.358 312.089) scale(9.64301)">
            <stop stop-color="white"/>
            <stop offset="0.0904413" stop-color="white"/>
            <stop offset="0.0966575" stop-color="#FEFAFC"/>
            <stop offset="0.1016" stop-color="#FAF1F7"/>
            <stop offset="0.106" stop-color="#F5E3EF"/>
            <stop offset="0.1102" stop-color="#EFD0E4"/>
            <stop offset="0.1113" stop-color="#EECAE0"/>
            <stop offset="0.1302" stop-color="#EBC7DE"/>
            <stop offset="0.145" stop-color="#E5BDD9"/>
            <stop offset="0.1585" stop-color="#DAAED1"/>
            <stop offset="0.1597" stop-color="#D9ACD0"/>
            <stop offset="0.169" stop-color="#D3A7CE"/>
            <stop offset="0.2499" stop-color="#A686BD"/>
            <stop offset="0.3199" stop-color="#8872B3"/>
            <stop offset="0.3756" stop-color="#7767AE"/>
            <stop offset="0.4099" stop-color="#7163AC"/>
            <stop offset="0.4103" stop-color="#7063AC"/>
            <stop offset="0.5262" stop-color="#5E5CA8"/>
            <stop offset="0.5991" stop-color="#575AA7"/>
            <stop offset="1" stop-color="#5556A5"/>
            </radialGradient>
            <radialGradient id="paint16_radial_101_114" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(256.806 324.443) scale(9.64301)">
            <stop stop-color="white"/>
            <stop offset="0.0904413" stop-color="white"/>
            <stop offset="0.0966575" stop-color="#FEFAFC"/>
            <stop offset="0.1016" stop-color="#FAF1F7"/>
            <stop offset="0.106" stop-color="#F5E3EF"/>
            <stop offset="0.1102" stop-color="#EFD0E4"/>
            <stop offset="0.1113" stop-color="#EECAE0"/>
            <stop offset="0.1302" stop-color="#EBC7DE"/>
            <stop offset="0.145" stop-color="#E5BDD9"/>
            <stop offset="0.1585" stop-color="#DAAED1"/>
            <stop offset="0.1597" stop-color="#D9ACD0"/>
            <stop offset="0.169" stop-color="#D3A7CE"/>
            <stop offset="0.2499" stop-color="#A686BD"/>
            <stop offset="0.3199" stop-color="#8872B3"/>
            <stop offset="0.3756" stop-color="#7767AE"/>
            <stop offset="0.4099" stop-color="#7163AC"/>
            <stop offset="0.4103" stop-color="#7063AC"/>
            <stop offset="0.5262" stop-color="#5E5CA8"/>
            <stop offset="0.5991" stop-color="#575AA7"/>
            <stop offset="1" stop-color="#5556A5"/>
            </radialGradient>
            <radialGradient id="paint17_radial_101_114" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(304.34 281.906) scale(9.64301)">
            <stop stop-color="white"/>
            <stop offset="0.0904413" stop-color="white"/>
            <stop offset="0.0966575" stop-color="#FEFAFC"/>
            <stop offset="0.1016" stop-color="#FAF1F7"/>
            <stop offset="0.106" stop-color="#F5E3EF"/>
            <stop offset="0.1102" stop-color="#EFD0E4"/>
            <stop offset="0.1113" stop-color="#EECAE0"/>
            <stop offset="0.1302" stop-color="#EBC7DE"/>
            <stop offset="0.145" stop-color="#E5BDD9"/>
            <stop offset="0.1585" stop-color="#DAAED1"/>
            <stop offset="0.1597" stop-color="#D9ACD0"/>
            <stop offset="0.169" stop-color="#D3A7CE"/>
            <stop offset="0.2499" stop-color="#A686BD"/>
            <stop offset="0.3199" stop-color="#8872B3"/>
            <stop offset="0.3756" stop-color="#7767AE"/>
            <stop offset="0.4099" stop-color="#7163AC"/>
            <stop offset="0.4103" stop-color="#7063AC"/>
            <stop offset="0.5262" stop-color="#5E5CA8"/>
            <stop offset="0.5991" stop-color="#575AA7"/>
            <stop offset="1" stop-color="#5556A5"/>
            </radialGradient>
            <radialGradient id="paint18_radial_101_114" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(288.766 299.77) scale(9.64301 9.64299)">
            <stop stop-color="white"/>
            <stop offset="0.0904413" stop-color="white"/>
            <stop offset="0.0966575" stop-color="#FEFAFC"/>
            <stop offset="0.1016" stop-color="#FAF1F7"/>
            <stop offset="0.106" stop-color="#F5E3EF"/>
            <stop offset="0.1102" stop-color="#EFD0E4"/>
            <stop offset="0.1113" stop-color="#EECAE0"/>
            <stop offset="0.1302" stop-color="#EBC7DE"/>
            <stop offset="0.145" stop-color="#E5BDD9"/>
            <stop offset="0.1585" stop-color="#DAAED1"/>
            <stop offset="0.1597" stop-color="#D9ACD0"/>
            <stop offset="0.169" stop-color="#D3A7CE"/>
            <stop offset="0.2499" stop-color="#A686BD"/>
            <stop offset="0.3199" stop-color="#8872B3"/>
            <stop offset="0.3756" stop-color="#7767AE"/>
            <stop offset="0.4099" stop-color="#7163AC"/>
            <stop offset="0.4103" stop-color="#7063AC"/>
            <stop offset="0.5262" stop-color="#5E5CA8"/>
            <stop offset="0.5991" stop-color="#575AA7"/>
            <stop offset="1" stop-color="#5556A5"/>
            </radialGradient>
            <radialGradient id="paint19_radial_101_114" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(249.434 297.204) scale(9.64301 9.64299)">
            <stop stop-color="white"/>
            <stop offset="0.0904413" stop-color="white"/>
            <stop offset="0.0966575" stop-color="#FEFAFC"/>
            <stop offset="0.1016" stop-color="#FAF1F7"/>
            <stop offset="0.106" stop-color="#F5E3EF"/>
            <stop offset="0.1102" stop-color="#EFD0E4"/>
            <stop offset="0.1113" stop-color="#EECAE0"/>
            <stop offset="0.1302" stop-color="#EBC7DE"/>
            <stop offset="0.145" stop-color="#E5BDD9"/>
            <stop offset="0.1585" stop-color="#DAAED1"/>
            <stop offset="0.1597" stop-color="#D9ACD0"/>
            <stop offset="0.169" stop-color="#D3A7CE"/>
            <stop offset="0.2499" stop-color="#A686BD"/>
            <stop offset="0.3199" stop-color="#8872B3"/>
            <stop offset="0.3756" stop-color="#7767AE"/>
            <stop offset="0.4099" stop-color="#7163AC"/>
            <stop offset="0.4103" stop-color="#7063AC"/>
            <stop offset="0.5262" stop-color="#5E5CA8"/>
            <stop offset="0.5991" stop-color="#575AA7"/>
            <stop offset="1" stop-color="#5556A5"/>
            </radialGradient>
            <radialGradient id="paint20_radial_101_114" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.0161 280.527) scale(9.64301)">
            <stop stop-color="white"/>
            <stop offset="0.0904413" stop-color="white"/>
            <stop offset="0.0966575" stop-color="#FEFAFC"/>
            <stop offset="0.1016" stop-color="#FAF1F7"/>
            <stop offset="0.106" stop-color="#F5E3EF"/>
            <stop offset="0.1102" stop-color="#EFD0E4"/>
            <stop offset="0.1113" stop-color="#EECAE0"/>
            <stop offset="0.1302" stop-color="#EBC7DE"/>
            <stop offset="0.145" stop-color="#E5BDD9"/>
            <stop offset="0.1585" stop-color="#DAAED1"/>
            <stop offset="0.1597" stop-color="#D9ACD0"/>
            <stop offset="0.169" stop-color="#D3A7CE"/>
            <stop offset="0.2499" stop-color="#A686BD"/>
            <stop offset="0.3199" stop-color="#8872B3"/>
            <stop offset="0.3756" stop-color="#7767AE"/>
            <stop offset="0.4099" stop-color="#7163AC"/>
            <stop offset="0.4103" stop-color="#7063AC"/>
            <stop offset="0.5262" stop-color="#5E5CA8"/>
            <stop offset="0.5991" stop-color="#575AA7"/>
            <stop offset="1" stop-color="#5556A5"/>
            </radialGradient>
            <radialGradient id="paint21_radial_101_114" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(53.1831 254.834) scale(9.64299)">
            <stop stop-color="white"/>
            <stop offset="0.0904413" stop-color="white"/>
            <stop offset="0.0966575" stop-color="#FEFAFC"/>
            <stop offset="0.1016" stop-color="#FAF1F7"/>
            <stop offset="0.106" stop-color="#F5E3EF"/>
            <stop offset="0.1102" stop-color="#EFD0E4"/>
            <stop offset="0.1113" stop-color="#EECAE0"/>
            <stop offset="0.1302" stop-color="#EBC7DE"/>
            <stop offset="0.145" stop-color="#E5BDD9"/>
            <stop offset="0.1585" stop-color="#DAAED1"/>
            <stop offset="0.1597" stop-color="#D9ACD0"/>
            <stop offset="0.169" stop-color="#D3A7CE"/>
            <stop offset="0.2499" stop-color="#A686BD"/>
            <stop offset="0.3199" stop-color="#8872B3"/>
            <stop offset="0.3756" stop-color="#7767AE"/>
            <stop offset="0.4099" stop-color="#7163AC"/>
            <stop offset="0.4103" stop-color="#7063AC"/>
            <stop offset="0.5262" stop-color="#5E5CA8"/>
            <stop offset="0.5991" stop-color="#575AA7"/>
            <stop offset="1" stop-color="#5556A5"/>
            </radialGradient>
            <radialGradient id="paint22_radial_101_114" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(61.8935 249.903) scale(9.64301)">
            <stop stop-color="white"/>
            <stop offset="0.0904413" stop-color="white"/>
            <stop offset="0.0966575" stop-color="#FEFAFC"/>
            <stop offset="0.1016" stop-color="#FAF1F7"/>
            <stop offset="0.106" stop-color="#F5E3EF"/>
            <stop offset="0.1102" stop-color="#EFD0E4"/>
            <stop offset="0.1113" stop-color="#EECAE0"/>
            <stop offset="0.1302" stop-color="#EBC7DE"/>
            <stop offset="0.145" stop-color="#E5BDD9"/>
            <stop offset="0.1585" stop-color="#DAAED1"/>
            <stop offset="0.1597" stop-color="#D9ACD0"/>
            <stop offset="0.169" stop-color="#D3A7CE"/>
            <stop offset="0.2499" stop-color="#A686BD"/>
            <stop offset="0.3199" stop-color="#8872B3"/>
            <stop offset="0.3756" stop-color="#7767AE"/>
            <stop offset="0.4099" stop-color="#7163AC"/>
            <stop offset="0.4103" stop-color="#7063AC"/>
            <stop offset="0.5262" stop-color="#5E5CA8"/>
            <stop offset="0.5991" stop-color="#575AA7"/>
            <stop offset="1" stop-color="#5556A5"/>
            </radialGradient>
            <linearGradient id="paint23_linear_101_114" x1="178.124" y1="204.951" x2="213.392" y2="266.032" gradientUnits="userSpaceOnUse">
            <stop stop-color="#282D70"/>
            <stop offset="1" stop-color="#282D70"/>
            </linearGradient>
            <linearGradient id="paint24_linear_101_114" x1="179.379" y1="204.227" x2="213.392" y2="263.134" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint25_linear_101_114" x1="226.531" y1="277.322" x2="166.294" y2="172.99" gradientUnits="userSpaceOnUse">
            <stop stop-color="#282D70"/>
            <stop offset="1" stop-color="#282D70"/>
            </linearGradient>
            <linearGradient id="paint26_linear_101_114" x1="226.532" y1="273.924" x2="167.338" y2="171.401" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint27_linear_101_114" x1="0.74345" y1="199.635" x2="123.311" y2="197.085" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint28_linear_101_114" x1="8.36532" y1="212.483" x2="112.291" y2="212.483" gradientUnits="userSpaceOnUse">
            <stop stop-color="#282D70"/>
            <stop offset="1" stop-color="#282D70"/>
            </linearGradient>
            <linearGradient id="paint29_linear_101_114" x1="112.288" y1="194.806" x2="113.248" y2="194.806" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint30_linear_101_114" x1="7.40302" y1="204.196" x2="8.36772" y2="204.196" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint31_linear_101_114" x1="52.4177" y1="209.347" x2="110.87" y2="209.347" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="0.4047" stop-color="#4B9BD5"/>
            <stop offset="0.7219" stop-color="#4E6FB6"/>
            <stop offset="0.9761" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint32_linear_101_114" x1="10.2809" y1="214.166" x2="52.4209" y2="214.166" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="0.4047" stop-color="#4B9BD5"/>
            <stop offset="0.7219" stop-color="#4E6FB6"/>
            <stop offset="0.9761" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint33_linear_101_114" x1="61.6249" y1="146.572" x2="56.0219" y2="414.321" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="0.00657173" stop-color="#5865AF"/>
            <stop offset="0.017203" stop-color="#5578BB"/>
            <stop offset="0.0289473" stop-color="#5188C7"/>
            <stop offset="0.0418529" stop-color="#4D96D1"/>
            <stop offset="0.0563975" stop-color="#49A1D9"/>
            <stop offset="0.0735217" stop-color="#46A9DF"/>
            <stop offset="0.0956891" stop-color="#44ADE2"/>
            <stop offset="0.1411" stop-color="#44AEE3"/>
            <stop offset="0.1429" stop-color="#47AFE3"/>
            <stop offset="0.1743" stop-color="#76BDE9"/>
            <stop offset="0.2088" stop-color="#98CBEE"/>
            <stop offset="0.2478" stop-color="#B5D8F2"/>
            <stop offset="0.2919" stop-color="#CCE3F6"/>
            <stop offset="0.3434" stop-color="#DDEDF9"/>
            <stop offset="0.407" stop-color="#E9F4FC"/>
            <stop offset="0.4963" stop-color="#F1F9FE"/>
            <stop offset="0.7442" stop-color="#F3FAFE"/>
            <stop offset="0.89" stop-color="#8FCEF1"/>
            <stop offset="0.9121" stop-color="#94D0F2"/>
            <stop offset="0.9337" stop-color="#A1D5F3"/>
            <stop offset="0.9552" stop-color="#B6DDF5"/>
            <stop offset="0.9765" stop-color="#D3E9F9"/>
            <stop offset="0.9976" stop-color="#F8FCFE"/>
            <stop offset="1" stop-color="white"/>
            </linearGradient>
            <linearGradient id="paint34_linear_101_114" x1="97.0549" y1="177.36" x2="97.3867" y2="177.36" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#42AAE0"/>
            </linearGradient>
            <linearGradient id="paint35_linear_101_114" x1="93.8865" y1="178.51" x2="97.058" y2="178.51" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#42AAE0"/>
            </linearGradient>
            <linearGradient id="paint36_linear_101_114" x1="78.5895" y1="179.044" x2="100.145" y2="179.044" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#42AAE0"/>
            </linearGradient>
            <linearGradient id="paint37_linear_101_114" x1="328.26" y1="184.955" x2="302.548" y2="184.955" gradientUnits="userSpaceOnUse">
            <stop stop-color="#282D70"/>
            <stop offset="1" stop-color="#282D70"/>
            </linearGradient>
            <linearGradient id="paint38_linear_101_114" x1="171.274" y1="94.319" x2="145.562" y2="94.319" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint39_linear_101_114" x1="-102.693" y1="212.546" x2="447.69" y2="94.7351" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint40_linear_101_114" x1="321.136" y1="140.22" x2="149.253" y2="140.22" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint41_linear_101_114" x1="328.26" y1="70.6632" x2="167.841" y2="70.6632" gradientUnits="userSpaceOnUse">
            <stop stop-color="#282D70"/>
            <stop offset="1" stop-color="#282D70"/>
            </linearGradient>
            <linearGradient id="paint42_linear_101_114" x1="221.805" y1="157.645" x2="302.012" y2="157.645" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFDA68"/>
            <stop offset="0.3281" stop-color="white"/>
            <stop offset="0.5372" stop-color="#FFF1C4"/>
            <stop offset="1" stop-color="#FFCC2B"/>
            </linearGradient>
            <linearGradient id="paint43_linear_101_114" x1="177.282" y1="41.1374" x2="245.032" y2="146.058" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint44_linear_101_114" x1="176.726" y1="41.4962" x2="244.476" y2="146.417" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint45_linear_101_114" x1="176.145" y1="41.8719" x2="243.894" y2="146.792" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint46_linear_101_114" x1="175.544" y1="42.2596" x2="243.294" y2="147.181" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint47_linear_101_114" x1="174.928" y1="42.6574" x2="242.677" y2="147.578" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint48_linear_101_114" x1="174.302" y1="43.0616" x2="242.051" y2="147.983" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint49_linear_101_114" x1="173.64" y1="43.4884" x2="241.39" y2="148.411" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint50_linear_101_114" x1="173.02" y1="43.8895" x2="240.768" y2="148.811" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint51_linear_101_114" x1="172.411" y1="44.2834" x2="240.159" y2="149.203" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint52_linear_101_114" x1="171.817" y1="44.6662" x2="239.566" y2="149.588" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint53_linear_101_114" x1="171.246" y1="45.0348" x2="238.995" y2="149.956" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint54_linear_101_114" x1="170.704" y1="45.3853" x2="238.453" y2="150.305" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint55_linear_101_114" x1="170.194" y1="45.7145" x2="237.942" y2="150.636" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint56_linear_101_114" x1="169.723" y1="46.0186" x2="237.472" y2="150.939" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint57_linear_101_114" x1="169.295" y1="46.2947" x2="237.044" y2="151.216" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint58_linear_101_114" x1="168.915" y1="46.5404" x2="236.665" y2="151.46" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint59_linear_101_114" x1="168.614" y1="46.7341" x2="236.362" y2="151.657" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint60_linear_101_114" x1="168.332" y1="46.9162" x2="236.082" y2="151.839" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint61_linear_101_114" x1="168.107" y1="47.0626" x2="235.855" y2="151.982" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint62_linear_101_114" x1="167.94" y1="47.17" x2="235.689" y2="152.091" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint63_linear_101_114" x1="167.833" y1="47.2391" x2="235.582" y2="152.158" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint64_linear_101_114" x1="167.788" y1="47.2676" x2="235.538" y2="152.189" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint65_linear_101_114" x1="167.802" y1="47.2581" x2="235.552" y2="152.182" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint66_linear_101_114" x1="167.877" y1="47.211" x2="235.624" y2="152.131" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint67_linear_101_114" x1="168.012" y1="47.1237" x2="235.76" y2="152.044" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint68_linear_101_114" x1="168.206" y1="46.9982" x2="235.955" y2="151.918" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint69_linear_101_114" x1="168.458" y1="46.8356" x2="236.206" y2="151.755" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint70_linear_101_114" x1="168.765" y1="46.6372" x2="236.514" y2="151.557" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint71_linear_101_114" x1="169.125" y1="46.4049" x2="236.874" y2="151.325" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint72_linear_101_114" x1="169.534" y1="46.1409" x2="237.281" y2="151.062" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint73_linear_101_114" x1="169.987" y1="45.8477" x2="237.736" y2="150.77" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint74_linear_101_114" x1="170.482" y1="45.5287" x2="238.23" y2="150.448" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint75_linear_101_114" x1="170.959" y1="45.2204" x2="238.708" y2="150.141" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint76_linear_101_114" x1="171.515" y1="44.8611" x2="239.265" y2="149.783" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint77_linear_101_114" x1="172.097" y1="44.4856" x2="239.846" y2="149.406" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint78_linear_101_114" x1="172.699" y1="44.0971" x2="240.448" y2="149.017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint79_linear_101_114" x1="173.315" y1="43.6995" x2="241.063" y2="148.62" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint80_linear_101_114" x1="173.941" y1="43.2948" x2="241.69" y2="148.216" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint81_linear_101_114" x1="174.603" y1="42.8674" x2="242.352" y2="147.788" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint82_linear_101_114" x1="175.223" y1="42.4669" x2="242.972" y2="147.388" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint83_linear_101_114" x1="175.833" y1="42.073" x2="243.583" y2="146.994" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint84_linear_101_114" x1="176.426" y1="41.6899" x2="244.175" y2="146.612" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint85_linear_101_114" x1="176.997" y1="41.3213" x2="244.746" y2="146.242" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint86_linear_101_114" x1="177.54" y1="40.9709" x2="245.289" y2="145.89" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint87_linear_101_114" x1="178.049" y1="40.642" x2="245.797" y2="145.564" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint88_linear_101_114" x1="178.52" y1="40.3381" x2="246.269" y2="145.259" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint89_linear_101_114" x1="178.947" y1="40.0622" x2="246.696" y2="144.984" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint90_linear_101_114" x1="179.328" y1="39.8168" x2="247.077" y2="144.735" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint91_linear_101_114" x1="179.627" y1="39.6233" x2="247.375" y2="144.545" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint92_linear_101_114" x1="179.91" y1="39.4414" x2="247.657" y2="144.36" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint93_linear_101_114" x1="180.135" y1="39.2958" x2="247.883" y2="144.213" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint94_linear_101_114" x1="180.302" y1="39.1879" x2="248.051" y2="144.107" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint95_linear_101_114" x1="180.407" y1="39.1194" x2="248.157" y2="144.04" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint96_linear_101_114" x1="180.452" y1="39.0907" x2="248.201" y2="144.012" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint97_linear_101_114" x1="180.438" y1="39.1002" x2="248.186" y2="144.02" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint98_linear_101_114" x1="180.363" y1="39.1479" x2="248.112" y2="144.071" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint99_linear_101_114" x1="180.228" y1="39.2353" x2="247.977" y2="144.156" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint100_linear_101_114" x1="180.034" y1="39.3609" x2="247.782" y2="144.28" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint101_linear_101_114" x1="179.782" y1="39.5234" x2="247.531" y2="144.444" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint102_linear_101_114" x1="179.475" y1="39.7219" x2="247.223" y2="144.642" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint103_linear_101_114" x1="179.115" y1="39.9538" x2="246.865" y2="144.874" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint104_linear_101_114" x1="178.706" y1="40.2176" x2="246.455" y2="145.14" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint105_linear_101_114" x1="178.253" y1="40.5103" x2="246.002" y2="145.432" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint106_linear_101_114" x1="177.759" y1="40.8297" x2="245.508" y2="145.749" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint107_linear_101_114" x1="160.739" y1="51.8197" x2="228.487" y2="156.74" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint108_linear_101_114" x1="160.183" y1="52.178" x2="227.933" y2="157.098" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint109_linear_101_114" x1="159.601" y1="52.5538" x2="227.35" y2="157.476" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint110_linear_101_114" x1="158.999" y1="52.9427" x2="226.748" y2="157.864" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint111_linear_101_114" x1="158.384" y1="53.3396" x2="226.134" y2="158.261" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint112_linear_101_114" x1="157.757" y1="53.7448" x2="225.506" y2="158.665" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint113_linear_101_114" x1="157.095" y1="54.1727" x2="224.844" y2="159.093" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint114_linear_101_114" x1="156.474" y1="54.5737" x2="224.223" y2="159.494" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint115_linear_101_114" x1="155.864" y1="54.9676" x2="223.613" y2="159.888" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint116_linear_101_114" x1="155.269" y1="55.3511" x2="223.018" y2="160.273" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint117_linear_101_114" x1="154.698" y1="55.7198" x2="222.447" y2="160.641" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint118_linear_101_114" x1="154.156" y1="56.0719" x2="221.904" y2="160.99" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint119_linear_101_114" x1="153.644" y1="56.4" x2="221.393" y2="161.323" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint120_linear_101_114" x1="153.173" y1="56.705" x2="220.922" y2="161.626" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint121_linear_101_114" x1="152.746" y1="56.981" x2="220.496" y2="161.9" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint122_linear_101_114" x1="152.363" y1="57.2282" x2="220.111" y2="162.149" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint123_linear_101_114" x1="152.063" y1="57.4212" x2="219.813" y2="162.343" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint124_linear_101_114" x1="151.78" y1="57.6048" x2="219.528" y2="162.525" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint125_linear_101_114" x1="151.553" y1="57.751" x2="219.301" y2="162.672" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint126_linear_101_114" x1="151.386" y1="57.8594" x2="219.134" y2="162.779" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint127_linear_101_114" x1="151.28" y1="57.928" x2="219.028" y2="162.848" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint128_linear_101_114" x1="151.234" y1="57.9568" x2="218.983" y2="162.878" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint129_linear_101_114" x1="151.246" y1="57.9459" x2="218.999" y2="162.873" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint130_linear_101_114" x1="151.322" y1="57.8994" x2="219.072" y2="162.822" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint131_linear_101_114" x1="151.457" y1="57.813" x2="219.207" y2="162.734" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint132_linear_101_114" x1="151.651" y1="57.6888" x2="219.398" y2="162.608" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint133_linear_101_114" x1="151.902" y1="57.525" x2="219.652" y2="162.447" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint134_linear_101_114" x1="152.209" y1="57.327" x2="219.958" y2="162.248" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint135_linear_101_114" x1="152.569" y1="57.0942" x2="220.32" y2="162.016" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint136_linear_101_114" x1="152.979" y1="56.8313" x2="220.726" y2="161.75" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint137_linear_101_114" x1="153.432" y1="56.5368" x2="221.183" y2="161.458" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint138_linear_101_114" x1="153.927" y1="56.218" x2="221.676" y2="161.139" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint139_linear_101_114" x1="154.404" y1="55.9096" x2="222.153" y2="160.832" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint140_linear_101_114" x1="154.961" y1="55.5505" x2="222.711" y2="160.47" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint141_linear_101_114" x1="155.543" y1="55.1746" x2="223.291" y2="160.096" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint142_linear_101_114" x1="156.145" y1="54.7855" x2="223.894" y2="159.707" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint143_linear_101_114" x1="156.761" y1="54.3877" x2="224.51" y2="159.309" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint144_linear_101_114" x1="157.388" y1="53.9831" x2="225.137" y2="158.904" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint145_linear_101_114" x1="158.051" y1="53.5555" x2="225.8" y2="158.475" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint146_linear_101_114" x1="158.673" y1="53.1544" x2="226.421" y2="158.074" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint147_linear_101_114" x1="159.282" y1="52.7602" x2="227.03" y2="157.681" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint148_linear_101_114" x1="159.876" y1="52.3768" x2="227.625" y2="157.297" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint149_linear_101_114" x1="160.448" y1="52.0075" x2="228.196" y2="156.928" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint150_linear_101_114" x1="160.991" y1="51.6565" x2="228.739" y2="156.579" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint151_linear_101_114" x1="161.502" y1="51.327" x2="229.252" y2="156.247" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint152_linear_101_114" x1="161.973" y1="51.023" x2="229.721" y2="155.944" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint153_linear_101_114" x1="162.4" y1="50.7463" x2="230.15" y2="155.669" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint154_linear_101_114" x1="162.781" y1="50.5002" x2="230.53" y2="155.424" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint155_linear_101_114" x1="163.082" y1="50.3071" x2="230.831" y2="155.227" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint156_linear_101_114" x1="163.364" y1="50.1244" x2="231.113" y2="155.045" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint157_linear_101_114" x1="163.59" y1="49.9782" x2="231.338" y2="154.9" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint158_linear_101_114" x1="163.757" y1="49.8702" x2="231.506" y2="154.793" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint159_linear_101_114" x1="163.864" y1="49.8024" x2="231.612" y2="154.721" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint160_linear_101_114" x1="163.908" y1="49.7725" x2="231.658" y2="154.694" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint161_linear_101_114" x1="163.895" y1="49.7823" x2="231.643" y2="154.702" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint162_linear_101_114" x1="163.82" y1="49.8292" x2="231.57" y2="154.751" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint163_linear_101_114" x1="163.686" y1="49.9164" x2="231.436" y2="154.837" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint164_linear_101_114" x1="163.491" y1="50.0426" x2="231.239" y2="154.963" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint165_linear_101_114" x1="163.24" y1="50.205" x2="230.988" y2="155.125" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint166_linear_101_114" x1="162.932" y1="50.4032" x2="230.68" y2="155.325" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint167_linear_101_114" x1="162.574" y1="50.6357" x2="230.322" y2="155.554" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint168_linear_101_114" x1="162.165" y1="50.8995" x2="229.913" y2="155.82" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint169_linear_101_114" x1="161.711" y1="51.192" x2="229.461" y2="156.112" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint170_linear_101_114" x1="161.217" y1="51.5118" x2="228.965" y2="156.431" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint171_linear_101_114" x1="144.188" y1="62.5061" x2="211.938" y2="167.427" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint172_linear_101_114" x1="143.631" y1="62.865" x2="211.381" y2="167.787" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint173_linear_101_114" x1="143.05" y1="63.2424" x2="210.798" y2="168.162" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint174_linear_101_114" x1="142.447" y1="63.631" x2="210.196" y2="168.552" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint175_linear_101_114" x1="141.831" y1="64.0287" x2="209.579" y2="168.95" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint176_linear_101_114" x1="141.204" y1="64.4326" x2="208.953" y2="169.354" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint177_linear_101_114" x1="140.541" y1="64.8617" x2="208.29" y2="169.782" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint178_linear_101_114" x1="139.919" y1="65.2632" x2="207.667" y2="170.185" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint179_linear_101_114" x1="139.309" y1="65.6584" x2="207.057" y2="170.577" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint180_linear_101_114" x1="138.715" y1="66.0412" x2="206.464" y2="170.961" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint181_linear_101_114" x1="138.142" y1="66.4105" x2="205.891" y2="171.332" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint182_linear_101_114" x1="137.596" y1="66.7618" x2="205.345" y2="171.685" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint183_linear_101_114" x1="137.087" y1="67.0913" x2="204.838" y2="172.012" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint184_linear_101_114" x1="136.615" y1="67.3971" x2="204.364" y2="172.318" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint185_linear_101_114" x1="136.185" y1="67.6735" x2="203.934" y2="172.595" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint186_linear_101_114" x1="135.805" y1="67.9205" x2="203.554" y2="172.84" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint187_linear_101_114" x1="135.502" y1="68.1149" x2="203.25" y2="173.037" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint188_linear_101_114" x1="135.219" y1="68.2976" x2="202.968" y2="173.219" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint189_linear_101_114" x1="134.993" y1="68.4456" x2="202.742" y2="173.364" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint190_linear_101_114" x1="134.824" y1="68.5522" x2="202.574" y2="173.473" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint191_linear_101_114" x1="134.717" y1="68.623" x2="202.465" y2="173.543" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint192_linear_101_114" x1="134.672" y1="68.6523" x2="202.42" y2="173.572" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint193_linear_101_114" x1="134.683" y1="68.64" x2="202.436" y2="173.566" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint194_linear_101_114" x1="134.758" y1="68.5946" x2="202.507" y2="173.518" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint195_linear_101_114" x1="134.894" y1="68.5088" x2="202.642" y2="173.429" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint196_linear_101_114" x1="135.088" y1="68.3846" x2="202.835" y2="173.303" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint197_linear_101_114" x1="135.339" y1="68.2213" x2="203.087" y2="173.142" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint198_linear_101_114" x1="135.646" y1="68.0231" x2="203.395" y2="172.942" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint199_linear_101_114" x1="136.006" y1="67.7889" x2="203.756" y2="172.711" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint200_linear_101_114" x1="136.415" y1="67.5256" x2="204.164" y2="172.447" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint201_linear_101_114" x1="136.868" y1="67.2314" x2="204.619" y2="172.155" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint202_linear_101_114" x1="137.364" y1="66.9127" x2="205.113" y2="171.834" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint203_linear_101_114" x1="137.842" y1="66.6048" x2="205.591" y2="171.525" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint204_linear_101_114" x1="138.398" y1="66.2459" x2="206.146" y2="171.166" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint205_linear_101_114" x1="138.981" y1="65.8694" x2="206.73" y2="170.789" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint206_linear_101_114" x1="139.584" y1="65.48" x2="207.333" y2="170.4" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint207_linear_101_114" x1="140.2" y1="65.0819" x2="207.949" y2="170.003" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint208_linear_101_114" x1="140.827" y1="64.6766" x2="208.576" y2="169.598" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint209_linear_101_114" x1="141.491" y1="64.2483" x2="209.24" y2="169.169" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint210_linear_101_114" x1="142.113" y1="63.8474" x2="209.862" y2="168.767" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint211_linear_101_114" x1="142.724" y1="63.4526" x2="210.472" y2="168.372" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint212_linear_101_114" x1="143.318" y1="63.068" x2="211.067" y2="167.99" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint213_linear_101_114" x1="143.89" y1="62.6992" x2="211.639" y2="167.619" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint214_linear_101_114" x1="144.435" y1="62.3475" x2="212.184" y2="167.267" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint215_linear_101_114" x1="144.944" y1="62.0179" x2="212.693" y2="166.94" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint216_linear_101_114" x1="145.417" y1="61.7134" x2="213.165" y2="166.634" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint217_linear_101_114" x1="145.845" y1="61.4362" x2="213.594" y2="166.358" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint218_linear_101_114" x1="146.227" y1="61.1906" x2="213.974" y2="166.112" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint219_linear_101_114" x1="146.528" y1="60.9965" x2="214.276" y2="165.916" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint220_linear_101_114" x1="146.81" y1="60.8124" x2="214.56" y2="165.735" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint221_linear_101_114" x1="147.038" y1="60.6666" x2="214.787" y2="165.587" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint222_linear_101_114" x1="147.204" y1="60.5579" x2="214.954" y2="165.481" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint223_linear_101_114" x1="147.312" y1="60.4893" x2="215.061" y2="165.41" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint224_linear_101_114" x1="147.358" y1="60.4622" x2="215.105" y2="165.379" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint225_linear_101_114" x1="147.343" y1="60.469" x2="215.092" y2="165.391" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint226_linear_101_114" x1="147.269" y1="60.5168" x2="215.018" y2="165.439" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint227_linear_101_114" x1="147.136" y1="60.6049" x2="214.883" y2="165.524" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint228_linear_101_114" x1="146.942" y1="60.7309" x2="214.689" y2="165.648" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint229_linear_101_114" x1="146.69" y1="60.8933" x2="214.437" y2="165.811" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint230_linear_101_114" x1="146.383" y1="61.0913" x2="214.131" y2="166.01" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint231_linear_101_114" x1="146.022" y1="61.3211" x2="213.772" y2="166.244" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint232_linear_101_114" x1="145.614" y1="61.5871" x2="213.361" y2="166.507" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint233_linear_101_114" x1="145.16" y1="61.8795" x2="212.909" y2="166.799" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint234_linear_101_114" x1="144.666" y1="62.1995" x2="212.413" y2="167.119" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint235_linear_101_114" x1="188.402" y1="33.9574" x2="256.151" y2="138.878" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint236_linear_101_114" x1="187.846" y1="34.3154" x2="255.596" y2="139.237" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint237_linear_101_114" x1="187.266" y1="34.6905" x2="255.015" y2="139.612" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint238_linear_101_114" x1="186.665" y1="35.0785" x2="254.414" y2="140" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint239_linear_101_114" x1="186.051" y1="35.4752" x2="253.799" y2="140.396" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint240_linear_101_114" x1="185.425" y1="35.8795" x2="253.174" y2="140.8" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint241_linear_101_114" x1="184.765" y1="36.3063" x2="252.514" y2="141.226" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint242_linear_101_114" x1="184.145" y1="36.7061" x2="251.893" y2="141.627" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint243_linear_101_114" x1="183.536" y1="37.0995" x2="251.284" y2="142.02" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint244_linear_101_114" x1="182.945" y1="37.4818" x2="250.694" y2="142.401" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint245_linear_101_114" x1="182.374" y1="37.8493" x2="250.123" y2="142.77" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint246_linear_101_114" x1="181.831" y1="38.1986" x2="249.58" y2="143.122" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint247_linear_101_114" x1="181.324" y1="38.5274" x2="249.074" y2="143.447" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint248_linear_101_114" x1="180.854" y1="38.8318" x2="248.602" y2="143.751" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint249_linear_101_114" x1="180.426" y1="39.1067" x2="248.175" y2="144.029" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint250_linear_101_114" x1="180.048" y1="39.3528" x2="247.797" y2="144.271" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint251_linear_101_114" x1="179.748" y1="39.5459" x2="247.496" y2="144.466" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint252_linear_101_114" x1="179.465" y1="39.727" x2="247.215" y2="144.649" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint253_linear_101_114" x1="179.24" y1="39.8732" x2="246.988" y2="144.794" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint254_linear_101_114" x1="179.075" y1="39.9819" x2="246.822" y2="144.899" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint255_linear_101_114" x1="178.967" y1="40.0487" x2="246.716" y2="144.971" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint256_linear_101_114" x1="178.923" y1="40.0773" x2="246.673" y2="144.999" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint257_linear_101_114" x1="178.938" y1="40.0695" x2="246.685" y2="144.988" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint258_linear_101_114" x1="179.012" y1="40.0205" x2="246.76" y2="144.942" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint259_linear_101_114" x1="179.148" y1="39.9338" x2="246.896" y2="144.852" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint260_linear_101_114" x1="179.34" y1="39.8071" x2="247.09" y2="144.731" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint261_linear_101_114" x1="179.593" y1="39.6457" x2="247.341" y2="144.566" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint262_linear_101_114" x1="179.899" y1="39.4467" x2="247.648" y2="144.369" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint263_linear_101_114" x1="180.26" y1="39.2151" x2="248.009" y2="144.135" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint264_linear_101_114" x1="180.668" y1="38.9513" x2="248.417" y2="143.872" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint265_linear_101_114" x1="181.122" y1="38.6586" x2="248.871" y2="143.578" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint266_linear_101_114" x1="181.615" y1="38.3396" x2="249.364" y2="143.26" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint267_linear_101_114" x1="182.092" y1="38.032" x2="249.841" y2="142.952" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint268_linear_101_114" x1="182.648" y1="37.6734" x2="250.396" y2="142.592" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint269_linear_101_114" x1="183.228" y1="37.2985" x2="250.976" y2="142.219" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint270_linear_101_114" x1="183.829" y1="36.9101" x2="251.578" y2="141.83" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint271_linear_101_114" x1="184.444" y1="36.5124" x2="252.194" y2="141.434" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint272_linear_101_114" x1="185.07" y1="36.1087" x2="252.82" y2="141.028" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint273_linear_101_114" x1="185.731" y1="35.6819" x2="253.48" y2="140.603" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint274_linear_101_114" x1="186.351" y1="35.2824" x2="254.099" y2="140.202" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint275_linear_101_114" x1="186.96" y1="34.8894" x2="254.707" y2="139.808" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint276_linear_101_114" x1="187.551" y1="34.5061" x2="255.301" y2="139.428" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint277_linear_101_114" x1="188.122" y1="34.1385" x2="255.87" y2="139.059" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint278_linear_101_114" x1="188.663" y1="33.7881" x2="256.414" y2="138.709" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint279_linear_101_114" x1="189.171" y1="33.4604" x2="256.919" y2="138.381" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint280_linear_101_114" x1="189.642" y1="33.1571" x2="257.39" y2="138.077" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint281_linear_101_114" x1="190.068" y1="32.8817" x2="257.816" y2="137.802" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint282_linear_101_114" x1="190.447" y1="32.6364" x2="258.195" y2="137.558" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint283_linear_101_114" x1="190.747" y1="32.4431" x2="258.496" y2="137.364" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint284_linear_101_114" x1="191.028" y1="32.2615" x2="258.777" y2="137.183" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint285_linear_101_114" x1="191.253" y1="32.116" x2="259.002" y2="137.038" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint286_linear_101_114" x1="191.419" y1="32.0084" x2="259.168" y2="136.931" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint287_linear_101_114" x1="191.524" y1="31.9395" x2="259.275" y2="136.863" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint288_linear_101_114" x1="191.569" y1="31.9135" x2="259.316" y2="136.831" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint289_linear_101_114" x1="191.554" y1="31.9204" x2="259.304" y2="136.844" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint290_linear_101_114" x1="191.48" y1="31.9702" x2="259.228" y2="136.89" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint291_linear_101_114" x1="191.344" y1="32.056" x2="259.094" y2="136.979" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint292_linear_101_114" x1="191.151" y1="32.1832" x2="258.899" y2="137.102" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint293_linear_101_114" x1="190.899" y1="32.3461" x2="258.646" y2="137.264" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint294_linear_101_114" x1="190.592" y1="32.5429" x2="258.341" y2="137.464" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint295_linear_101_114" x1="190.232" y1="32.7746" x2="257.982" y2="137.697" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint296_linear_101_114" x1="189.825" y1="33.0402" x2="257.571" y2="137.959" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint297_linear_101_114" x1="189.371" y1="33.3309" x2="257.121" y2="138.252" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint298_linear_101_114" x1="188.878" y1="33.6499" x2="256.626" y2="138.571" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint299_linear_101_114" x1="171.883" y1="44.6238" x2="239.632" y2="149.544" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint300_linear_101_114" x1="171.327" y1="44.9833" x2="239.075" y2="149.904" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint301_linear_101_114" x1="170.746" y1="45.3579" x2="238.495" y2="150.278" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint302_linear_101_114" x1="170.145" y1="45.7455" x2="237.895" y2="150.666" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint303_linear_101_114" x1="169.531" y1="46.1446" x2="237.279" y2="151.062" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint304_linear_101_114" x1="168.904" y1="46.5472" x2="236.652" y2="151.468" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint305_linear_101_114" x1="168.243" y1="46.9746" x2="235.992" y2="151.895" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint306_linear_101_114" x1="167.623" y1="47.3747" x2="235.372" y2="152.295" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint307_linear_101_114" x1="167.014" y1="47.7685" x2="234.762" y2="152.689" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint308_linear_101_114" x1="166.42" y1="48.1515" x2="234.168" y2="153.072" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint309_linear_101_114" x1="165.85" y1="48.5199" x2="233.599" y2="153.439" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint310_linear_101_114" x1="165.308" y1="48.8701" x2="233.057" y2="153.789" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint311_linear_101_114" x1="164.797" y1="49.1987" x2="232.546" y2="154.121" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint312_linear_101_114" x1="164.327" y1="49.5033" x2="232.075" y2="154.423" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint313_linear_101_114" x1="163.9" y1="49.7791" x2="231.648" y2="154.7" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint314_linear_101_114" x1="163.519" y1="50.0252" x2="231.266" y2="154.946" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint315_linear_101_114" x1="163.22" y1="50.2184" x2="230.968" y2="155.139" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint316_linear_101_114" x1="162.937" y1="50.4001" x2="230.686" y2="155.322" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint317_linear_101_114" x1="162.711" y1="50.546" x2="230.461" y2="155.466" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint318_linear_101_114" x1="162.543" y1="50.6531" x2="230.293" y2="155.576" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint319_linear_101_114" x1="162.438" y1="50.7232" x2="230.187" y2="155.643" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint320_linear_101_114" x1="162.394" y1="50.7529" x2="230.141" y2="155.671" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint321_linear_101_114" x1="162.408" y1="50.7447" x2="230.154" y2="155.662" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint322_linear_101_114" x1="162.479" y1="50.6928" x2="230.23" y2="155.618" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint323_linear_101_114" x1="162.616" y1="50.6087" x2="230.364" y2="155.528" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint324_linear_101_114" x1="162.81" y1="50.4831" x2="230.558" y2="155.403" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint325_linear_101_114" x1="163.061" y1="50.3194" x2="230.811" y2="155.241" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint326_linear_101_114" x1="163.368" y1="50.1218" x2="231.117" y2="155.042" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint327_linear_101_114" x1="163.727" y1="49.8884" x2="231.477" y2="154.812" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint328_linear_101_114" x1="164.136" y1="49.6268" x2="231.884" y2="154.547" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint329_linear_101_114" x1="164.589" y1="49.3329" x2="232.338" y2="154.254" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint330_linear_101_114" x1="165.083" y1="49.014" x2="232.832" y2="153.936" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint331_linear_101_114" x1="165.561" y1="48.7062" x2="233.31" y2="153.626" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint332_linear_101_114" x1="166.116" y1="48.3466" x2="233.866" y2="153.269" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint333_linear_101_114" x1="166.698" y1="47.972" x2="234.447" y2="152.892" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint334_linear_101_114" x1="167.299" y1="47.5833" x2="235.048" y2="152.505" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint335_linear_101_114" x1="167.915" y1="47.1861" x2="235.663" y2="152.107" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint336_linear_101_114" x1="168.541" y1="46.7819" x2="236.29" y2="151.702" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint337_linear_101_114" x1="169.203" y1="46.355" x2="236.952" y2="151.275" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint338_linear_101_114" x1="169.822" y1="45.9541" x2="237.57" y2="150.876" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint339_linear_101_114" x1="170.432" y1="45.5609" x2="238.181" y2="150.481" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint340_linear_101_114" x1="171.025" y1="45.1774" x2="238.775" y2="150.098" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint341_linear_101_114" x1="171.596" y1="44.8092" x2="239.344" y2="149.73" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint342_linear_101_114" x1="172.138" y1="44.4591" x2="239.885" y2="149.381" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint343_linear_101_114" x1="172.648" y1="44.1303" x2="240.398" y2="149.049" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint344_linear_101_114" x1="173.117" y1="43.8259" x2="240.867" y2="148.748" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint345_linear_101_114" x1="173.544" y1="43.55" x2="241.294" y2="148.473" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint346_linear_101_114" x1="173.926" y1="43.3053" x2="241.675" y2="148.224" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint347_linear_101_114" x1="174.225" y1="43.1109" x2="241.974" y2="148.033" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint348_linear_101_114" x1="174.507" y1="42.9295" x2="242.256" y2="147.851" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint349_linear_101_114" x1="174.731" y1="42.7826" x2="242.481" y2="147.707" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint350_linear_101_114" x1="174.899" y1="42.6754" x2="242.649" y2="147.597" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint351_linear_101_114" x1="175.004" y1="42.6073" x2="242.753" y2="147.53" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint352_linear_101_114" x1="175.05" y1="42.5804" x2="242.797" y2="147.499" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint353_linear_101_114" x1="175.036" y1="42.5892" x2="242.784" y2="147.508" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint354_linear_101_114" x1="174.959" y1="42.6348" x2="242.71" y2="147.559" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint355_linear_101_114" x1="174.827" y1="42.7244" x2="242.575" y2="147.643" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint356_linear_101_114" x1="174.631" y1="42.8481" x2="242.38" y2="147.771" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint357_linear_101_114" x1="174.38" y1="43.0118" x2="242.128" y2="147.933" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint358_linear_101_114" x1="174.073" y1="43.2089" x2="241.822" y2="148.131" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint359_linear_101_114" x1="173.715" y1="43.4426" x2="241.462" y2="148.361" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint360_linear_101_114" x1="173.305" y1="43.7044" x2="241.055" y2="148.626" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint361_linear_101_114" x1="172.853" y1="43.9978" x2="240.602" y2="148.918" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint362_linear_101_114" x1="172.359" y1="44.3154" x2="240.109" y2="149.237" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint363_linear_101_114" x1="155.355" y1="55.2967" x2="223.103" y2="160.217" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint364_linear_101_114" x1="154.8" y1="55.6564" x2="222.548" y2="160.575" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint365_linear_101_114" x1="154.216" y1="56.0299" x2="221.965" y2="160.952" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint366_linear_101_114" x1="153.616" y1="56.4204" x2="221.364" y2="161.34" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint367_linear_101_114" x1="153.001" y1="56.8175" x2="220.749" y2="161.738" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint368_linear_101_114" x1="152.374" y1="57.2202" x2="220.123" y2="162.142" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint369_linear_101_114" x1="151.712" y1="57.6482" x2="219.462" y2="162.569" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint370_linear_101_114" x1="151.093" y1="58.05" x2="218.841" y2="162.969" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint371_linear_101_114" x1="150.48" y1="58.4422" x2="218.229" y2="163.365" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint372_linear_101_114" x1="149.887" y1="58.826" x2="217.636" y2="163.747" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint373_linear_101_114" x1="149.316" y1="59.1942" x2="217.066" y2="164.116" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint374_linear_101_114" x1="148.772" y1="59.5457" x2="216.521" y2="164.468" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint375_linear_101_114" x1="148.266" y1="59.8757" x2="216.015" y2="164.794" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint376_linear_101_114" x1="147.792" y1="60.1795" x2="215.541" y2="165.101" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint377_linear_101_114" x1="147.363" y1="60.4547" x2="215.112" y2="165.377" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint378_linear_101_114" x1="146.981" y1="60.7008" x2="214.73" y2="165.624" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint379_linear_101_114" x1="146.683" y1="60.8961" x2="214.431" y2="165.817" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint380_linear_101_114" x1="146.398" y1="61.0773" x2="214.148" y2="166" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint381_linear_101_114" x1="146.173" y1="61.226" x2="213.921" y2="166.146" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint382_linear_101_114" x1="146.005" y1="61.3335" x2="213.753" y2="166.254" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint383_linear_101_114" x1="145.9" y1="61.403" x2="213.648" y2="166.322" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint384_linear_101_114" x1="145.853" y1="61.4292" x2="213.603" y2="166.352" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint385_linear_101_114" x1="145.869" y1="61.4254" x2="213.615" y2="166.343" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint386_linear_101_114" x1="145.942" y1="61.3755" x2="213.69" y2="166.295" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint387_linear_101_114" x1="146.077" y1="61.2883" x2="213.826" y2="166.207" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint388_linear_101_114" x1="146.269" y1="61.1627" x2="214.017" y2="166.084" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint389_linear_101_114" x1="146.522" y1="61.0011" x2="214.27" y2="165.92" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint390_linear_101_114" x1="146.827" y1="60.8018" x2="214.576" y2="165.724" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint391_linear_101_114" x1="147.188" y1="60.5702" x2="214.937" y2="165.49" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint392_linear_101_114" x1="147.597" y1="60.3079" x2="215.345" y2="165.226" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint393_linear_101_114" x1="148.05" y1="60.0132" x2="215.799" y2="164.933" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint394_linear_101_114" x1="148.545" y1="59.6951" x2="216.293" y2="164.614" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint395_linear_101_114" x1="149.021" y1="59.3861" x2="216.77" y2="164.307" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint396_linear_101_114" x1="149.578" y1="59.0262" x2="217.328" y2="163.947" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint397_linear_101_114" x1="150.159" y1="58.6518" x2="217.907" y2="163.572" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint398_linear_101_114" x1="150.761" y1="58.2625" x2="218.509" y2="163.184" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint399_linear_101_114" x1="151.377" y1="57.8653" x2="219.125" y2="162.786" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint400_linear_101_114" x1="152.003" y1="57.4603" x2="219.752" y2="162.381" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint401_linear_101_114" x1="152.665" y1="57.0314" x2="220.415" y2="161.954" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint402_linear_101_114" x1="153.287" y1="56.6322" x2="221.036" y2="161.552" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint403_linear_101_114" x1="153.896" y1="56.2383" x2="221.644" y2="161.16" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint404_linear_101_114" x1="154.49" y1="55.8549" x2="222.238" y2="160.775" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint405_linear_101_114" x1="155.061" y1="55.4858" x2="222.81" y2="160.406" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint406_linear_101_114" x1="155.606" y1="55.1353" x2="223.354" y2="160.054" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint407_linear_101_114" x1="156.113" y1="54.8053" x2="223.862" y2="159.728" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint408_linear_101_114" x1="156.586" y1="54.5022" x2="224.334" y2="159.422" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint409_linear_101_114" x1="157.015" y1="54.225" x2="224.765" y2="159.143" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint410_linear_101_114" x1="157.392" y1="53.9782" x2="225.142" y2="158.902" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint411_linear_101_114" x1="157.694" y1="53.7846" x2="225.444" y2="158.707" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint412_linear_101_114" x1="157.977" y1="53.6035" x2="225.725" y2="158.524" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint413_linear_101_114" x1="158.203" y1="53.4577" x2="225.951" y2="158.378" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint414_linear_101_114" x1="158.37" y1="53.3499" x2="226.118" y2="158.271" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint415_linear_101_114" x1="158.477" y1="53.2815" x2="226.225" y2="158.201" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint416_linear_101_114" x1="158.522" y1="53.2525" x2="226.27" y2="158.172" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint417_linear_101_114" x1="158.506" y1="53.2585" x2="226.257" y2="158.182" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint418_linear_101_114" x1="158.433" y1="53.3068" x2="226.184" y2="158.229" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint419_linear_101_114" x1="158.297" y1="53.3939" x2="226.047" y2="158.317" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint420_linear_101_114" x1="158.105" y1="53.5215" x2="225.852" y2="158.442" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint421_linear_101_114" x1="157.853" y1="53.6821" x2="225.602" y2="158.604" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint422_linear_101_114" x1="157.546" y1="53.8814" x2="225.294" y2="158.803" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint423_linear_101_114" x1="157.188" y1="54.1155" x2="224.934" y2="159.034" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint424_linear_101_114" x1="156.779" y1="54.376" x2="224.529" y2="159.297" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint425_linear_101_114" x1="156.326" y1="54.6684" x2="224.076" y2="159.589" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint426_linear_101_114" x1="155.832" y1="54.9886" x2="223.581" y2="159.908" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint427_linear_101_114" x1="69.2818" y1="204.367" x2="68.5582" y2="183.453" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint428_linear_101_114" x1="63.938" y1="205.638" x2="63.274" y2="186.447" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint429_linear_101_114" x1="54.3166" y1="200.886" x2="53.9912" y2="191.483" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint430_linear_101_114" x1="53.3751" y1="208.356" x2="52.8222" y2="192.375" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint431_linear_101_114" x1="42.4038" y1="201.704" x2="42.2776" y2="198.055" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint432_linear_101_114" x1="41.0264" y1="208.559" x2="40.701" y2="199.156" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint433_linear_101_114" x1="34.6442" y1="208.369" x2="34.4462" y2="202.645" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint434_linear_101_114" x1="80.8077" y1="194.332" x2="80.1952" y2="176.628" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint435_linear_101_114" x1="75.4639" y1="195.603" x2="74.911" y2="179.622" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint436_linear_101_114" x1="69.4833" y1="195.978" x2="69.0315" y2="182.92" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint437_linear_101_114" x1="0.413424" y1="240.563" x2="58.7124" y2="240.563" gradientUnits="userSpaceOnUse">
            <stop stop-color="#162C51"/>
            <stop offset="1" stop-color="#282D70"/>
            </linearGradient>
            <linearGradient id="paint438_linear_101_114" x1="-83.2485" y1="237.75" x2="49.8511" y2="237.75" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="0.5016" stop-color="#44AEE3"/>
            <stop offset="0.6839" stop-color="#8BC5EB"/>
            <stop offset="1" stop-color="white"/>
            </linearGradient>
            <linearGradient id="paint439_linear_101_114" x1="239.199" y1="326.969" x2="258.629" y2="326.969" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#42AAE0"/>
            </linearGradient>
            <linearGradient id="paint440_linear_101_114" x1="227.036" y1="333.802" x2="259.657" y2="333.802" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5957A6"/>
            <stop offset="1" stop-color="#42AAE0"/>
            </linearGradient>
            <linearGradient id="paint441_linear_101_114" x1="242.29" y1="334.163" x2="254.912" y2="352.522" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#41AAE0"/>
            </linearGradient>
            <linearGradient id="paint442_linear_101_114" x1="249.526" y1="322.763" x2="252.332" y2="322.763" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#40A1DA"/>
            </linearGradient>
            <image id="image0_101_114" width="543" height="668"/>
            </defs>
            </svg>`
        }
    ];
    
    const [selectedObj, setSelectedObj] = useState<Service>(data[0]);
    const svg = <svg xmlns="http://www.w3.org/2000/svg" width="200" height="194" viewBox="0 0 107 94" fill="none">
    <g clip-path="url(#clip0_51_43)">
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
                <div dangerouslySetInnerHTML={{__html :selectedObj.svg}} className="flex justify-center items-center">
                        
                  {/* <Image alt={selectedObj.name} width={450} height={450} src={selectedObj.image} /> */}
                </div>
                
                
            </div>
        </div>
        

    </div> );
}

export default WhatWeDo;