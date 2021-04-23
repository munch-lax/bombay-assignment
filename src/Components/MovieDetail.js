import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Detaildiv, Imagediv ,Contentdiv} from './StyledComponents'
import {fetchMovie} from '../actions'


class MovieDetail extends Component {

    componentDidMount(){
        this.props.fetchMovie(this.props.match.params.id)
    }

    render() {
        return (
            this.props.movie?<Detaildiv>
                
            <Imagediv imag={this.props.movie.backdrop}>

            </Imagediv>
            <Contentdiv>
                <h2 style={{position:'relative',marginLeft:10}}>{this.props.movie.title} ({this.props.movie.imdb_rating})</h2>
                <h3 style={{position:'relative',marginTop:10,marginLeft:10}}>{this.props.movie.released_on.slice(0,5)} | {this.props.movie.length} | {this.props.movie.director}</h3>
                <h3 style={{position:'relative',marginTop:0,marginLeft:10}}> Cast :{
                    this.props.movie.cast.reduce((acc,obj)=>{return (obj+" "+acc)})
                }</h3>
                <p  style={{position:'relative',marginTop:0,marginLeft:10,fontSize:16,marginRight:350}}>
                    Movie Description : {this.props.movie.overview}

                </p>
            </Contentdiv>
        </Detaildiv>:<div>Loading...</div>
        )
    }
}

const mapstatetoprops=(state)=>{
    console.log(state)
    if(state.data.backdrop){
        console.log('i am here')
        return{movie:state.data}}
    else{
        
        return null
    }
}


export default connect(mapstatetoprops,{fetchMovie})(MovieDetail)
