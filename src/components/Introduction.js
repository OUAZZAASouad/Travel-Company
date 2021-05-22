import Section from './Templates/Section'
import React from 'react'

const Introduction = () => {
    return(
    
        <div style = {{gridColumn : '2 / span 3', display : 'flex', justifyContent: 'space-around'}}> 
            <Section>
            CWT and our brands work with our TreadRight Foundation and our guests to make travel matter. We do this through CWT’s 
            new 5-year sustainability strategy which addresses our collective impact on Planet, People, and Wildlife, through 11 goals
            tied to the UN Global Goals.
            </Section>
            <Section>
            At CWT we provide travel experiences of a lifetime. With our family of 40 award-winning travel and hospitality brands that span 
            across 70 countries to choose from, the world is open to your sense of discovery and wonder. Our commitment is to consistently 
            deliver outstanding service, experiences and value to each and every one of our guests, every single time.
            </Section>
        </div>
    )
}

export default Introduction;