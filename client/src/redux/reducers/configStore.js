import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import PostsReducer from './../../layouts/HomeTemplate/Home/modules/redux/reducer';
import PostDetailReducer from './../../layouts/HomeTemplate/Detail/modules/redux/reducer';
import rootSaga from './../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

// Redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// mount it on the Store
const rootReducer = combineReducers({
  PostsReducer,
  PostDetailReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export default store;
