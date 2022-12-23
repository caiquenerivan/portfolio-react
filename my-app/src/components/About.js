import React from 'react';
import '../style/about.scss';
import eu from "../imgs/eu.jpg";



export default function About() {


    return (
        <div className="sobre">
            <div id="about">
                <h1>Sobre Mim</h1>
                <div className="content">
                    <p>
                    Anim tempor consectetur et do nostrud nostrud. Lorem ad mollit mollit duis. Labore et adipisicing reprehenderit ea quis voluptate duis fugiat officia esse dolore labore. Eiusmod pariatur ullamco exercitation culpa ipsum aliquip proident occaecat magna eu aute occaecat exercitation.Anim tempor consectetur et do nostrud nostrud. Lorem ad mollit mollit duis. Labore et adipisicing reprehenderit ea quis voluptate duis fugiat officia esse dolore labore. Eiusmod pariatur ullamco exercitation culpa ipsum aliquip proident occaecat magna eu aute occaecat exercitation.
                    </p>
                    <img src={eu} alt="foto de caique nerivan"/>
                </div>
            </div>

            <div id="contato">
                <h1>Contato</h1>
                <div className=".contatos">
                    <div className="dados">
                        <p>Email:</p>
                        <p>caiquenerivansantos@gmail.com</p>
                    </div>
                    <div className="dados">
                        <p>Telefone:</p>
                        <p>+55 (11) 94706-5991</p>
                    </div>
                    <div className="dados">
                        <p>LinkedIn:</p>
                        <a href="https://www.linkedin.com/in/caiquenerivan/">Meu LinkedIn</a>
                    </div>
                    <div className="dados">
                        <p>GitHub:</p>
                        <a href="https://github.com/caiquenerivan">Meu github</a>
                    </div>
                </div>
            </div>
        </div>
    );
}