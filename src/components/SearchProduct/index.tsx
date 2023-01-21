import { FormGroup, Input } from 'reactstrap';
import './SearchProduct.scss';
import { useTranslation } from 'react-i18next';

interface SearchProductProps {
  onSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchProduct: React.FC<SearchProductProps> = ({ onSearchInput }) => {
  const { t } = useTranslation();
  const placeholderText = t('search');
  return (
    <FormGroup>
      <Input
        className="product-search"
        id="searchProduct"
        name="searchProduct"
        placeholder={placeholderText}
        onChange={(e) => onSearchInput(e)}
      />
    </FormGroup>
  );
};

export default SearchProduct;
