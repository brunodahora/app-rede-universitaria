import React from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import Sentry from 'sentry-expo';
import createStore from './src/store/createStore';
import rootSaga from './src/store/sagas';
import { SENTRY_DSN } from './src/config';

import Main from './src/Main';

const store = createStore();

store.runSaga(rootSaga);
persistStore(store, { storage: AsyncStorage }, () => {});

export const getStore = () => store;

Sentry.config(SENTRY_DSN).install();

export default class App extends React.Component {
  componentDidMount() {
    /* eslint-disable no-undef */
    /* eslint-disable global-require */
    if (__DEV__) {
      const Reactotron = require('./src/helpers/ReactotronConfig');
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
