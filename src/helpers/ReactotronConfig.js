import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import apisaucePlugin from 'reactotron-apisauce';

const reactotron = Reactotron.configure({ name: 'Rede Universitária' })
  .useReactNative()
  .use(trackGlobalErrors())
  .use(reactotronRedux())
  .use(apisaucePlugin())
  .use(sagaPlugin());
export default reactotron;
