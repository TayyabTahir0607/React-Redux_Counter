import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};
const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type == "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type == "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type == "ADDITION") {
    return { ...store, counter: store.counter + parseInt(action.payload.val) };
  } else if (action.type == "SUBTRACTION") {
    return { counter: store.counter - action.payload.val };
  } else if (action.type === "PRIVACY") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
