import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import RoutesList from './RoutesList';
import FrienderApi from './Api';
import useLocalStorage from "./useLocalStorage";
import NavBar from "./NavBar";
import jwt_decode from "jwt-decode";
// import './App.css';

export const TOKEN_STORAGE_ID = "token";
const DEFAULT_USER = {
  data: null,
  infoLoaded: false
};

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(DEFAULT_USER);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  async function signup(user) {
    const newUser = await FrienderApi.signup(user);
    console.log("newUser", newUser);
    return newUser;
  }

  async function login(formData) {
    console.log("App login");
    const tokenFromAPI = await FrienderApi.login(formData);
    console.log("tokenAPI", tokenFromAPI);
    // TODO: get user data - api call - useEffect
    // TODO: set currentUser
    setToken(tokenFromAPI);

    const user_id = jwt_decode(tokenFromAPI);
    const user = await FrienderApi.getUser(user_id);
    setCurrentUser({data: user, infoLoaded: true});
    navigate("/"); // FIXME:  Why arent you navigating?
  }

  async function logout() {
    setToken(null);
    // setCurrentUser(DEFAULT_USER)
    return <Navigate to="/" />;
  }

  async function upload(image) {
    const results = await FrienderApi.upload(image);
    console.log(results);
    return results;
  }

  return (
    <div className="App">
      <NavBar logout={logout} />
      <RoutesList
        upload={upload}
        signup={signup}
        login={login}
      />
    </div>
  );
}

export default App;
