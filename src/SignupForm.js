import { useState } from "react";
// import ImageUploader from 'react-images-upload';

const DEFAULT_FORM_DATA = {
  username: "",
  password: "",
  email: "",
  hobbies: "",
  interests: "",
  location: ""
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
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await handleSave(formData);
      setFormData(DEFAULT_FORM_DATA);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="SignupForm">
      <form className="SignupForm-form" onSubmit={handleSubmit}>

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
          <label className="SignupForm-label" htmlFor="username">
            Password:
          </label>
          <input
            name="password"
            type="password"
            className="SignupForm-input"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="SignupForm-field">
          <label className="SignupForm-label" htmlFor="email">
            Email:
          </label>
          <input
            name="email"
            type="email"
            className="SignupForm-input"
            value={formData.email}
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
            value={formData.hobbies}
            onChange={handleChange}
          />
        </div>

        <div className="SignupForm-field">
          <label className="SignupForm-label" htmlFor="interests">
            Interests:
          </label>
          <input
            name="interests"
            className="SignupForm-input"
            value={formData.interests}
            onChange={handleChange}
          />
        </div>

        <div className="SignupForm-field">
          <label className="SignupForm-label" htmlFor="location">
            Zip code:
          </label>
          <input
            name="location"
            className="SignupForm-input"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <button> Signup </button>
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

export default SignupForm;