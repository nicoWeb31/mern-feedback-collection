import axios from 'axios';
import {FETCH_USER} from './types'

//version non refacto redux thunk is call in middleweare and use the function inside action.And dispatch 
export const fetchUser = () =>{

    //redux thunk use this function v1
    return function(dispatch){
        axios.get('/api/current_user')
        .then(res=> dispatch({type:FETCH_USER,payload:res}))
        .catch(err=>console.log(err))
    }


}