import { useState, useContext, useEffect } from "react";
import Profile from "./Profile";
import FrienderApi from "./Api";

function FindFriend({ getImagesById, getUnratedById, user }) {
  const [unratedUsers, setUnratedUsers] = useState([]);

  useEffect(function getUnratedUsersOnMount() {
    async function getUnratedUsers(id) {
      const unratedUsers = await getUnratedById(user.id);
      console.log("FINDFRIEND.js unratedUsers from api", unratedUsers);

      setUnratedUsers(unratedUsers);
      return unratedUsers;
    }
    // if (unratedUsers) {
    getUnratedUsers(user.id);
    // }
  }, []);





  return (
    <div className="FindFriend">

      {unratedUsers.length > 0 &&
        <div className="FriendFriend-list">
          {unratedUsers.map((user, idx) =>
            <Profile getImagesById={getImagesById} user={user} key={idx} />)}
        </div>
      }
    </div >
  );
}

export default FindFriend;