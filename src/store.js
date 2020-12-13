import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e)
  }
}

const middleware = [thunk];
const initialState = {};

const store = createStore(rootReducer, initialState, composeWithDevTools
  (applyMiddleware(...middleware)));

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;