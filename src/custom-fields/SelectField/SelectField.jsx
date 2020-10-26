import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  options: [],
};

function SelectField(props) {
  return <div>select field</div>;
}

export default SelectField;
