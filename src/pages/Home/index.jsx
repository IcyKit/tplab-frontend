import ProductsTable from "../../components/ProductsTable";
import Sort from "../../components/Sort";
import "./Home.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchProducts } from "../../redux/slices/products";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  if (location.pathname === "/") {
    document.body.style = "background: #FFFFFF";
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="home">
      <h1 className="home__title">Карточки контента</h1>
      <Sort />
      <ProductsTable />
    </div>
  );
};

export default Home;
