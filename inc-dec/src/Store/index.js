import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
};
const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type == "INCREMENT") {
    return { counter: store.counter + 1 };
  } else if (action.type == "DECREMENT") {
    return { counter: store.counter - 1 };
  } else if (action.type == "ADDITION") {
    return { counter: store.counter + parseInt(action.payload.val) };
  } else if (action.type == "SUBTRACTION") {
    return { counter: store.counter - action.payload.val };
  }
  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
