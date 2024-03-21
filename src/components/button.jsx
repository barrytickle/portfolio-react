
import './button.scss';
import PropTypes from 'prop-types';

function Button (props){
    /*
    * config { 
        type: {
            shape: round / square
            color: green / black
            arrow: right / blank
        }
    }
    *   
    */
    const buttonType = () => {
        const type = props.config;
        return `button--${type.shape} button--${type.color} ${type.arrow ?  'button--arrow_right' : ''}`
    };
    return (
        <a href={props.url} className={ `button ${buttonType()} ${props.config.className ?? ''}`}>{props.callToAction}</a>
    )
}


Button.propTypes = {
    config: PropTypes.shape({
        shape:PropTypes.string,
        color:PropTypes.string,
        arrow:PropTypes.string,
        className:PropTypes.string,
    }).isRequired,
    callToAction: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Button