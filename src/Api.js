import axios from "axios";

const BASE_API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

class FrienderApi {

  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_API_URL}/${endpoint}`;
    // const headers = { Authorization: `Bearer ${FrienderApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      // return (await axios({ url, method, data, params, headers })).data;
      return (await axios({ url, method, data, params })).data;
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
    let res = await this.request(`login`, formData, "post");
    console.log("API.js res.token = ", res.token);
    return res.token;
  }


  /** upload a picture */
  static async upload(file, id) {
    console.log("FrienderApi upload", file);
    let res = await this.request(`users/${id}/images`, file, "post");
    return "Uploaded!";
  }

  /** get user info by id */
  static async getUser(id) {
    console.log("getUser called with username = ", id);
    const res = await this.request(`users/${id}`);
    console.log("getUser res = ", res);
    return res.user;
  }

  /** get user images by id */
  static async getImagesById(id) {
    console.log("FrienderAPI getImagesById", id);
    const res = await this.request(`users/${id}/images`);
    console.log("FrienderAPI getImagesById res = ", res);
    return res.images;
  }

  /** get unrated users images by user id */
  static async getUnratedUsersById(id) {
    console.log("FrienderAPI getUnratedUsersById", id);
    const res = await this.request(`users/${id}/unrated`);
    console.log("FrienderAPI getUnratedUsersById res = ", res);
    return res;
  }

  /** get user info by username */
  // static async getUser(username) {
  //   console.log("getUser called with username = ", username);
  //   const result = await this.request(`users/${username}`);
  //   return result.data.user;
  // }
}



// {
//   headers: {
//     'Content-Type': 'multipart/form-data',
//     'Access-Control-Allow-Origin': '*',
//   }
// }
export default FrienderApi;