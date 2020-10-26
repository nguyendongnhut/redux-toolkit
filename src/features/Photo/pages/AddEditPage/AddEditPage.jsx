import Banner from "components/Banner/Banner";
import PhotoForm from "features/Photo/components/PhotoForm/PhotoForm";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { randomNumber } from "utils/common";
import "./AddEditPage.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
        // isAddMode={isAddMode}
        // initialValues={initialValues}
        // onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
