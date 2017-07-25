/* eslint-disable */
let reactotron = {};

if (__DEV__) {
  const Reactotron = require('reactotron-react-native').default;
  const { trackGlobalErrors } = require('reactotron-react-native');
  const apisaucePlugin = require('reactotron-apisauce');
  const { reactotronRedux } = require('reactotron-redux');
  const sagaPlugin = require('reactotron-redux-saga');

  const { NativeModules } = require('react-native');
  const url = require('url');

  const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

  reactotron = Reactotron
    .configure({ name: 'Rede Universitária', host: hostname })
    .useReactNative()
    .use(trackGlobalErrors())
    .use(reactotronRedux())
    .use(apisaucePlugin())
    .use(sagaPlugin());
}

export default reactotron;
