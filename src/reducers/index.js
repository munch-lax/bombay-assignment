import {reducer as formReducer} from 'redux-form'
import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'


export default combineReducers({
    data:moviesReducer,
    
    
})