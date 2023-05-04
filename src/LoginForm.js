import { useState } from "react";
import { useNavigate } from "react-router-dom";
// iimport "./LoginForm.css";

/** Login form.
 *
 * State:
 *   - formData
 *
 * Props:
 *   - login: login func to be called in parent
 *
 * Routed at:
 *   /login
 *
 * Call list:
 *   RoutesList -> LoginForm
 *
 */

function LoginForm({ handleSave }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  // console.debug(
  //   "LoginForm",
  //   "formData=", formData,
  //   "formErrors", formErrors,
  // );

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(curr => ({ ...curr, [name]: value }));
  }

  /** Handle form submission */
  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("handleSubmit")
    try {
      await handleSave(formData);
      navigate("/upload");
    } catch (err) {
      setFormErrors(err);
    }
  }

  return (
    <div className="LoginForm">
      <form className="LoginForm-form" onSubmit={handleSubmit}>

        <div className="LoginForm-field">
          <label className="LoginForm-label" htmlFor="username">
            Username:
          </label>
          <input
            name="username"
            className="LoginForm-input"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="LoginForm-field">
          <label className="LoginForm-label" htmlFor="password">
            Password:
          </label>
          <input
            name="password"
            type="password"
            className="LoginForm-input"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Login</button>

      </form>
    </div>
  );
}

export default LoginForm;