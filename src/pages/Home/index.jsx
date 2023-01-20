import ProductsTable from "../../components/ProductsTable";
import Sort from "../../components/Sort";
import "./Home.scss";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    document.body.style = "background: #FFFFFF";
  }

  return (
    <div className="home">
      <h1 className="home__title">Карточки контента</h1>
      <Sort />
      <ProductsTable />
    </div>
  );
};

export default Home;
