const Select = ({options}) => {
    const selectStyle = {
        background : 'transparent',
        border : '0',
        textDecoration : 'underline',
        cursor : 'pointer',
        color : 'white',
        marginTop : '10px'
    }
    return(
        <select style = {selectStyle}>
            {options.map(item => <option>{item}</option>)}
        </select>
    )
}

export default Select;