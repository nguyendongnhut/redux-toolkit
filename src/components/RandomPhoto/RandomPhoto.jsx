import PropTypes from "prop-types";
import React from "react";
import { Button } from "reactstrap";
import "./RandomPhoto.scss";

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
  name: "",
  imageUrl: "",
  onImageUrlChange: null,
  onRandomButtonBlur: null,
};

function RandomPhoto(props) {
  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button>Random a photo</Button>
      </div>

      <div className="random-photo__photo"></div>
    </div>
  );
}

export default RandomPhoto;
