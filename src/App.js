
import './App.css';
import Cards from './Components/Cards/Cards';
import Api from './Components/Api/Api';
import PostApi from './Components/PostApi/PostApi';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Cards/>
      <Api/>
      <PostApi/>
    </div>
  );
}

export default App;
