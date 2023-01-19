import "./ProductsTable.scss";
import { Table } from "reactstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductsTableItem from "../ProductsTableItem";
import ProductsPagination from "../ProductsPagination";
import { useEffect } from "react";

const ProductsTable = () => {
  const { products } = useSelector((state) => state.products);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(4);
  const contentPerPage = 4;

  const updatePage = (contentPerPage, index) => {
    setLastIndex(index * contentPerPage);
    setFirstIndex(lastIndex - contentPerPage);
  };

  useEffect(() => {
    setFirstIndex(lastIndex - contentPerPage);
  }, [lastIndex]);

  return (
    <>
      <ProductsPagination products={products} updatePage={updatePage} />
      <Table className="products-table" hover responsive size="">
        <thead>
          <tr className="products-table__title">
            <th>Фото</th>
            <th>Название</th>
            <th className="text-center">Просмотры</th>
            <th className="text-center">Начало ротации</th>
            <th className="text-center">Конец ротации</th>
          </tr>
        </thead>
        <tbody>
          {products
            .map((product) => (
              <ProductsTableItem
                name={product.name}
                image_url={product.image_url}
                category={product.category}
                start_date={product.start_date}
                end_date={product.end_date}
                views={product.views}
              />
            ))
            .slice(firstIndex, lastIndex)}
        </tbody>
      </Table>
    </>
  );
};

export default ProductsTable;
