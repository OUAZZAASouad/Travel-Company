import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from './Select'
const FirstCard = ({icon, title, content, options, optionalOptions, Bcolor}) => {
    
    const cardStyle = {
        backgroundColor : Bcolor, 
        margin : '10px', 
        padding : '20px', 
        color : 'white', 
        borderRadius : '10px',
        display :'flex',
        flexDirection : 'column',
        justifyContent: 'space-between'
    }

    return(
        <div style = {cardStyle}>
            <FontAwesomeIcon icon={icon} size = 'lg'/>
            <h2 style = {{fontWeight : 'normal'}}>{title}</h2>
            <p>{content}</p>
            <div style = {{display : 'flex', flexDirection : 'column'}}>
                <Select options = {options}/>
                {optionalOptions.length != 0 && <Select options = {optionalOptions}/> } 
            </div>
        </div>
        
    )

}

FirstCard.defaultProps = {
    optionalOptions : []
}

export default FirstCard;