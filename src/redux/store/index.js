import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

const configureStore = (history) => {
    const sagaMiddleware = createSagaMiddleware();
    const routerMiddleware = createRouterMiddleware(history);
    const reducers = rootReducer(history);
  
    const configStore = createStore(reducers, applyMiddleware(routerMiddleware, sagaMiddleware));
  
    sagaMiddleware.run(rootSaga);
  
    return configStore;
  };

export default configureStore;
