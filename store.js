import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

// eslint-disable-next-line no-unused-vars
import rootReducer, { initialState } from './reducer';
import rootSaga from './sagas/saga';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// eslint-disable-next-line no-shadow,no-use-before-define
function configureStore(initialState = initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
