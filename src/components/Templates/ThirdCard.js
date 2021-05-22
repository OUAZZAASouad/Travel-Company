import Buttom from './Buttom'
const ThirdCard = ({image, city, content}) => {
    return (
        <div style = {{backgroundColor : 'white', margin : '10px', minHeight: '40vh', borderRadius : '10px', border : '1px solid #edeff2' }}>
            <img src = {image} width = '300px' height = '300px' style = {{borderRadius : '10px 10px 0px 0px'}}/>
            <div style = {{display : 'flex', padding : '10px', justifyContent : 'space-between'}}>
                <p style = {{color :'#bab3ab'}}>{city}</p>
                <Buttom content = {content}/>
            </div>
        </div>
    )

}

export default ThirdCard;