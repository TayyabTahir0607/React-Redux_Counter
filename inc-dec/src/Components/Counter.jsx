import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  return <p className="lead mb-4">Counter value: {counter}</p>;
};
export default Counter;
