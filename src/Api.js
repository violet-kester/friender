import axios from "axios";

const BASE_API_URL = "http://127.0.0.1:5000";

class FrienderApi {

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