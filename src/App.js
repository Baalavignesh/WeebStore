import './App.css';
import Cart from "./Components/Pages/Cart/Cart"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Pages/Home/Home';
import AllProducts from './Components/Pages/ProductPage/AllProducts';
import ViewProduct from './Components/Pages/ViewProduct/ViewProduct';

function App() {
  return (
    <Router>
      <div className="App">
          
          <Switch>
            <Route path = "/" exact component = {Home} />
            <Route path = "/cart" component = {Cart} />
            <Route path = "/products" component = {AllProducts} /> 
            <Route path = "/product/:id" component = {ViewProduct} />

          </Switch>

      </div>
    </Router>
    
  );
}

export default App;
