import PropTypes from "prop-types";
import React from "react";
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputField(props) {
  return <div>input field</div>;
}

export default InputField;
