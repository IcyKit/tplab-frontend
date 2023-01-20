import "./Sort.scss";
import { FormGroup, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../redux/slices/products";

const Sort = ({ setSort }) => {
  const sorting = [
    {
      name: "по названию (ASC)",
      type: "name",
      queue: "asc",
    },
    {
      name: "по названию (DESC)",
      type: "name",
      queue: "desc",
    },
    {
      name: "по просмотрам (ASC)",
      type: "views",
      queue: "asc",
    },
    {
      name: "по просмотрам (DESC)",
      type: "views",
      queue: "desc",
    },
    {
      name: "по дате начала (ASC)",
      type: "start_date",
      queue: "asc",
    },
    {
      name: "по дате начала (DESC)",
      type: "start_date",
      queue: "desc",
    },
    {
      name: "по дате окончания (ASC)",
      type: "end_date",
      queue: "asc",
    },
    {
      name: "по дате окончания (DESC)",
      type: "end_date",
      queue: "desc",
    },
  ];

  const dispatch = useDispatch();

  return (
    <div className="sort d-flex flex-row align-items-center">
      <p>Сортировать:</p>
      <FormGroup>
        <Input id="exampleSelect" name="select" type="select">
          {sorting.map((sort) => (
            <option
              onClick={() =>
                dispatch(sortProducts({ sort: sort.type, queue: sort.queue }))
              }
            >
              {sort.name}
            </option>
          ))}
        </Input>
      </FormGroup>
    </div>
  );
};

export default Sort;
