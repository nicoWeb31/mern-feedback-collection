import { combineReducers } from 'redux';
import authReducer from './authReducer';

//redux form
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
    authR: authReducer,
    form: formReducer       //form name obligation 
})