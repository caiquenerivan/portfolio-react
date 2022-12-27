import React from 'react';
import '../style/about.scss';
import eu from "../imgs/eu.jpg";



export default function About() {


    return (
        <div className="sobre">
            <div id="about">
                <h1>Sobre Mim</h1>
                <div className="content">
                    <div>
                        <p>Olá, sou o Caique Nerivan. </p>
                        <p>Formado em análise e desenvolvimento de sistemas pela Faculdade Impacta de Tecnologia, formação entre janeiro de 2015 e junho de 2017. </p>
                        <p>Depois de formado, estudei na Saga, onde aprendi muito sobre design e outras habilidades.</p>
                        <p>Hoje faço duas pós graduações, em Projetos de cloud computing e em projetos de aplicativos móveis multiplataformas. </p>
                        <p>Além disso faço cursos em plataformas online, principalmente na Alura.</p>
                        <p>Gosto de estar sempre aprendendo tecnologias novas, com foco maior em front-end, mas também tenho conhecimento em banco de dados, e em back-end, com java ou node.</p>
                    </div>
                    <img src={eu} alt="foto de caique nerivan" />
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