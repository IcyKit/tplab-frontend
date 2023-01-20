import {FormGroup, Label, Input} from "reactstrap";

const ChangeContentPerPage = ({setContentPerPage, products}) => {
  return (
    <FormGroup>
      <Label for="contentPerPage">
        Количество отоброжаемого товара
      </Label>
      <Input
        id="contentPerPage"
        name="select"
        type="select"
      >
        <option onClick={() => setContentPerPage(2)}>
          2
        </option>
        <option onClick={() => setContentPerPage(3)}>
          3
        </option>
        <option onClick={() => setContentPerPage(4)}>
          4
        </option>
        <option onClick={() => setContentPerPage(5)}>
          5
        </option>
        <option onClick={() => setContentPerPage(products.length)}>
          Весь товар
        </option>
      </Input>
    </FormGroup>
  )
}

export default ChangeContentPerPage;