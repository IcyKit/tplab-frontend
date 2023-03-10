import { FormGroup, Label, Input } from "reactstrap";
import { useTranslation } from "react-i18next";
import { Product } from "../../@types";
import "./ChangeContentPerPage.scss";

interface ChangeContentPerPageProps {
  changeContent: (number: number) => void;
  products: Product[];
}

const ChangeContentPerPage: React.FC<ChangeContentPerPageProps> = ({
  changeContent,
  products,
}) => {
  const { t } = useTranslation();

  return (
    <FormGroup className="content-per-page">
      <Label for="contentPerPage">{t("quant")}</Label>
      <Input
        id="contentPerPage"
        name="selectContentPerPage"
        type="select"
        defaultValue={4}
        onChange={(e) => changeContent(Number(e.target.value))}
      >
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={products.length}>{t("all-products")}</option>
      </Input>
    </FormGroup>
  );
};

export default ChangeContentPerPage;
