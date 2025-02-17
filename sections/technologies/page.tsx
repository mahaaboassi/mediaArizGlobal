import Image from "next/image";
import Style from "./page.module.css"

function Technologies() {
    const technologies = [
        {
          name: "Social Media Marketing",
          icon: "", // Add the icon here
        },
        {
          name: "Next.js",
          icon: "", // Add the icon here
        },
        {
          name: "Node.js",
          icon: "", // Add the icon here
        },
        {
          name: "Figma",
          icon: "", // Add the icon here
        },
        {
          name: "Illustrator",
          icon: "", // Add the icon here
        },
        {
          name: "Tailwind CSS",
          icon: "", // Add the icon here
        },
        {
          name: "React.js",
          icon: "", // Add the icon here
        },
        {
          name: "Photoshop",
          icon: "", // Add the icon here
        },
      ];
    return ( <div>
        <div className={`${Style.container} grid grid-cols-1 md:flex-row  md:grid-cols-2 py-12 px-5 sm:px-10 md:px-20`}>
        
                <div className="gap-5 flex flex-col justify-center">
                    <h2>Elevate Your Business with Expert Solutions</h2>
                    <p >At <span>Ariz Global</span>, we focus on turning your vision into reality with our tailored web development, digital marketing, and design solutions. Our team's deep expertise and commitment to quality have helped clients across various industries achieve their goals.</p>
                    <p >Let us help you create a lasting digital presence with innovative strategies and cutting-edge technologies.</p>
                    <div className={`${Style.hover} py-3 px-5 flex items-center cursor-pointer `}>
                        <div>Launch Your Project Today</div>
                    </div>
                </div>
                
                <div className="flex justify-center items-center">
                   <Image width={600} height={600} src="/Globe map HD.gif" alt="brain" />
                </div>
                
            </div>
       
    </div> );
}

export default Technologies;