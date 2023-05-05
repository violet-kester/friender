import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import userContext from "./userContext";
import FrienderApi from "./Api";
import "./Profile.css";

function Profile({ getImagesById, user }) {
  const [images, setImages] = useState([]);

  // const { current_user } = useContext(userContext);

  // const userId = user.data.id;
  // console.log("userId in profile", userId);

  useEffect(function getImagesOnMount() {
    async function getImages(id) {
      const imageUrls = await getImagesById(id);
      // const imageUrls = await FrienderApi.getImagesById(id);
      console.log("PROFILE.js urls from api", imageUrls);
      setImages(imageUrls);
      return imageUrls;
    }
    if (user) {
      getImages(user.id);
    }
  }, []);

  if (user === null) return <Navigate to="/" />;
  // if (images.length === 0) return <p>Loading...</p>;

  return (
    <div className="Profile">
      {images.length >= 1 &&
        images.map((image, idx) =>
          <img src={image} alt="pic" key={idx} />
        )
      }
      <div className="Profile-details">
        <h1 className="Profile-username">{user.username}</h1>
        <p><b>Hobbies:</b> {user.hobbies}</p>
        <p><b>Interests:</b> {user.interests}</p>
        <p><b>Location:</b> {user.location}</p>
      </div>
    </div>
  );
}

export default Profile;