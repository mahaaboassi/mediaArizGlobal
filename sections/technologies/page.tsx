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
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 130 130" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M46.9313 56.8068C43.8016 55.0997 40.1838 54.5864 36.1225 55.7747C23.5591 59.4511 18.4768 69.2892 17.7906 80.9516C16.7892 97.9808 25.3024 118.937 32.9118 129.353C33.2716 129.847 33.9635 129.953 34.4544 129.593C34.9481 129.233 35.0568 128.541 34.697 128.048C27.3107 117.939 19.0263 97.6071 19.997 81.08C20.6274 70.3716 25.2048 61.2726 36.7445 57.8974C40.1782 56.8905 43.2298 57.3339 45.8797 58.7705C44.9676 60.5166 44.1168 62.2656 43.3302 64.0145C41.16 68.8429 37.916 82.2487 39.1266 92.1064C39.9969 99.1774 43.1517 104.419 50.047 104.235C53.8796 104.131 56.6522 101.744 58.3481 97.9446C60.6829 92.7229 60.945 84.7229 59.3021 77.0577C57.9353 70.6756 55.2576 64.5362 51.4585 60.4163C50.6216 59.5125 49.7345 58.7007 48.7945 58.0034C61.9046 34.0259 86.2587 11.6049 111.268 2.14886C111.837 1.93129 112.127 1.29535 111.91 0.723528C111.695 0.151705 111.056 -0.135618 110.487 0.0791646C85.0704 9.69137 60.312 32.4388 46.9313 56.8068ZM47.7373 59.9867C46.8838 61.6296 46.0861 63.2753 45.3469 64.9211C43.2688 69.5487 40.1614 82.391 41.3218 91.8358C42.0331 97.6321 44.3372 102.176 49.9885 102.025C52.9564 101.945 55.0148 99.9836 56.3314 97.0436C57.7763 93.8079 58.3287 89.4258 58.0971 84.7536C57.7457 77.6602 55.5784 69.9002 51.8071 64.4079C50.6133 62.6673 49.2548 61.1582 47.7373 59.9867Z" fill="#a06f3a"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M91.5061 38.3322C93.732 25.3337 102.229 11.4928 111.386 1.90846C111.807 1.46774 111.791 0.767581 111.35 0.346385C110.909 -0.0748115 110.209 -0.0608319 109.788 0.37989C100.343 10.2627 91.6233 24.5582 89.3276 37.9584C89.2244 38.5581 89.6289 39.13 90.2314 39.2332C90.8311 39.3364 91.4029 38.9319 91.5061 38.3322Z" fill="#a06f3a"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M109.645 0.146652C100.111 5.59152 85.4865 6.34468 74.8254 3.58598C74.2341 3.43256 73.6288 3.78684 73.4782 4.37819C73.3247 4.96954 73.6789 5.572 74.2703 5.72541C85.439 8.61521 100.753 7.77006 110.741 2.06578C111.271 1.76453 111.456 1.08667 111.154 0.556683C110.85 0.0267009 110.175 -0.15739 109.645 0.146652Z" fill="#a06f3a"/>
                            </svg>
                        </div>
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