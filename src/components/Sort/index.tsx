import "./Sort.scss";
import { FormGroup, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../redux/slices/products";
import { useTranslation } from "react-i18next";
import { SortPayload } from "../../@types";

const Sort = () => {
  // interface SortingTypes {
  //   name: string;
  //   type: string;
  //   queue: string;
  // }

  const sorting: SortPayload[] = [
    {
      type: "sort-name-asc",
      sort: "name",
      queue: "asc",
    },
    {
      type: "sort-name-desc",
      sort: "name",
      queue: "desc",
    },
    {
      type: "sort-views-asc",
      sort: "views",
      queue: "asc",
    },
    {
      type: "sort-views-desc",
      sort: "views",
      queue: "desc",
    },
    {
      type: "sort-start-asc",
      sort: "start_date",
      queue: "asc",
    },
    {
      type: "sort-start-desc",
      sort: "start_date",
      queue: "desc",
    },
    {
      type: "sort-end-asc",
      sort: "end_date",
      queue: "asc",
    },
    {
      type: "sort-end-desc",
      sort: "end_date",
      queue: "desc",
    },
  ];
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div className="sort d-flex flex-row align-items-center">
      <p>{t("sort")}</p>
      <FormGroup>
        <Input
          id="SortBySelect"
          name="SortBySelect"
          type="select"
          onChange={(e) => dispatch(sortProducts(JSON.parse(e.target.value)))}
        >
          {sorting.map((sort, index) => (
            <option
              key={index}
              value={JSON.stringify({ sort: sort.sort, queue: sort.queue })}
            >
              {t(sort.type!)}
            </option>
          ))}
        </Input>
      </FormGroup>
    </div >
  );
};

export default Sort;
