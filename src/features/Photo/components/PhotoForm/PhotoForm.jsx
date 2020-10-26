import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField/RandomPhotoField";
import SelectField from "custom-fields/SelectField/SelectField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  // npm i --save react-select
  return (
    <Formik>
      {(formikProps) => {
        // do something here ...

        return (
          <Form>
            <FastField />

            <FastField />

            <FastField />

            <FormGroup>
              <Button>button</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
