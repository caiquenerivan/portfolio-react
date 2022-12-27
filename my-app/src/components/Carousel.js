import React from 'react';
import '../style/carousel.scss';


export default function Carousel({...props}) {


    return (
        <div id="carousel">
            <img src={props.imagem}/>
            <h1>{props.title}</h1>
        </div>
    );
}