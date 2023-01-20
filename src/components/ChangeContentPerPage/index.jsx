import { FormGroup, Label, Input } from "reactstrap";
import { useTranslation } from "react-i18next";

const ChangeContentPerPage = ({ setContentPerPage, products }) => {
  const { t } = useTranslation();

  return (
    <FormGroup>
      <Label for="contentPerPage">{t("quant")}</Label>
      <Input id="contentPerPage" name="select" type="select" defaultValue={4}>
        <option onClick={() => setContentPerPage(2)}>2</option>
        <option onClick={() => setContentPerPage(3)}>3</option>
        <option onClick={() => setContentPerPage(4)}>4</option>
        <option onClick={() => setContentPerPage(5)}>5</option>
        <option onClick={() => setContentPerPage(products.length)}>
          Весь товар
        </option>
      </Input>
    </FormGroup>
  );
};

export default ChangeContentPerPage;
