import React from 'react';
import Sort from '../Sort';
import SearchProduct from '../SearchProduct';
import ProductsPagination from '../ProductsPagination';
import ChangeContentPerPage from '../ChangeContentPerPage';
import { useSelector } from 'react-redux';

interface TableSettingsProps {
  contentPerPage: number;
  setCurrentPage: (page: number) => void;
  changeContent: (num: number) => void;
}

const TableSettings: React.FC<TableSettingsProps> = ({
  contentPerPage,
  setCurrentPage,
  changeContent,
}) => {
  const { filteredProducts } = useSelector(
    (state: { [key: string]: any }) => state.products
  );
  return (
    <>
      <div>
        <div className="d-flex justify-content-between flex-wrap">
          <Sort />
          <SearchProduct />
        </div>
        <div
          className={`d-flex flex-wrap justify-content-${
            contentPerPage < filteredProducts.length ? 'between' : 'end'
          } align-items-end`}
        >
          {contentPerPage < filteredProducts.length && (
            <ProductsPagination
              contentPerPage={contentPerPage}
              products={filteredProducts}
              setCurrentPage={setCurrentPage}
            />
          )}
          <ChangeContentPerPage
            changeContent={changeContent}
            products={filteredProducts}
          />
        </div>
      </div>
    </>
  );
};

export default TableSettings;
