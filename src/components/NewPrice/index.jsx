const NewPrice = ({new_price}) => {
  const price = String(parseFloat(new_price)).split('.');
  return (
    <div className="product-card__content_right-prices_new-price">
      <h3>
      {
        price.length > 0 ? (
          <>
            {price[0]}
            <sup>{price[1]}</sup>Р
          </>
        ) : (
          <>
            price[0]Р
          </>
        )
      }
      </h3>
      <p>ЦЕНА ПО АКЦИИ</p>
    </div>
  )
}

export default NewPrice