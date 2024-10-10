import { useRef } from "react";
import { useDispatch } from "react-redux";

const Buttons = () => {
  const inputEle = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAddition = () => {
    dispatch({ type: "ADDITION", payload: { val: inputEle.current.value } });
    inputEle.current.value = "";
  };
  const handleSubtraction = () => {
    dispatch({ type: "SUBTRACTION", payload: { val: inputEle.current.value } });
    inputEle.current.value = "";
  };
  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY" });
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
          className="btn btn-secondary btn-lg px-4"
          onClick={handlePrivacy}
        >
          Toggle privacy
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input
          type="text"
          class="form-control box"
          id="floatingInput"
          placeholder="Number"
          ref={inputEle}
          style={{ width: "30%" }}
        />
        <button
          type="button"
          className="btn btn-warning btn-lg px-4 gap-3 box"
          onClick={handleAddition}
        >
          Addition
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4 box"
          onClick={handleSubtraction}
        >
          Subtraction
        </button>
      </div>
    </>
  );
};
export default Buttons;
