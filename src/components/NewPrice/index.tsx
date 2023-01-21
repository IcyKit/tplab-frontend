import { useTranslation } from 'react-i18next';

interface NewPriceProps {
  new_price: string | number;
}

const NewPrice: React.FC<NewPriceProps> = ({ new_price }) => {
  const { t } = useTranslation();
  // Разбиваем массив на два элемента, потому что в БД данные хранятся не однородно. Где-то строчки, где-то числа
  let price: string[] = String(new_price).split('.');

  return (
    <div className="product-card__content_right-prices_new-price">
      <h3>
        {price.length > 0 ? (
          <>
            {price[0]}
            <sup>
              {price[1]}
              {String(price[1]).length === 1 ? '9' : ''}
            </sup>
            ₽
          </>
        ) : (
          <>price[0]₽</>
        )}
      </h3>
      <p>{t('new-price')}</p>
    </div>
  );
};

export default NewPrice;
