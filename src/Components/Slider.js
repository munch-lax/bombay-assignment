import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React from "react";
import Slider from "react-slick";
import { Slidediv } from "./StyledComponents";
import { Link, useHistory } from "react-router-dom";

export default function SimpleSlider(props) {
    var history=useHistory()
    var autoplay=true
    if(history.location.search.length>2){
      autoplay=false
    }
    var show = props.data.length>5?5:1
  var settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: show,
    slidesToScroll: 2,
    autoplay:autoplay,
    swipeToSlide:true,
    
  };
  if(props.data){
      
      var mappeddata=props.data.slice(1,)
      
  }

  
  return (
      <div style={{marginTop:20}}>
        {props.data?<div><h3>{props.data[0]}</h3>
        <Slider {...settings}>
            {mappeddata.map(value=>{
                return(
                <Link to={`/movie/${value.id}`}>
                    <Slidediv image={value.backdrop}>
                    <p style={{position:'relative',float:'left', marginTop:'40%',opacity:1}}>{value.title}</p>
                    </Slidediv>
                </Link>)
            })}
        
      
        </Slider></div>:<div></div>}
       </div>
  )
}