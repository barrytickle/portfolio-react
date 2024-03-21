import PropTypes from 'prop-types';

function ThinAndBoldTitle(props){
console.log(props);
    const CustomTag = `h${props.level ?? '2'}`;

    return (
        <CustomTag className={`thin-and-bold--header ${props.centered ? 'header--centered' :''}`}>
            <span>{props.thin}</span>
            <b>{props.bold}</b>
        </CustomTag>
    )
}

ThinAndBoldTitle.defaultProps = {
    centered: false,
}

ThinAndBoldTitle.propTypes = {
    level: PropTypes.number,
    thin: PropTypes.string,
    bold: PropTypes.string,
    centered: PropTypes.bool,

}

export default ThinAndBoldTitle;