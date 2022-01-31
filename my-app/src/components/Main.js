import React from 'react';
import '../style/main.scss';
import titulo from '../imgs/titulo.png';
import behance from '../imgs/behance-144.png';
import linkedin from '../imgs/linkedin-240.png';
import github from '../imgs/github-384.png';
import instagram from '../imgs/instagram-384.png';
import artstation from '../imgs/artstation.svg';
import button from '../imgs/button.svg';

export default function Main({...props}) {


    return (
        <div>
            <div className="navbar">
                <div className="title">
                    <img src={titulo} alt="cn."/>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Skills</a></li>
                        <li><a href='#'>Portfolio</a></li>
                        <li><a href='#'>Sobre</a></li>
                        <li><a href='#'>Contato</a></li>
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
                <h2>FRONT-END DEVELOPER</h2>
                <div id="botao">
                    <img src={button} alt="botão"/>
                </div>
            </div>
        </div>
    );
}