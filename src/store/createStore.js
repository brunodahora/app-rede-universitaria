import Reactotron from 'reactotron-react-native';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore as store, autoRehydrate } from 'redux-persist';
import reducers from './reducers';

export default () => {
  let sagaMiddleware = createSagaMiddleware();

  /* eslint-disable no-undef */
  if (__DEV__) {
    const sagaMonitor = Reactotron.createSagaMonitor();
    sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  }

  /* eslint-disable global-require */
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  // todo: isso tá demasiado complexo (funções aninhadas)
  // eslint-disable-next-line
  const sagaFailMiddleware = ({ dispatch }) => next => (action) => {
    try {
      next(action);
    } catch (e) {
      setTimeout(() => {
        throw e;
      });
    }
  };

  if (__DEV__) {
    return {
      ...Reactotron.createStore(
        reducers,
        compose(
          applyMiddleware(sagaMiddleware),
          autoRehydrate({ log: true }),
        ),
      ),
      runSaga: sagaMiddleware.run,
    };
  }

  return {
    ...createStore(
    reducers,
      compose(
        applyMiddleware(sagaMiddleware),
        autoRehydrate(),
      ),
    ),
    runSaga: sagaMiddleware.run,
  };
};
