import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['podcasts']
}

const rootReducer = combineReducers({
  podcasts: searchReducer
})

export default persistReducer(persistConfig, rootReducer);