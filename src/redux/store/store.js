import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);
export {store, persistor};
