import RandomPhoto from "components/RandomPhoto/RandomPhoto";
import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { FormFeedback, FormGroup, Label } from "reactstrap";

RandomPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
  label: "",
};

function RandomPhotoField(props) {
  return <div>random field</div>;
}

export default RandomPhotoField;
