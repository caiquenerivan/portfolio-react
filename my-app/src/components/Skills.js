import React, { Component } from 'react';
import '../style/skills.scss';
import Carousel from './Carousel';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowPrevious from "../imgs/arrow-previous.svg";
import ArrowNext from "../imgs/arrow-next.svg";

const ArrowButton = ({ imgSrc, imgAlt, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        style={{
          width: "30px",
          cursor: "pointer",
          height: "30px",
        }}
      />
    </button>
  );
};

export default function Skills() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <ArrowButton imgSrc={ArrowPrevious} imgAlt="previous-button" />,
        nextArrow: <ArrowButton imgSrc={ArrowNext} imgAlt="next-button" />
    };


    return (
        <div id="skills">
            <div className="skills">
                <h1>SKILLS</h1>

                <div className="carousel">
                    <Slider {...settings} className="slider">
                        <div className="item">
                            <Carousel 
                                title="title" 
                                desc="Lorem culpa consequat officia sint dolore sint nulla exercitation. Magna pariatur laborum commodo in fugiat voluptate consequat culpa."
                            />
                        </div>
                        <div className="item">
                            <Carousel 
                                title="title" 
                                desc="Lorem culpa consequat officia sint dolore sint nulla exercitation. Magna pariatur laborum commodo in fugiat voluptate consequat culpa."
                            />
                        </div>
                        <div className="item">
                            <Carousel 
                                title="title" 
                                desc="Lorem culpa consequat officia sint dolore sint nulla exercitation. Magna pariatur laborum commodo in fugiat voluptate consequat culpa."
                            />
                        </div>
                        <div className="item">
                            <Carousel 
                                title="title" 
                                desc="Lorem culpa consequat officia sint dolore sint nulla exercitation. Magna pariatur laborum commodo in fugiat voluptate consequat culpa."  
                            />
                        </div>
                        <div className="item">
                            <Carousel 
                                title="title" 
                                desc="Lorem culpa consequat officia sint dolore sint nulla exercitation. Magna pariatur laborum commodo in fugiat voluptate consequat culpa."
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}