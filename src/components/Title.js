import Logo from './Templates/Logo'
import TitleText from './Templates/TitleText'
const Title = () => {
    return(
        <div style = {{gridColumn : '2 / span 3', margin : 'auto', textAlign : 'center'}}>
            <Logo width= '150px' height='80px'/>
            <TitleText>
                Making the most of corporate travel agency services
            </TitleText>
        </div>
    )
}

export default Title;