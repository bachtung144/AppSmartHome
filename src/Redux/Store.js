import {rootReducer} from './Combine';
import {createStore} from 'redux';
export const store = createStore(rootReducer);
