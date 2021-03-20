import { counterReducer } from "./reducer";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

//import { helloSaga } from "./helloSaga";
//import { incrementAsyncWatcher } from "./sagas/watchIncrement";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  counterReducer,
  {
    counter: 0
  },
  applyMiddleware(sagaMiddleware)
);

//sagaMiddleware.run(helloSaga);
sagaMiddleware.run(rootSaga);
