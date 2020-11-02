import Banner from "components/Banner/Banner";
import PhotoForm from "features/Photo/components/PhotoForm/PhotoForm";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
// import { randomNumber } from "utils/common";
import "./AddEditPage.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();

  const isAddMode = !photoId;

  // lấy giá trị trong list photo theo id param
  const editedPhoto = useSelector((state) =>
    state.photos.find((x) => x.id === parseInt(photoId))
  );

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editedPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log("form values", values);

      setTimeout(() => {
        if (isAddMode) {
          const action = addPhoto(values);
          dispatch(action);
        } else {
          // do something here
          const action = updatePhoto(values);
          dispatch(action);
        }

        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
