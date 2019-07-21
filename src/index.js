import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import 'antd/dist/antd.css'
import './main.scss'

import App from './components/App'
import { store, persistor } from './store/configureStore'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
serviceWorker.unregister()
