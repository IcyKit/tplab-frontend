import "./App.scss";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";

import Product from "./pages/Product";
import {fetchProducts} from "./redux/slices/products";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
