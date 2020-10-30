import axios from 'axios';
import {FETCH_USER} from './types'


const fetchUser = () =>{

    //redux thunk use this function v1
    return function(dispatch){
        axios.get('/api/current_user')
        .then( res=> dispatch({type:FETCH_USER,payload:res}))

    }


}