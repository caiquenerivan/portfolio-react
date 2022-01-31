import React from 'react';
import '../style/carousel.scss';


export default function Carousel({...props}) {


    return (
        <div id="carousel">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    );
}