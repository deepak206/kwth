import {combineReducers} from 'redux';
import menuToggel from './menuToggel';
import { connectRouter } from 'connected-react-router';

export default  (history) => combineReducers({
    router: connectRouter(history),
    menuToggel,
});
