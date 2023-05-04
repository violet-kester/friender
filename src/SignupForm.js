import { useState } from "react";
// import ImageUploader from 'react-images-upload';

const DEFAULT_FORM_DATA = {
  username: "",
  password: "",
  hobbies: "",
  images: []
};

/** SignupForm -------------------------------------------------------
 *
 * State:
 * - formData
 *
 * Props:
 * - handleSave: function to call in parent.
 *
 * Call list:
 *   RoutesList -> SignupForm
 *
 */

function SignupForm({ handleSave }) {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSave(formData);
    setFormData(DEFAULT_FORM_DATA);
  }

  return (
    <div className="SignupForm">
      <form className="SignupForm-form">

        <div className="SignupForm-field">
          <label className="SignupFirn-label" htmlFor="username">
            Username:
          </label>
          <input
            name="username"
            className="SignupForm-input"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="SignupForm-field">
          <label className="SignupFirn-label" htmlFor="username">
            Password:
          </label>
          <input
            name="password"
            type="password"
            className="SignupForm-input"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="SignupForm-field">
          <label className="SignupForm-label" htmlFor="username">
            Hobbies:
          </label>
          <input
            name="hobbies"
            className="SignupForm-input"
            value={formData.username}
            onChange={handleChange}
          />
        </div>


        {/* <ImageUploader
          withIcon={true}
          buttonText='Choose images'
          onChange={this.onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        /> */}

      </form>
    </div>
  );
}