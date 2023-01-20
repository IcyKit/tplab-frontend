import { useTranslation } from "react-i18next";

interface OldPriceProps {
  old_price: number | string;
}

const OldPrice: React.FC<OldPriceProps> = ({ old_price }) => {
  const { t } = useTranslation();
  // Разбить новую цену не получится, потому что в БД она где-то через точку, а где-то через запятую
  const price = String(old_price).split(",");
  return (
    <div className="product-card__content_right-prices_old-price">
      <h3>
        {price.length > 0 ? (
          <>
            {price[0]}
            <sup>{price[1]}</sup>₽
          </>
        ) : (
          <>price[0]₽</>
        )}
      </h3>
      <p>{t("old-price")}</p>
    </div>
  );
};

export default OldPrice;
