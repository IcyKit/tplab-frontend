import { FormGroup, Input } from "reactstrap";
import { useState, useEffect } from "react";
import "./SearchProduct.scss";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../redux/slices/products";
import product from "../../pages/Product";

const SearchProduct: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const placeholderText = t("search");
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    dispatch(searchProduct(searchValue));
  }, [searchValue]);

  return (
    <FormGroup className="product-search">
      <Input
        id="searchProduct"
        name="searchProduct"
        placeholder={placeholderText}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </FormGroup>
  );
};

export default SearchProduct;
