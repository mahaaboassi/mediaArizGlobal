"use client"
import AccordionComponent from "@/components/accordion/page";
import Style from "./page.module.css"
import { useState } from "react";
function FAQs() {

    const data = [{
        question : "Can social media marketing really help my business?",
        answer : "Most definitely! It’s been proven again and again by business after business. In fact, not utilizing social media marketing can actually harm your business, since having an online presence on social media is simply expected of any reputable firm these days."
    },{
        question : "What are some common social media marketing mistakes business make?",
        answer : "One of the worst mistakes is inconsistency – only posting sporadically, and not responding when consumers reach out to engage. Another biggie is using social media as a place to announce your own content and nothing more, without ever engaging in discussions or adding comments to the post that make your audience want to click or like or share."
    },{
        question : "What is content marketing exactly?",
        answer : "Content marketing turns traditional marketing on its head. Instead of focusing on a company and its products or services, it focuses on the consumer’s needs first. The goal of content marketing is to provide valuable, genuinely helpful information to consumers for free, in order to create a relationship with them based on trust, which eventually leads them to make a purchase."
    },{
        question : "How do I get people to read my content?",
        answer : "Promoting your content through email and social media is vital, but even the best promotion efforts can be stalled by a lousy title. Make sure that the headline of your content is intriguing and informative. It should convey an idea of what the content contains, while also hooking people’s interest."
    }]
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    
    const handleToggle = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };
    return ( <div className={`${Style.container} md:pt-0 pt-5 pb-10 px-5 sm:px-10 md:px-20  sm:mt-24`}>
        
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 sm:gap-5 ">
            <div>
            {/* <h2>Question? We have answers</h2> */}
            <div className="flex flex-col gap-5 ">
                {data.map((e,idx)=>(<AccordionComponent 
                             key={`FAQs_${e.question}_${idx}`}
                             question={e.question} answer={e.answer}  
                             isOpen={openIndex === idx}
                             onClick={() => handleToggle(idx)}
                             />))}
            </div>
            </div>
            <div>
            
               <div className="pb-5">
                    <h2 >Let's get started!</h2>
                    <p>Ready to take your business to the next level? Get a free quote today and start your campaign with us!</p>
               </div>
                <form className="flex flex-col gap-3 sm:gap-5">
                    <div>
                        <input placeholder="Name" />
                    </div>
                    <div>
                        <input placeholder="Email" />
                    </div>
                    <div>
                        <textarea className="w-full" rows={4} placeholder="Message" />
                    </div>
                    <div>
                        <button className="btn-yellosh w-full">Get A Quote</button>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}

export default FAQs;