import Image from "next/image";
import Style from "./page.module.css"
import FormUser from "@/components/form/page";
import Proof from "@/components/proof/page";

function HeroForm() {

    return ( <div className="py-4 md:py-16">
        <div className={`${Style.container} grid gap-2 md:gap-0 grid-cols-1 md:grid-cols-2 px-5 sm:px-10 md:px-20 mt-32`}>
        
                <div className="gap-3 md:gap-5 flex flex-col md:justify-center">
                    <h2>Top Rated and Award Winning</h2>
                    <h1>Digital Marketing Agency in Dubai,UAE</h1>
                    <h4 >That <span>Delivers Results
                    <svg className={`${Style.svg} nectar-scribble basic-underline`} role="presentation" viewBox="-400 -55 730 60" preserveAspectRatio="none"><path  d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15" stroke="#a06f3a" pathLength="1" strokeWidth="8" fill="none"></path></svg>
                        </span></h4>
                    <p >At <span>Ariz Global</span>, we focus on turning your vision into reality with our tailored web development, digital marketing, and design solutions. Our team's deep expertise and commitment to quality have helped clients across various industries achieve their goals.</p>
                    <div className="flex gap-2 items-center justify-center md:justify-start">
                      <Proof/>
                    </div>
                </div>
                
                <div className="flex items-center justify-center md:justify-end ">
                   <FormUser fromFixedComponent={false} isAppendLabel={true} />
                </div>
                
            </div>
       
    </div> );
}

export default HeroForm;