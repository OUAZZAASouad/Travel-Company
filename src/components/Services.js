import FirstCard from './Templates/FirstCard'
const Services = ({values}) =>{
    return(
        <div style = {{display : 'flex', gridColumn : '2 / span 3'}}>
          {values.map(item => <FirstCard {...item}/>)}
        </div>
    )
}

export default Services;