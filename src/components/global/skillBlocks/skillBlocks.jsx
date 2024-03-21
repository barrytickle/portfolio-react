import PropTypes from 'prop-types';

import ThinAndBoldTitle from "../titles/thinAndBold";
        
function SkillBlocks(props){
    return (
        <div className="skill-block-group container">
            <ThinAndBoldTitle thin="I do a lot of things," bold="Here are the services I can provide for you" centered={true}/>
              
            <div className="row">
                {props.elements && props.elements.length > 0 ? props.elements.map(El => {
                    <El className="skill--block col-xs-12 col-md-3"/>
                }) : ''}
            </div>
        </div>
    )   
}

SkillBlocks.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.element)
}


export default SkillBlocks;