import RoutesList from './RoutesList';
import FrienderApi from './Api';
// import './App.css';

function App() {

  async function upload(image) {
    const results = await FrienderApi.upload(image);
    console.log(results);
    return results;
  }

  return (
    <div className="App">
      {/* <NavBar /> */}
      <RoutesList upload={upload} />
    </div>
  );
}

export default App;
