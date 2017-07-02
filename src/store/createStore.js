import Reactotron from 'reactotron-react-native'
import { applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore as store, autoRehydrate } from 'redux-persist'
import reducers from './reducers'

export default () => {
  const sagaMonitor = Reactotron.createSagaMonitor()
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers').default

      store.replaceReducer(nextRootReducer)
    })
  }

  // todo: isso tá demasiado complexo (funções aninhadas)
  // eslint-disable-next-line
  const sagaFailMiddleware = ({ dispatch }) => next => (action) => {
    try {
      next(action)
    } catch (e) {
      setTimeout(() => {
        throw e
      })
    }
  }

  return {
    ...Reactotron.createStore(
      reducers,
      compose(
        applyMiddleware(sagaMiddleware),
        autoRehydrate(),
      ),
    ),
    runSaga: sagaMiddleware.run,
  }
}
