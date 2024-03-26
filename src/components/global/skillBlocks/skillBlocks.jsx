import PropTypes from 'prop-types';

import ThinAndBoldTitle from "../titles/thinAndBold";

import './skillBlocks.scss';
        
function SkillBlocks(props){
    console.log(props);
    return (
        <div className="skill-block-group container">
            <ThinAndBoldTitle thin="I offer diverse " bold="Services to you" centered={true}/>
            <div className="row center-xs">
                {props.children}
            </div>
        </div>
    )     
}

SkillBlocks.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.element)
}


export default SkillBlocks;