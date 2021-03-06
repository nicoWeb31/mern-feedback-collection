import axios from 'axios';
import { FETCH_USER, FETCH_SURVEY } from './types'

//fetch user
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data })
}



//envoie le token de stripe en bdd et recuper le users maj
export const handleToken = (token) => async dispatch=>{
    const res = await axios.post('/api/stripe', token);
    dispatch({type: FETCH_USER, payload: res.data})
}


export const submitSurvey = (surveys,history) => async dispatch =>{

    const res = await axios.post('/api/surveys',surveys);
    history.push('/surveys');//redirect

    dispatch({type:FETCH_USER,payload: res.data});

}

export const fetchAllSurvey = () => async dispatch=>{

    const res = await axios.get('/api/surveys');
    dispatch({type: FETCH_SURVEY,payload:res.data})
}