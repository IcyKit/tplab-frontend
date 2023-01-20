import {FormGroup, Input} from "reactstrap";
import './SearchProduct.scss';
const SearchProduct = ({onSearchInput}) => {
  return (
    <FormGroup >
      <Input className='product-search' id='search' name='search' placeholder='Поиск...' onChange={(e) => onSearchInput(e)}/>
    </FormGroup>
  )
}

export default SearchProduct;