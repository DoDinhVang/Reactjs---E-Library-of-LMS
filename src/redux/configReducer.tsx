import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';
import profileReducer from './reducer/profileReducer';
import ModalReducer from './reducer/ModalReducer';
const sagaMiddleware = createSagaMiddleware();
const rootReducers = combineReducers({
  profileReducer,
  ModalReducer

})


const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store;
export type State =  ReturnType<typeof rootReducers>
