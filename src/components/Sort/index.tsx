import "./Sort.scss";
import { FormGroup, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../redux/slices/products";
import { useTranslation } from "react-i18next";

const Sort = () => {
  interface SortingTypes {
    name: string;
    type: "name" | "views" | "start_date" | "end_date";
    queue: string;
  }

  const sorting: SortingTypes[] = [
    {
      name: "sort-name-asc",
      type: "name",
      queue: "asc",
    },
    {
      name: "sort-name-desc",
      type: "name",
      queue: "desc",
    },
    {
      name: "sort-views-asc",
      type: "views",
      queue: "asc",
    },
    {
      name: "sort-views-desc",
      type: "views",
      queue: "desc",
    },
    {
      name: "sort-start-asc",
      type: "start_date",
      queue: "asc",
    },
    {
      name: "sort-start-desc",
      type: "start_date",
      queue: "desc",
    },
    {
      name: "sort-end-asc",
      type: "end_date",
      queue: "asc",
    },
    {
      name: "sort-end-desc",
      type: "end_date",
      queue: "desc",
    },
  ];
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div className="sort d-flex flex-row align-items-center">
      <p>{t("sort")}</p>
      <FormGroup>
        <Input id="exampleSelect" name="select" type="select">
          {sorting.map((sort) => (
            <option
              onClick={() =>
                dispatch(sortProducts({ sort: sort.type, queue: sort.queue }))
              }
            >
              {t(sort.name)}
            </option>
          ))}
        </Input>
      </FormGroup>
    </div>
  );
};

export default Sort;
