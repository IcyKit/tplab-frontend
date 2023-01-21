import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Product } from '../../@types';

interface ProductsPaginationProps {
  products: Product[];
  setCurrentPage: (page: number) => void;
  contentPerPage: number;
}

const ProductsPagination: React.FC<ProductsPaginationProps> = ({
  products,
  setCurrentPage,
  contentPerPage,
}) => {
  const pages: string[] = new Array(
    Math.ceil(products.length / contentPerPage)
  ).fill('');

  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      {pages.map((_, index) => (
        <PaginationItem>
          <PaginationLink onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
    </Pagination>
  );
};

export default ProductsPagination;
