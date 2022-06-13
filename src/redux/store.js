import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import bookReducer from "./book/BookReduce";
import mySaga from "./Sagas";


const sagaMiddleware = createSagaMiddleware()
export const store = createStore(bookReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)
// export const store = createStore(bookReducer)