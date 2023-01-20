import ProductsTable from "../../components/ProductsTable";
import Sort from "../../components/Sort";
import "./Home.scss";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    document.body.style = "background: #FFFFFF";
  }

  const [sort, setSort] = useState({ type: "name", queue: "asc" });

  return (
    <div className="home">
      <h1 className="home__title">Карточки контента</h1>
      <Sort setSort={setSort} />
      <ProductsTable sort={sort} />
    </div>
  );
};

export default Home;
