import React, { Component } from 'react'
import { fetchMovies } from "../actions";
import {connect} from 'react-redux'
import SimpleSlider from './Slider';




 class MovieList extends Component {
    
    componentDidMount(){
        let keyword=this.props.history.location.search
        console.log(keyword)
        this.props.fetchMovies(keyword)
    }

    componentDidUpdate(){
        let keyword=this.props.history.location.search
        console.log(keyword)
        this.props.fetchMovies(keyword)
    }
    
    render() {
        
        
        return (
            <div>
                {
                    this.props.movies?

                        this.props.movies.map(data=>{
                            return(
                                <SimpleSlider data={data}/>
                            )
                        })
                    :<div></div>

                }
                
                
            </div>
        )
    }
}

const mapstatetoprops=(state)=>{
    
    if(state.data.length>1){
        
        return{movies:state.data}}
    else{
        
        return null
    }
}


export default connect(mapstatetoprops,{fetchMovies})(MovieList)
