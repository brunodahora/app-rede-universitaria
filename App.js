import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import Sentry from 'sentry-expo';
import createStore from './src/store/createStore';
import rootSaga from './src/store/sagas';
import Reactotron from './src/helpers/ReactotronConfig';
import { SENTRY_DSN } from './src/config';

import Main from './src/Main';

const store = createStore();

store.runSaga(rootSaga);
if (typeof self === 'object') persistStore(store);

export const getStore = () => store;

Sentry.config(SENTRY_DSN).install();

export default class App extends React.Component {
  componentDidMount() {
    /* eslint-disable no-undef */
    if (__DEV__) {
      Reactotron.connect();
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
