import Reactotron, { trackGlobalErrors } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

Reactotron.configure({ name: 'Rede Universitária' })
  .use(trackGlobalErrors())
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect()
