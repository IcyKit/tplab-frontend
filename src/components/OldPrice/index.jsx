import { useTranslation } from "react-i18next";

const OldPrice = ({ old_price }) => {
  const { t } = useTranslation();
  const price = String(old_price).split(",");
  return (
    <div className="product-card__content_right-prices_old-price">
      <h3>
        {price.length > 0 ? (
          <>
            {price[0]}
            <sup>{price[1]}</sup>Р
          </>
        ) : (
          <>price[0]Р</>
        )}
      </h3>
      <p>{t("old-price")}</p>
    </div>
  );
};

export default OldPrice;
