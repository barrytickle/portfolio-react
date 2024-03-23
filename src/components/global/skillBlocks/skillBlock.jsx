import PropTypes from 'prop-types';
import './skillBlock.scss';

function SkillBlock(props){

    return (
        <div className="skill-block bg-opaque-green">
            <div className="skill-block--header">
                <img src={props.icon}/>
            </div>
            <div className="skill-block--footer">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    )

}


SkillBlock.defaultProps = {
    icon: 'https://placehold.co/100x100',
    title:"Hello World",
    content:'Lorem ipsum'
}

SkillBlock.propTypes = {
    icon: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default SkillBlock;