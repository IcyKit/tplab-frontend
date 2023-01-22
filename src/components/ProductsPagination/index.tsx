import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Product } from "../../@types";

interface ProductsPaginationProps {
  products: Product[];
  setCurrentPage: (page: number) => void;
  contentPerPage: number;
  currentPage: number;
}

const ProductsPagination: React.FC<ProductsPaginationProps> = ({
  products,
  setCurrentPage,
  contentPerPage,
  currentPage,
}) => {
  const pages: string[] = new Array(
    Math.ceil(products.length / contentPerPage)
  ).fill("");

  return (
    <Pagination>
      {currentPage > 1 && (
        <PaginationItem>
          <PaginationLink
            previous
            onClick={() => setCurrentPage(currentPage - 1)}
          />
        </PaginationItem>
      )}
      {pages.map((_, index) => (
        <PaginationItem>
          <PaginationLink
            className={`${currentPage === index + 1 ? "fw-bold" : ""}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
      {currentPage < pages.length && (
        <PaginationItem>
          <PaginationLink
            next
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </PaginationItem>
      )}
    </Pagination>
  );
};

export default ProductsPagination;
