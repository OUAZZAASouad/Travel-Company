const Button = ({content}) => {
    let buttonStyle = {
        backgroundColor : '#006dcb',
        color : 'white',
        border: 'none',
        padding : '0px 10px 0px 10px',
        // width : '100%',
        cursor: 'pointer',
        outline: 'inherit',
        borderRadius : '10px'
    }
    return(
        <button style = {buttonStyle}> {content} </button>
    )
}

export default Button;