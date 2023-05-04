import RoutesList from './RoutesList';
import FrienderApi from './Api';
// import './App.css';

function App() {

  async function signup(user) {
    const newUser = await FrienderApi.signup(user);
    console.log("newUser", newUser);
    return newUser;
  }

  async function upload(image) {
    const results = await FrienderApi.upload(image);
    console.log(results);
    return results;
  }

  return (
    <div className="App">
      {/* <NavBar /> */}
      <RoutesList upload={upload} signup={signup} />
    </div>
  );
}

export default App;
