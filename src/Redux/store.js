import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import * as Reducers from './reducers';
import {useSelector} from "react-redux";

const persistConfig = {
    key: 'persist-root',
    storage: storage,
};
const rootReducer = combineReducers(Reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistVar = persistStore(store);
export const getStateFromSelector =selector=>useSelector(cs => cs[selector]);
