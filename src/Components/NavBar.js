import React from 'react'
import{Mydiv,Brand} from './StyledComponents'
import SearchIcon from '@material-ui/icons/Search';
function NavBar() {
    return (
        <Mydiv id="topBar">
            <Brand id='brand'>
                WOOKIE<br></br>MOVIES
            </Brand>
            <input style={{position:'relative',float:'right',padding:5,marginRight:'2rem',marginTop:-22,width:300}}/>
            <SearchIcon fontSize='large' style={{position:'relative',float:'right',padding:5,marginRight:'1rem',marginTop:-22}}/>
        </Mydiv>
    )
}

export default NavBar
