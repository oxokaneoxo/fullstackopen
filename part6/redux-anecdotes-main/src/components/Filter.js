import { useDispatch } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    //console.log(event.target.value);
    dispatch(setFilter(event.target.value));
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      <span>Filter</span>
      <input onChange={handleChange} />
    </div>
  )
}

export default Filter