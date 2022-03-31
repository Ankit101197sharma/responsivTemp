
import './App.css';
import Cards from './Components/Cards/Cards';
import Api from './Components/Api/Api';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Cards/>
      <Api/>
    </div>
  );
}

export default App;
