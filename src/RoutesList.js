import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import UploadForm from "./UploadForm";
import Profile from "./Profile";


/** Site-wide routes -------------------------------------------------
 *
 * State:
 *  -
 *
 * Props:
 *  -
 *
 * Call list:
 *   App -> RoutesList
 *
 */

function RoutesList({ upload, signup, login, getImagesById }) {

  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      {!localStorage.getItem("token") &&
        <>
          <Route
            path="/signup"
            element={<SignupForm handleSave={signup} />}
          />
          <Route
            path="/login"
            element={<LoginForm handleSave={login} />}
          />
        </>
      }
      {localStorage.getItem("token") &&
        <>
          <Route
            path="/upload"
            element={<UploadForm handleSave={upload} />}
          />
          <Route
            path="/profile"
            element={<Profile getImagesById={getImagesById} />}
          />
        </>
      }
      <Route
        path="*"
        element={<h1>404 Page not found.</h1>}
      />
    </Routes>
  );
}


export default RoutesList;