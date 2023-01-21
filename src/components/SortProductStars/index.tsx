import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sortByStars } from "../../redux/slices/products";
import "./SortProductStars.scss";
const SortProductStars = () => {
  const [value, setValue] = useState<number | null>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortByStars(value));
  }, [value]);

  return (
    <div className="sort-stars mb-3">
      <Typography component="legend">Сортировка по кол-ву звезд</Typography>
      <Rating
        name="stars-sort"
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
      />
    </div>
  );
};

export default SortProductStars;
