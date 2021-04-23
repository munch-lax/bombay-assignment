import styled from 'styled-components'


export const Mydiv = styled.div`
position: relative;
top:0px;
left: -6px;
width: 101%;
height: 5.5rem;
border-bottom: 3px solid black;
font-family: "Times New Roman", Times, serif;
background-color:#d8d8d8;



`

 export const Brand = styled.div`
position:relative;
top: 18px;
left: 40px;
font-size: 27px;
font-weight:1px;
width: 10rem;
letter-spacing: 2px;
color:black



`

export const Detaildiv = styled.div`
position:relative;
height:89vh;
width: 100%;




`
export const Imagediv = styled.div`
position:relative;
height:500px;
width: 300px;
background-image:url(${props=>props.imag});
background-size:300px 500px;
top:10%;
left:2%;
border-style:2px solid black;
`
export const Contentdiv = styled.div`
position:relative;
top:-440px;
left:25%;
height:500px;
width:100%;



`
export const Slidediv = styled.div`
position:relative;
width:220px;
height:110px;
background-size:200px 110px;
background-image:url(${props=>props.image});
opacity: 0.75;
color :white;
font-size:13px;
letter-spacing:0.5px;

:hover{
    
    width:240px;
    height:130px;
    background-size:240px 130px;

    
    
`