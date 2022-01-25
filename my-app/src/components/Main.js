import React from 'react';
import '../style/main.scss';
import titulo from '../imgs/titulo.png';
import behance from '../imgs/behance-144.png';
import linkedin from '../imgs/linkedin-240.png';
import github from '../imgs/github-384.png';
import instagram from '../imgs/instagram-384.png';
import artstation from '../imgs/artstation.svg';

export default function Main() {


    return (
        <div>
            <div className="navbar">
                <div className="title">
                    <img src={titulo} alt="cn."/>
                </div>
                <div className="menu">
                    <ul>
                        <li>Home</li>
                        <li>Skills</li>
                        <li>Portfolio</li>
                        <li>Sobre</li>
                        <li>Contato</li>
                    </ul>
                </div>
                <div id="social-media">
                    <ul>
                        <li><img src={linkedin} alt="linkedin"/></li>
                        <li><img src={github} alt="github"/></li>
                        <li><img src={behance} alt="behance"/></li>
                        <li><img src={instagram} alt="instagram"/></li>
                        <li><img src={artstation} alt="artstation"/></li>
                    </ul>
                </div>
            </div>
            <div className="principal">
                <h1>CAIQUE <br/>NERIVAN</h1>
            </div>
        </div>
    );
}