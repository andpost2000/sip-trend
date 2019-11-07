import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import routReducer from '../reducers/';
import { saga } from '../sagas/sagas';

interface RootState {
  data: {} | null,
  loadStatus: null | string,
  value: number,
}

interface MutableState {
  root: Readonly<RootState>;
}

export type State = Readonly<MutableState>;

const sagaMiddleware = createSagaMiddleware();

const reducers = {
  // ваши редюсеры
  form: formReducer,     // В state все данные формы будут храниться в свойстве form
  root: routReducer
}

const reducer = combineReducers(reducers)
const store = createStore(
  reducer,
  applyMiddleware(createLogger(), sagaMiddleware)
);
sagaMiddleware.run(saga);

export default store;

