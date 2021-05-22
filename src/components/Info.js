import TitleText from './Templates/TitleText'
import Section from './Templates/Section'
import Logo from './Templates/Logo'
import SecondCard from './Templates/SecondCard'

const Info = ({elements, items}) => {
   return (
    <div style = {{gridColumn : '1 / span 5', display : 'grid', gridTemplateColumns : '1fr 1fr 2fr 3fr 1fr', backgroundColor : '#dff8f6'}}>
      <div style = {{gridColumn : '2 / span 2'}}>
        <TitleText>ARE YOU READY TO TRAVEL?</TitleText>
        <Section>As travel begins to pick up, the opportunities for face-to-face interaction will lead
          to innovation and growth, and a welcome return to the connections we previously 
          took for granted.
        </Section>
        <Logo width = '100%' height = '50%'/>
      </div>
      
      <div style = {{display : 'flex'}}>
        <div style = {{display:'flex', flexDirection:'column'}}>{items.map(item => <SecondCard {...item}/>)}</div>
        <div style = {{display:'flex', flexDirection:'column'}}>{elements.map(item => <SecondCard {...item}/>)}</div>
      </div> 
    </div>
   )
}

export default Info