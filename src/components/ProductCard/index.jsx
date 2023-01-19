import "./ProductCard.scss";
import DiscountLabel from "../DiscountLabel";
import Rating from "@mui/material/Rating";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card__heading">
        <DiscountLabel discount={55} />
        <img
          className="product-card__heading-logo"
          src="https://myzoograd.ru/upload/iblock/f37/f3733a014d377f291a8d6968badaca27.jpg"
        />
      </div>
      <div className="product-card__content">
        <img src="https://4lapy.ru/resize/800x800/upload/iblock/714/7140b69c9d49dd89f1d35b1a99e27d18.jpg" />
        <div className="product-card__content_right">
          <h2>Сухой корм для взрослых собак мелких и карликовых пород</h2>
          <div className="product-card__content_right-prices">
            <div className="product-card__content-right-prices_old-price">
              <h3>
                659<span>99</span>
              </h3>
              <p>СТАРАЯ ЦЕНА</p>
            </div>
            <div className="product-card__content-right-prices_new-price">
              <Rating value={4} />
              <h3>
                359<span>99</span>
              </h3>
              <p>Цена по акции</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
