import PropTypes from 'prop-types'


const Button = ({color,text,onClick}) => {
    return (

        <div>
                <button onClick={onClick} style={{backgroundColor: color}} className="btn">{text}</button>
            
        </div>
    )
}

Button.defaultProps={
    color: '#152238',
    text:'Add',
}

Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onclick:PropTypes.func,
}

export default Button
