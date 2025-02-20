import Image from "next/image";

const Proof = ()=>{
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
    return data.map((award,index)=><div key={`Awards_${award.name}_${index}`}>
    <Image width={110} height={110} alt={`Awards_${award.name}`} src={award.icon} />
    </div>)
}

export default Proof;