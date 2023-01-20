import { FormGroup, Input } from "reactstrap";
import "./SearchProduct.scss";
import { useTranslation } from "react-i18next";

const SearchProduct = ({ onSearchInput }) => {
  const { t } = useTranslation();
  return (
    <FormGroup>
      <Input
        className="product-search"
        id="search"
        name="search"
        placeholder={t("search")}
        onChange={(e) => onSearchInput(e)}
      />
    </FormGroup>
  );
};

export default SearchProduct;
