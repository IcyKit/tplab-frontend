import Arrow from "../../assets/arrow.png";
import "./DiscountLabel.scss";

const DiscountLabel = ({ discount }) => {
  return (
    <div className="discount-label">
      <img src={Arrow} />
      <p className="discount-label__price">-{discount}%</p>
    </div>
  );
};

export default DiscountLabel;
