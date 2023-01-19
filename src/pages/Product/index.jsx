import "./Product.scss";
import { useLocation, Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const Product = () => {
  const location = useLocation();
  console.log(location.pathname);

  if (location.pathname.includes("/product")) {
    document.body.style = "background: #EDF2F8";
  }

  return (
    <div className="product">
      <Link to="/">Назад</Link>
      <ProductCard />
    </div>
  );
};

export default Product;
