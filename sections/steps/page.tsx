import CardSteps from "@/components/card/page";
import Header from "@/components/header/header";

function Steps() {
    return ( <div className="md:pt-0 pt-5 pb-10 px-5 sm:px-10 md:px-20">
        <Header dark={true}  title="What happens when you run a campaign with ARIZ" upTitle="Portfolio" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 sm:gap-5 ">
        <CardSteps num={1} description={"Before we can plan any campaign, we understand and outline your overall marketing goals."}/>
        <CardSteps num={2} description={"We determine how much money you can spend early in the campaign planning process which helps achieving your goals and strategy."}/>
        <CardSteps num={3} description={"Focusing on your key product or service features, including pricing, service, distribution and placement."}/>
        <CardSteps num={4} description={"We track your campaign to make sure you have enough information to make the most conversions."}/>
        </div>
    </div>);
}

export default Steps;