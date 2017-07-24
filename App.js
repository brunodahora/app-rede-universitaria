import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import Sentry from 'sentry-expo';
import createStore from './src/store/createStore';
import rootSaga from './src/store/sagas';
import Reactotron from './src/helpers/ReactotronConfig';

import Main from './src/Main';

const store = createStore();

store.runSaga(rootSaga);
if (typeof self === 'object') persistStore(store);

export const getStore = () => store;

Sentry.config('https://ba14379aab3d432cb98d7db6061d916f:3a079af9c532498d9ef9464f004a11ed@sentry.io/194916').install();

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
