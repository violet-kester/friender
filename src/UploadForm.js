import { useState } from "react";

/** UploadForm -------------------------------------------------------
 *
 * State:
 * - formData
 *
 * Props:
 * - handleSave: function to call in parent.
 *
 * Call list:
 *   RoutesList -> UploadForm
 *
 */

function UploadForm({ handleSave }) {
  const [formData, setFormData] = useState({});

  console.log("UploadForm", formData);

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(input.files[0]);

    // setFormData(imgFormData => ({
    //   // ...formData,
    //   // [input.name]: input.value,
    //   imgFormData
    // }));
  }

  /** Call parent function and clear form. */
  async function handleSubmit(evt) {
    // console.log("evt.target from handleSubmit=", evt.target)
    evt.preventDefault();

    const imgFormData = new FormData();
    imgFormData.append("file", formData);

    const res = await handleSave(imgFormData);
    console.log("I GOT HERE")
    if (res === true) {
      setFormData({});
    }
  }

  return (
    <div className="UploadForm">
      <form className="UploadForm-form" encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="UploadForm-field">
          <label className="UploadForm-label" htmlFor="file">
            Upload a profile picture:
          </label>
          <input
            name="file"
            type="file"
            value={formData.file}
            className="UploadForm-input"
            onChange={handleChange}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default UploadForm;