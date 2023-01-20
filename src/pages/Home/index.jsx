import ProductsTable from "../../components/ProductsTable";
import Sort from "../../components/Sort";
import "./Home.scss";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "../../components/ChangeLanguage";

const Home = () => {
  const { t } = useTranslation();
  const location = useLocation();
  if (location.pathname === "/") {
    document.body.style = "background: #FFFFFF";
  }

  const [sort, setSort] = useState({ type: "name", queue: "asc" });

  return (
    <div className="home">
      <div className="d-flex justify-content-between">
        <h1 className="home__title">{t("heading")}</h1>
        <ChangeLanguage />
      </div>
      <Sort setSort={setSort} />
      <ProductsTable sort={sort} />
    </div>
  );
};

export default Home;
