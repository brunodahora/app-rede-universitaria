import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import * as Sentry from "sentry-expo";
import createStore from "./src/store/createStore";
import rootSaga from "./src/store/sagas";
import { SENTRY_DSN } from "./src/config";

import Main from "./src/Main";

const { store, persistor, runSaga } = createStore();

runSaga(rootSaga);

export const getStore = () => store;

Sentry.init({
  dsn: SENTRY_DSN,
  enableInExpoDevelopment: true,
  debug: __DEV__
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}
