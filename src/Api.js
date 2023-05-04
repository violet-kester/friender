import axios from "axios";

const BASE_API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

class FrienderApi {

  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_API_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${FrienderApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  /** signup user */
  static async signup(user) {
    console.log("FrienderApi signup", user);
    const newUser = await axios.post(`${BASE_API_URL}/users`, user);
    return newUser;
  }

  /** login user */
  static async login(formData) {
    console.log("FrienderApi login", formData);
    let res = await this.request(`auth/token`, formData, "post");
    return res.token;
  }


  /** upload a picture */
  static async upload(file) {
    console.log("FrienderApi upload", file);
    const result = await axios.post(`${BASE_API_URL}/upload`, file);
    return "Uploaded!";
  }
}


// {
//   headers: {
//     'Content-Type': 'multipart/form-data',
//     'Access-Control-Allow-Origin': '*',
//   }
// }
export default FrienderApi;