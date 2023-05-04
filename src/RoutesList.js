import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import SignupForm from "./SignupForm";
import UploadForm from "./UploadForm";



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

function RoutesList({ upload }) {

  return (
    <Routes>
      {/* <Route
        path="/"
        element={<Home />} />
      <Route
        path="/signup"
        element={<SignupForm />} /> */}
      <Route
        path="/upload"
        element={<UploadForm handleSave={upload} />} />
      <Route
        path="*"
        element={<h1>404 Page not found.</h1>
        } />
    </Routes>
  );
}


export default RoutesList;