import "./splitHeader.scss";
import Button from "../global/button/button";
import PropTypes from "prop-types";

function SplitHeader(props) {
  const { content } = props;
  return (
    <div className="header--split bg-light-grey">
      <div class="container">
        <div className="header--content">
          <h1>{content.title}</h1>
          <p>{content.subtitle}</p>
          <Button
            config={{ shape: "round", color: "green", arrow: "right" }}
            callToAction="Get Started"
            url={content.cta}
          />
        </div>
        <div
          className="header--image"
          style={{ backgroundImage: `url('${content.backgroundImage}')` }}></div>
      </div>
    </div>
  );
}

SplitHeader.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    backgroundImage: PropTypes.string,
    cta: PropTypes.string,
  }),
};

export default SplitHeader;
