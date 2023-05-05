import { useState, useEffect, useContext } from "react";
import userContext from "./userContext";
import FrienderApi from "./Api";

function Profile({ getImagesById }) {
  const [images, setImages] = useState([]);

  const { user } = useContext(userContext);

  console.log("USER FROM CONTEXT", user);

  const userId = user.data.id;
  console.log("PROFILE.js userId", userId);

  useEffect(function getImagesOnMount() {
    async function getImages(id) {
      const imageUrls = await FrienderApi.getImagesById(id);
      console.log("PROFILE.js urls from api", imageUrls);
      setImages(imageUrls);
      return imageUrls;
    }
    getImages(userId);
  }, []);

  if (images.length === 0) return <p>Loading...</p>;

  return (
    <div>
      {images.length >= 1 &&
        images.map(image =>
          <img src={image} alt="pic"/>
        )
      }
    </div>
  )
}

export default Profile;