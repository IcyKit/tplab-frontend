import React from "react";
import Sort from "../Sort";
import SearchProduct from "../SearchProduct";
import ProductsPagination from "../ProductsPagination";
import ChangeContentPerPage from "../ChangeContentPerPage";
import { useSelector } from "react-redux";
import SortProductStars from "../SortProductStars";

import "./TableSettings.scss";

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
      <div className="table-settings">
        <div className="table-settings__top">
          <Sort />
          <SearchProduct />
        </div>
        <div className={`table-settings__bottom`}>
          {contentPerPage < filteredProducts.length && (
            <ProductsPagination
              contentPerPage={contentPerPage}
              products={filteredProducts}
              setCurrentPage={setCurrentPage}
            />
          )}
          <SortProductStars />
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
