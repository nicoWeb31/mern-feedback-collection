import { combineReducers } from 'redux';
import authReducer from './authReducer';
import surveyReducer  from './surveyReducer' 

//redux form
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
    authR: authReducer,
    form: formReducer,       //form name obligation 
    surveys: surveyReducer
})