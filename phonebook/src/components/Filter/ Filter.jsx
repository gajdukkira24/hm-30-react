import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setFilter } from "../../redux/filtersSlice";
import css from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
}