import React from 'react'
import { fetchMovies } from "../actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


function MovieList() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchMovies())
    },[])


    return (
        <div>
            <h1>This is home Page</h1>
        </div>
    )
}

export default MovieList
