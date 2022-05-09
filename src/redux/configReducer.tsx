import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';
import profileReducer from './reducer/profileReducer';
const sagaMiddleware = createSagaMiddleware();
const rootReducers = combineReducers({
  profileReducer

})


const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store;
export type State =  ReturnType<typeof rootReducers>
