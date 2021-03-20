import {
  INCREMENT,
  DECREMENT,
  INCREMENT_ASYNC,
  DECREMENT_ASYNC
} from "./types";

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function incrementAsync() {
  return {
    type: INCREMENT_ASYNC
  };
}

export function decrementAsync() {
  return {
    type: DECREMENT_ASYNC
  };
}
