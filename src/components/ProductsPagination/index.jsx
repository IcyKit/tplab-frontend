import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const ProductsPagination = ({ products, setCurrentPage, contentPerPage }) => {
  const pages = new Array(Math.ceil(products.length / contentPerPage)).fill();

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
