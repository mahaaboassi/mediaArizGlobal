import Image from "next/image";
import Style from "./page.module.css"

function HeroForm() {
    // const data = [
    //     {
    //       name: "Tik Tok",
    //       icon: "/tikTok.png"
    //     },
    //     {
    //       name: "Instagram",
    //       icon: "/instagram.png"
    //     },
    //     {
    //       name: "Facebook",
    //       icon: "/facebook.png"
    //     },
    //   ];
    const data = [
      {
        name: "Review Google",
        icon: "/perfect-client-reviews-on-google.webp"
      },
      {
        name: "Google Partner",
        icon: "/googlepartner-bird3x.png"
      },
      {
        name: "Award",
        icon: "/Award.png"
      },
    ];
    return ( <div className="py-4 md:py-16">
        <div className={`${Style.container} grid gap-2 md:gap-0 grid-cols-1 md:grid-cols-2 px-5 sm:px-10 md:px-20 mt-32`}>
        
                <div className="gap-3 md:gap-5 flex flex-col md:justify-center">
                    <h2>Top Rated and Award Winning</h2>
                    <h1>Digital Marketing Agency in Dubai,UAE</h1>
                    <h4 >That <span>Delivers Results
                    <svg className={`${Style.svg} nectar-scribble basic-underline`} role="presentation" viewBox="-400 -55 730 60" preserveAspectRatio="none"><path  d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15" stroke="#a06f3a" pathLength="1" strokeWidth="8" fill="none"></path></svg>
                        </span></h4>
                    <p >At <span>Ariz Global</span>, we focus on turning your vision into reality with our tailored web development, digital marketing, and design solutions. Our team's deep expertise and commitment to quality have helped clients across various industries achieve their goals.</p>
                    <div className="flex gap-2 items-center justify-center md:justify-start">{data.map((award,index)=><div key={`Awards_${award.name}_${index}`}>
                      <Image width={110} height={110} alt={`Awards_${award.name}`} src={award.icon} />
                      </div>)}</div>
                </div>
                
                <div className="flex items-center justify-center md:justify-end ">
                   <form className="p-5">
                        <div className="pb-5">
                            <h3>Reserve your discount today!</h3>
                        </div>
                        <div>
                            <label >What's your Name</label>
                            <input id="name" placeholder="Name"  />
                        </div>
                        <div className="py-5">
                            <label >What's your Email?</label>
                            <input placeholder="Email"  />
                        </div>
                        <div className="pb-5">
                            <label >What's your Phone?</label>
                            <input placeholder="Phone"  />
                        </div>
                        <div className="">
                            <button className={`${Style.hover} w-full`}>Submit</button>
                        </div>
                   </form>
                </div>
                
            </div>
       
    </div> );
}

export default HeroForm;