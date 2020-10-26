import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./PhotoCard.scss";

PhotoCard.propTypes = {
  photo: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  photo: {},
  onEditClick: null,
  onRemoveClick: null,
};

function PhotoCard(props) {
  return (
    <div className="photo">
      <img />

      <div className="photo__overlay">
        <h3 className="photo__title"></h3>

        <div className="photo__actions">
          <div>
            <Button outline size="sm" color="light">
              Edit
            </Button>
          </div>

          <div>
            <Button outline size="sm" color="danger">
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
