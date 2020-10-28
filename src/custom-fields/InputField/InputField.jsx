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
  const { field, form, type, label, placeholder, disabled } = props;

  const { errors, touched } = form;
  const { name, value, onChange, onBlur } = field;

  const showError = errors[name] && touched[name];

  return (
    <React.Fragment>
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}

        <Input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          // {...field}

          type={type}
          disabled={disabled}
          placeholder={placeholder}
          invalid={showError}
        />

        <ErrorMessage name={name} component={FormFeedback} />
      </FormGroup>
    </React.Fragment>
  );
}

export default InputField;
