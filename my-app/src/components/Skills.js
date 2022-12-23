import React from 'react';
import '../style/skills.scss';
import Carousel from './Carousel';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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