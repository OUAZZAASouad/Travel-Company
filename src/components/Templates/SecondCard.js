import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TitleText from './TitleText'
import Section from './Section'
const SecondCard = ({icon, title, text}) => {
    const cardStyle = {
        backgroundColor : 'white', 
        margin : '10px', 
        padding : '10px', 
        minHeight: '40vh', 
        maxWidth : '200px', 
        display : 'flex', 
        flexDirection : 'column', 
        alignItems : 'center', 
        justifyContent : 'center', 
        borderRadius : '10px'
    }
    return(
        <div style = {cardStyle}>
            <FontAwesomeIcon icon={icon} color = '#353e46' size = '2x'/>
            <TitleText>{title}</TitleText>
            <Section>{text}</Section>
        </div>
        
    )

}

export default SecondCard;