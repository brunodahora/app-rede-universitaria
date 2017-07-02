import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import createStore from './src/store/createStore'
import rootSaga from './src/store/sagas'
import './src/helpers/ReactotronConfig'

import Main from './src/Main'

export const store = createStore()

export const getStore = () => store

store.runSaga(rootSaga)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore()}>
        <Main />
      </Provider>
    );
  }
}
