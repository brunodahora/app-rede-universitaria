import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import apisaucePlugin from 'reactotron-apisauce';

import { NativeModules } from 'react-native';
import url from 'url';

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

const reactotron = Reactotron
  .configure({ name: 'Rede Universitária', host: hostname })
  .useReactNative()
  .use(trackGlobalErrors())
  .use(reactotronRedux())
  .use(apisaucePlugin())
  .use(sagaPlugin());
export default reactotron;
