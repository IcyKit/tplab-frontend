import { Link } from "react-router-dom";

const ProductsTableItem = ({
  image_url,
  name,
  start_date,
  end_date,
  category,
  views,
}) => {
  return (
    <tr>
      <th>
        <img src={image_url} alt="image_url" />
      </th>
      <th>
        <Link to="/product">
          <p>{name}</p>
        </Link>
        <p className="products-table__category">{category}</p>
      </th>
      <th className="text-center">
        <p>{views}</p>
      </th>
      <th className="text-center">
        {new Date(start_date).toLocaleDateString("ru-RU")}
      </th>
      <th className="text-center">
        {new Date(end_date).toLocaleDateString("ru-RU")}
      </th>
    </tr>
  );
};

export default ProductsTableItem;
