import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const ProductsPagination = ({ products, updatePage }) => {
  const contentPerPage = 4;
  const pages = new Array(Math.ceil(products.length / contentPerPage)).fill();
  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      {pages.map((_, index) => (
        <PaginationItem>
          <PaginationLink onClick={() => updatePage(contentPerPage, index + 1)}>
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
