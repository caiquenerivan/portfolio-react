import React from 'react';
import '../style/portfolioResponsivo.scss';
import dashboard from '../imgs/dashboard.png';
import jogoVelha from '../imgs/site-jogo-da-velha.png';
import caiqueEdicao from '../imgs/caiqueEdicao.png';


export default function Portfolio() {


    return (
        <div id="portfolio">
            <h1>Portfolio</h1>
            <div className="container impar">
                <div className="descricao">
                    <h2>Jogo da Velha</h2>
                    <p>Criação de um jogo da velha para ser jogado entre duas pessoas.</p>
                    <p>O Site foi feito com HTML5/CSS3 para criação e estilização da página e vanilla javascript para criar as regras do jogo. </p>
                    <p>Na parte HTML5 Foi criada um h1 contendo o título, uma div com nove botões e um h2 sem texto, no CSS foi estilizado centralizando os elementos e colocando as cores e fonte corretas.</p>
                    <p>No javascript criei as regras do jogo e a checagem de quem ganhou ou se houve empate. </p>
                    <p>
                        <a href="https://jogodavelhacn.web.app/" target="_blank">
                            Acesse aqui.
                        </a>
                    </p>
                </div>
                <div className="imagem">
                    <img src={jogoVelha} alt="foto do projeto 1" />
                </div>
            </div>
            <div className="container par">
                <div className="descricao">
                    <h2>Portfolio de Edição de vídeo</h2>
                    <p>Criação de um jogo da velha para ser jogado entre duas pessoas.</p>
                    <p>O Site foi feito com HTML5/CSS3 para criação e estilização da página e vanilla javascript para criar as regras do jogo. </p>
                    <p>Na parte HTML5 Foi criada um h1 contendo o título, uma div com nove botões e um h2 sem texto, no CSS foi estilizado centralizando os elementos e colocando as cores e fonte corretas.</p>
                    <p>No javascript criei as regras do jogo e a checagem de quem ganhou ou se houve empate. </p>
                    <p>
                        <a href="https://caiqueedicao.web.app/" target="_blank">
                            Acesse aqui.
                        </a>
                    </p>
                </div>
                <div className="imagem">
                    <img src={caiqueEdicao} alt="foto do meu portfolio de edição" />
                </div>
            </div>
            <div className="container impar">
                <div className="descricao">
                    <h2>Portfolio de Edição de vídeo</h2>
                    <p>Criação de um jogo da velha para ser jogado entre duas pessoas.</p>
                    <p>O Site foi feito com HTML5/CSS3 para criação e estilização da página e vanilla javascript para criar as regras do jogo. </p>
                    <p>Na parte HTML5 Foi criada um h1 contendo o título, uma div com nove botões e um h2 sem texto, no CSS foi estilizado centralizando os elementos e colocando as cores e fonte corretas.</p>
                    <p>No javascript criei as regras do jogo e a checagem de quem ganhou ou se houve empate. </p>
                    <p>
                        <a href="https://jogodavelhacn.web.app/" target="_blank">
                            Acesse aqui.
                        </a>
                    </p>
                </div>
                <div className="imagem">
                    <img src={dashboard} alt="foto do projeto 1" />
                </div>
            </div>
        </div>
    );
}