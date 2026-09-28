import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../counter/counterSlice";

const Banner = () => {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.counter.value);

  return (
    <>
      <h1>Counter One {data}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default Banner;
