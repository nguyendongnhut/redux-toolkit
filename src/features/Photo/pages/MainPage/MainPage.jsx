import Banner from "components/Banner/Banner";
import Images from "constants/images";
import PhotoList from "features/Photo/components/PhotoList/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const photos = useSelector((state) => state.photos);

  console.log("list photo: ", photos);

  const handlePhotoEditClick = (photo) => {
    console.log("edit click");
    console.log(photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  };

  const handlePhotoRemoveClick = (photo) => {
    console.log("remove click");
    console.log(photo);

    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };

  return (
    <div className="photo-main">
      <Banner
        title="🎉 Your awesome photos 🎉"
        backgroundUrl={Images.PINK_BG}
      />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
