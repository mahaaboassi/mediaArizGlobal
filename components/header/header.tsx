import Style from "./header.module.css"

interface HeaderProps {
    upTitle: string;
    title: string;
    dark : boolean
}

const Header :React.FC<HeaderProps> = ({upTitle, title,dark}) => {
    return ( <div className={Style.container}>
        <div className={Style.reflect}>{upTitle}</div>
        <h3>{upTitle}</h3>
        <h2>{title}</h2>
    </div> );
}

export default Header;