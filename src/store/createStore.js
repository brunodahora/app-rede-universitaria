import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import reducers from "./reducers";

export default () => {
  let sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)));
  const persistor = persistStore(store);

  return {
    store,
    persistor,
    runSaga: sagaMiddleware.run
  };
};
