import React from 'react';
import '../style/skills.scss';
import Carousel from './Carousel';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import sass from '../imgs/sass.svg';
import css from '../imgs/css.png';
import html from '../imgs/html.png';
import js from '../imgs/js.png';
import ts from '../imgs/ts.png';
import bootstrap from '../imgs/bootstrap.png';
import react from '../imgs/react.png';
import sc from '../imgs/sc.png';
import node from '../imgs/nodejs.png';
import java from '../imgs/java.png';
import git from '../imgs/git.png';



export default function Skills() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div id="skills">
            <div className="skills">
                <h1>SKILLS</h1>

                <div className="carousel">
                    <Slider {...settings} className="slider">
                        <div className="item">
                            <Carousel
                                imagem={html}
                                title="HTML5"
                            />
                        </div>
                        <div className="item">
                            <Carousel
                                imagem={css}
                                title="CSS3"
                            />
                        </div>
                        <div className="item">
                            <Carousel
                                imagem={js}
                                title="Javascript"
                            />
                        </div>
                        <div className="item">
                            <Carousel
                                imagem={ts}
                                title="Typescript"
                            />
                        </div>
                        <div className="item">
                            <Carousel
                                imagem={sass}
                                title="SASS/SCSS"
                            />
                        </div>
                        <div className="item">
                            <Carousel
                                imagem={bootstrap}
                                title="Bootstrap"
                            />
                        </div>
                        <div className="item">
                            <Carousel
                                imagem={react}
                                title="ReactJS"
                            />
                        </div>
                        <div className="item">
                            <Carousel
                                imagem={sc}
                                title="Styled Components"
                            />
                        </div>
                        <div className="item">
                            <Carousel
                                imagem={node}
                                title="NodeJS"
                            />
                        </div>
                        <div className="item">
                            <Carousel
                                imagem={java}
                                title="Java"
                            />
                        </div>
                        <div className="item">
                            <Carousel
                                imagem={git}
                                title="Git"
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}