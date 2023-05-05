import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import RoutesList from './RoutesList';
import FrienderApi from './Api';
import userContext from "./userContext";
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

  console.log("APP.JS currentUser = ", currentUser);
  console.log("APP.JS token = ", token);

  async function signup(user) {
    const newUser = await FrienderApi.signup(user);
    console.log("newUser", newUser);
    return newUser;
  }

  async function login(formData) {
    console.log("App login");
    const tokenFromAPI = await FrienderApi.login(formData);
    setToken(curr => tokenFromAPI);

    const { sub: userId } = jwt_decode(tokenFromAPI);
    const user = await FrienderApi.getUser(userId);
    setCurrentUser({ data: user, infoLoaded: true });
    navigate("/");
  }

  async function logout() {
    <Navigate to="/" />;
    setCurrentUser(DEFAULT_USER)
    setToken(null);
  }

  async function upload(image) {
    const results = await FrienderApi.upload(image, currentUser.data.id);
    console.log(results);
    navigate("/upload");
    return true;
  }

  async function getImagesById(id) {
    const results = await FrienderApi.getImagesById(id);
    console.log("APP.py getImagesById results", results);
    return results;
  }

  async function getUnratedById(id) {
    const results = await FrienderApi.getUnratedUsersById(id);
    console.log("APP.py getUnratedById results", results);
    return results;
  }

  return (
    <div className="App">
      <userContext.Provider value={{user: currentUser}}>
        <NavBar user={currentUser.data} logout={logout} />
        <RoutesList
          upload={upload}
          signup={signup}
          login={login}
          getImagesById={getImagesById}
          getUnratedById={getUnratedById}
          currentUser={currentUser.data}
        />
      </userContext.Provider>
    </div >
  );
}

export default App;
