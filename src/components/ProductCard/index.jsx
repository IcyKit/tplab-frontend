import "./ProductCard.scss";
import DiscountLabel from "../DiscountLabel";
import Rating from "@mui/material/Rating";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Disclaimer from "../Disclaimer";

const ProductCard = () => {
  const {id} = useParams()
  const {discount, logo_url, image_url, stars, name, disclaimer} = useSelector((state) => state.products.products[id]);

  return (
    <>
    <div className="product-card">
      <div className="product-card__heading">
        <DiscountLabel discount={discount} />
        <img
          className="product-card__heading-logo"
          src={logo_url}
        />
      </div>
      <div className="product-card__content">
        <img src={image_url} />
        <div className="product-card__content_right">
          <h2>{name}</h2>
          <div className="product-card__content_right-rating">
            <Rating value={stars} />
          </div>
          <div className="product-card__content_right-prices">
            <div className="product-card__content_right-prices_old-price">
              <h3>
                659<sup>99</sup>Р
              </h3>
              <p>СТАРАЯ ЦЕНА</p>
            </div>
            <div className="product-card__content_right-prices_new-price">
              <h3>
                359<sup>99</sup>Р
              </h3>
              <p>ЦЕНА ПО АКЦИИ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  {disclaimer && (<Disclaimer disclaimer={disclaimer} />)}
  </>
  );
};

export default ProductCard;
