import React from "react";
import { Link, NavLink } from "react-router-dom";
// import "./NavBar.css";

/** NavBar bar for site. Shows up on every page.
 *
 * State:
 *   -
 *
 * Props:
 *   - logout: function to be called in parent
 *
 * Call list:
 * App -> NavBar
 *
 */

function NavBar({ user, logout }) {

  return (
    <nav className="NavBar">
      <div className="NavBar-logo">
        <NavLink to="/">
          Friender
        </NavLink>
      </div>
      <div className="NavBar-links">

        {!user &&
          <div className="NavBar-unprotected">

            <NavLink to="/login">
              Login
            </NavLink>

            <NavLink to="/signup">
              Signup
            </NavLink>
          </div>
        }

        {user &&
          <div className="NavBar-protected">

            <NavLink to="/upload">
              Upload
            </NavLink>

            <NavLink to="/profile">
              Profile
            </NavLink>

            <NavLink onClick={logout}>Logout</NavLink>

          </div>
        }

      </div>
    </nav>
  );
}

export default NavBar;
