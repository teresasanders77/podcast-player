import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';

const middleware = [thunk];
const initialState = {};

export const store = createStore(rootReducer, initialState, composeWithDevTools
  (applyMiddleware(...middleware)));

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };