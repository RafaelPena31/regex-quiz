import AsyncStorage from '@react-native-community/async-storage'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import rootReducer from './reducers'

const persistConfig = {
  key: 'rootReduxStore',
  storage: AsyncStorage,
  whitelist: ['user', 'article']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware)))
const persistor = persistStore(store)

export default { store, persistor }
