import axios from 'axios'
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const fetchMovies = ()=> async dispatch=>{

    
    const response = await axios.get('https://wookie.codesubmit.io/movies',{headers:{
        'Authorization': 'Bearer Wookie2019' ,
            'Accept': 'application/json',
        'Content-Type': 'application/json',
    }})
    
    dispatch({type:'FETCH_MOVIES',payload:response.data})
}