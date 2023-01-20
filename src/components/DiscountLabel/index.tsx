import Arrow from "../../assets/arrow.png";
import "./DiscountLabel.scss";

interface DiscountLabelProps {
  discount: string;
}

const DiscountLabel: React.FC<DiscountLabelProps> = ({ discount }) => {
  return (
    <div className="discount-label">
      <img src={Arrow} alt="Price" />
      <p className="discount-label__price">-{discount}%</p>
    </div>
  );
};

export default DiscountLabel;
