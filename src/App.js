import './App.css';
import Cart from "./Components/Pages/Cart/Cart"
import Nav from "./Components/Pages/Navigation/Nav"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Pages/Home/Home';
import AllProducts from './Components/Pages/Menu/AllProducts';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route path = "/" exact component = {Home} />
            <Route path = "/cart" component = {Cart} />
            <Route path = "/menu" component = {AllProducts} /> 
          </Switch>

      </div>
    </Router>
    
  );
}

export default App;
