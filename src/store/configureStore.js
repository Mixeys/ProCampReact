import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = persistReducer(persistConfig, rootReducer)

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger))

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
