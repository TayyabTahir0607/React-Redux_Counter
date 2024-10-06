import { useRef } from "react";
import { useDispatch } from "react-redux";

const Buttons = () => {
  const inputEle = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
    {
      console.log("inc clicked");
    }
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
    {
      console.log("dec clicked");
    }
  };
  const handleAddition = () => {
    dispatch({ type: "ADDITION", payload: { val: inputEle.current.value } });
  };
  const handleSubtraction = () => {
    dispatch({ type: "SUBTRACTION", payload: { val: inputEle.current.value } });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-dark btn-lg px-4"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-4 gap-3"
          onClick={handleAddition}
        >
          Addition
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubtraction}
        >
          Subtraction
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input
          type="text"
          placeholder=" number"
          className="btn-lg px-4"
          ref={inputEle}
        />
      </div>
    </>
  );
};
export default Buttons;
