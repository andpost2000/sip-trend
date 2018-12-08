import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { createLogger } from "redux-logger";
import routReducer from '../reducers/';

const reducers = {
  // ваши редюсеры
  form: formReducer,     // В state все данные формы будут храниться в свойстве form
  root: routReducer
}

const reducer = combineReducers(reducers)
const store = createStore(reducer, applyMiddleware(createLogger()));

export default store;

