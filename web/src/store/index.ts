import { ReactReduxContextValue } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

const store: ReactReduxContextValue = createStore(reducer);
export default store;