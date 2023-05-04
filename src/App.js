import React, { useState, useEffect } from "react";
import RoutesList from './RoutesList';
import FrienderApi from './Api';
import useLocalStorage from "./useLocalStorage";
// import './App.css';

export const TOKEN_STORAGE_ID = "token"

function App() {
  const [currentUser, setCurrentUser] = useState({
    data: null,
    infoLoaded: false
  });
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  async function signup(user) {
    const newUser = await FrienderApi.signup(user);
    console.log("newUser", newUser);
    return newUser;
  }

  async function login(formData) {
    console.log("App login")
    let tokenAPI = await FrienderApi.login(formData);
    console.log("tokenAPI", tokenAPI);
    setToken(tokenAPI);
  }

  async function upload(image) {
    const results = await FrienderApi.upload(image);
    console.log(results);
    return results;
  }

  return (
    <div className="App">
      {/* <NavBar /> */}
      <RoutesList upload={upload} signup={signup} login={login} />
    </div>
  );
}

export default App;
