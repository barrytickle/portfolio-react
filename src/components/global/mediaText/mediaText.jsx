import PropTypes from 'prop-types';
import './mediaText.scss';

function MediaText(props){
    return (
        <>
            <div class={`media-text ${props.imagePosition === 'right' ? 'right' :''}`}>
                <div class="media-block">
                    {props.media}
                </div>
                <div class="media-content">
                    {props.children}
                </div>
            </div>
        </>
    )
}

MediaText.defaultProps = {
    imagePosition:"left",
}

MediaText.propType = {
    imagePosition: PropTypes.string, 
    media: PropTypes.element.isRequired,
}


export default MediaText;