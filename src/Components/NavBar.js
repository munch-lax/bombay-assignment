import React, { useState } from 'react'
import{Mydiv,Brand} from './StyledComponents'
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';
import { fetchMovies } from '../actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
function NavBar() {

    const [keyword, setkeyword] = useState('')
    let history = useHistory()
    const dispatch = useDispatch()
    const submitHandler=(e)=>{
        e.preventDefault()
        if(keyword){
            history.push(`/?q=${keyword}`)
            dispatch(fetchMovies(`/?q=${keyword}`))
        }
        else{
            history.push(history.push(history.location.pathname))
        }
        
    }
    return (
        <Mydiv id="topBar">
            <Link to='/'><Brand id='brand'>
                WOOKIE<br></br>MOVIES
            </Brand>
            </Link>
            <input style={{position:'relative',float:'right',padding:5,marginRight:'2rem',marginTop:-12,width:300}} onChange={(e)=>{setkeyword(e.target.value)}}/>
            <i class="horizontally flipped large search icon" style={{position:'relative',float:'right',padding:5,marginRight:'1rem',marginTop:-12,cursor:'pointer'}} onClick={submitHandler}/>
        </Mydiv>
    )
}

export default NavBar
