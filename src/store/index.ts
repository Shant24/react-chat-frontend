/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware, Middleware, Dispatch, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducers from './reducers';
import rootSagas from './sagas';

const environment = process.env.NODE_ENV || 'development';

const sagaMiddleware = createSagaMiddleware();

const middlewaresArr: Middleware<{}, any, Dispatch<AnyAction>>[] = [sagaMiddleware];

if (environment === 'development') {
  middlewaresArr.push(logger);
}

const middlewares = applyMiddleware(...middlewaresArr);

let store = createStore(rootReducers, middlewares);

if (environment === 'development') {
  store = createStore(rootReducers, composeWithDevTools(middlewares));
}

sagaMiddleware.run(rootSagas);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
