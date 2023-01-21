import './ProductsTable.scss';
import { Table } from 'reactstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductsTableItem from '../ProductsTableItem';
import ProductsPagination from '../ProductsPagination';
import ChangeContentPerPage from '../ChangeContentPerPage';
import SearchProduct from '../SearchProduct';
import { useTranslation } from 'react-i18next';
import { Product } from '../../@types';
import Sort from '../Sort';

interface IProductsAndIndex extends Product {
  index: number;
}

const ProductsTable: React.FC = () => {
  const { t } = useTranslation();
  const { filteredProducts } = useSelector(
    (state: { [key: string]: any }) => state.products
  );
  const [contentPerPage, setContentPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * contentPerPage;
  const firstIndex = lastIndex - contentPerPage;

  const changeContent = (num: number): void => {
    setContentPerPage(num);
  };

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
            contentPerPage={contentPerPage}
          />
        </div>
      </div>
      <Table className="products-table" hover responsive size="">
        <thead>
          <tr className="products-table__title">
            <th>{t('photo')}</th>
            <th>{t('name')}</th>
            <th className="text-center">{t('views')}</th>
            <th className="text-center">{t('start-date')}</th>
            <th className="text-center">{t('end-date')}</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts
            .map((product: IProductsAndIndex, index: number) => (
              <ProductsTableItem
                key={index}
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
