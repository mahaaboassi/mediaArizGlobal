import Style from "./page.module.css"

interface DataProps {
    num : number,
    description : String,
}
const CardSteps :React.FC<DataProps> =({num,description}) => {
    return ( <div className={`${Style.container}`}>
        <div className={`${Style.number} ${num == 2 ?Style.success :(num == 3? Style.golden: Style.error)}`}>{num}</div>
        <div className={`${Style.content}`}>
          {description}
        </div>
    </div> );
}

export default CardSteps;