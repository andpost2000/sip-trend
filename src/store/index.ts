import { applyMiddleware, createStore } from 'redux';
import { createLogger } from "redux-logger";
import routReducer from '../reducers/';

const store = createStore(routReducer, applyMiddleware(createLogger()));

export default store;


// import { createStore } from 'redux';
// import rootReducer from '../redux';
// import { FieldState } from '../redux/field';

// /**
//  * Интерфейс хранилища будет использоваться в каждом mapStateToProps, 
//  * и в остальных местах, где мы напрямую получаем состояние хранилища 
//  * (например, в асинхронных действиях с redux-thunk)
//  */
// export interface Store {
//     field: FieldState
// }

// /**
//  * Этот же интерфейс указывается в качестве состояния при инициализации хранилища.
//  */
// const configureStore = (initialState?: Store) => {
//     return createStore(
//         rootReducer,
//         initialState,
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// };

// export default configureStore;