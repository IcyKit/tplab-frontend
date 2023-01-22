import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { fetchProducts } from "./redux/slices/products";
import { useAppDispatch } from "./redux/store";
import { useEffect } from "react";

const Product = React.lazy(() => import("./pages/Product"));
const Home = React.lazy(() => import("./pages/Home"));

const App: React.FC = () => {
  const dispatch = useAppDispatch();
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
};

export default App;
