import "./ProductCard.scss";
import DiscountLabel from "../DiscountLabel";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Disclaimer from "../Disclaimer";
import OldPrice from "../OldPrice";
import NewPrice from "../NewPrice";
import { Product } from "../../@types";

const ProductCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product: Product = useSelector(
    (state: { [index: string]: any }) => state.products.filteredProducts[id]
  );

  return (
    <>
      <div className="product-card">
        <div
          className={`product-card__heading ${
            product?.discount
              ? "justify-content-between"
              : "justify-content-end"
          }`}
        >
          {parseInt(product?.discount!) ? (
            <DiscountLabel discount={product?.discount!} />
          ) : null}
          {product?.logo_url && (
            <img
              className="product-card__heading-logo"
              src={product?.logo_url}
              alt="logo"
            />
          )}
        </div>
        <div className="product-card__content">
          <img src={product?.image_url} alt="Product" />
          <div className="product-card__content_right">
            <h2>{product?.name}</h2>
            <div className="product-card__content_right-rating">
              <Rating value={product?.stars} readOnly />
            </div>
            <div className="product-card__content_right-prices">
              <OldPrice old_price={product?.old_price!} />
              {product?.new_price && (
                <NewPrice new_price={product?.new_price} />
              )}
            </div>
          </div>
        </div>
      </div>
      {product?.disclaimer && <Disclaimer disclaimer={product?.disclaimer} />}
    </>
  );
};

export default ProductCard;
