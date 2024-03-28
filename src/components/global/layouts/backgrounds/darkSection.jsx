import PropTypes from "prop-types";
function DarkSection(props) {
  return <section class={`bg-dark section-centered ${props.additionalCSS}`}>{props.children}</section>;
}

DarkSection.propTypes = {
  additionalCSS: PropTypes.string,
};

export default DarkSection;
