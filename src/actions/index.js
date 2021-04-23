import axios from 'axios'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import _, { keys } from 'lodash'

export const fetchMovies = (id='')=> async dispatch=>{
    
    
    const response = await axios.get(`https://wookie.codesubmit.io/movies${id}`,{headers:{
        'Authorization': 'Bearer Wookie2019' ,
            'Accept': 'application/json',
        'Content-Type': 'application/json',
    }})

    console.log(response.data,'response')
    
    const getData=(genre)=>{
        var action=[] // getting indiviual data objects of a genre
        action.push(genre)
        let grouped_data = _.groupBy(response.data.movies, 'genres')
    
        for (var k in grouped_data){
        if(k.includes(genre))
            {
            grouped_data[k].map(obj=>{
                action.push(obj)
                
        })}
        }
        return action
    }
     
    let grouped_data = _.groupBy(response.data.movies, 'genres')
    var keys=[] // code to find all the unique genre
    for (var k in grouped_data){
        var words = k.split(",")
        words.map(key=>{
            keys.push(key)
        })
        
    }
    let uniqueKeys = [...new Set(keys)]
    

    var finaldata=[] // getting indiviual genre data and pushing it one array
    uniqueKeys.map(genre=>{
        let value=getData(genre)
        finaldata.push(value)
    })
    finaldata.sort(function(a,b){return b.length-a.length})
    dispatch({type:'FETCH_MOVIES',payload:finaldata})
    
}


export const fetchMovie = (id)=> async dispatch=>{

    
    const response = await axios.get(`https://wookie.codesubmit.io/movies`,{headers:{
        'Authorization': 'Bearer Wookie2019' ,
            'Accept': 'application/json',
        'Content-Type': 'application/json',
    }})

    for (var obj in response.data.movies){
    if(response.data.movies[obj].id===id){
        var movie=response.data.movies[obj];
        break;
    }
    }
    dispatch({type:'FETCH_MOVIE',payload:movie})
    
}