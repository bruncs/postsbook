import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import history from '../history';
import rootReducer from './ducks';
import sagas from './sagas';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

middlewares.push(routerMiddleware(history));
middlewares.push(sagaMiddleware);

/* eslint-disable */
const composeSetup =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/* eslint-enable */

const store = createStore(
  connectRouter(history)(persistedReducer),
  composeSetup(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
