import axios from 'axios';
import { FETCH_USER,SUBMIT_SURVEY } from './types'

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


export const submitSurvey = (surveys)=>async dispatch =>{

    const res = await axios.post('/api/surveys')
    dispatch({type:SUBMIT_SURVEY,payload: res.data})
}