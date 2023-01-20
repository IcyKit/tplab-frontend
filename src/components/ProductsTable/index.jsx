import "./ProductsTable.scss";
import { Table } from "reactstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductsTableItem from "../ProductsTableItem";
import ProductsPagination from "../ProductsPagination";
import ChangeContentPerPage from "../ChangeContentPerPage";
import SearchProduct from "../SearchProduct";

const ProductsTable = ({ sort: { type, queue } }) => {
  const { products } = useSelector((state) => state.products);
  const [contentPerPage, setContentPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * contentPerPage;
  const firstIndex = lastIndex - contentPerPage;
  const [searchValue, setSearchValue] = useState("");

  const onSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className={`d-flex justify-content-between align-items-end`}>
        {contentPerPage < products.length && (
          <ProductsPagination
            contentPerPage={contentPerPage}
            products={products}
            setCurrentPage={setCurrentPage}
          />
        )}
        <ChangeContentPerPage
          setContentPerPage={setContentPerPage}
          products={products}
        />
        <SearchProduct onSearchInput={onSearchInput} />
      </div>
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
            .filter(
              (product) =>
                product.name.includes(searchValue) ||
                product.category.includes(searchValue)
            )
            .map((product, index) => (
              <ProductsTableItem
                name={product.name}
                image_url={product.image_url}
                category={product.category}
                start_date={product.start_date}
                end_date={product.end_date}
                views={product.views}
                index={index}
              />
            ))
            .slice(firstIndex, lastIndex)}
        </tbody>
      </Table>
    </>
  );
};

export default ProductsTable;
