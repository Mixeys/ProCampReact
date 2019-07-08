import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { store } from './store/configureStore'
import { Provider } from 'react-redux'

import 'antd/dist/antd.css'
import './main.scss'

import App from './components/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
serviceWorker.unregister()
