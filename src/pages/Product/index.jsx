import "./Product.scss";
import { useLocation, Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useTranslation } from "react-i18next";

const Product = () => {
  const { t } = useTranslation();
  const location = useLocation();

  if (location.pathname.includes("/product")) {
    document.body.style = "background: #EDF2F8";
  }

  return (
    <div className="product">
      <Link to="/" className="d-flex">
        <ChevronLeftIcon />
        {t("back")}
      </Link>
      <ProductCard />
    </div>
  );
};

export default Product;
