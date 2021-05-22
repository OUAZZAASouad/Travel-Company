import TitleText from './Templates/TitleText'
import Section from './Templates/Section'
import ThirdCard from './Templates/ThirdCard'
const Destination = ({cards}) => {
    return(
        <div style = {{gridColumn : '2 / span 3', display : 'grid', gridTemplateColumns : '1fr 3fr 1fr', textAlign : 'center'}}>
            <div style = {{gridColumn : '2 / span 1'}}>
                <TitleText>Find destination experts</TitleText>
                <Section> 
                From Australia to Zimbabwe and every country in between, our experienced agents help you create unique travel experiences you’ll love. 
                Click your dream destination below to find the perfect travel agent for your next vacation.
                </Section>
            </div>
        
            <div style = {{gridColumn : '1 / span 3', display : 'flex', flexWrap : 'wrap'}}>
            {cards.map(item => <ThirdCard {...item}/>)}
            </div>
        
        
        </div>
    )
}

export default Destination;