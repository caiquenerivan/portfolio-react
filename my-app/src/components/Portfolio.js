import React from 'react';
import '../style/portfolioResponsivo.scss';
import pearl from '../imgs/pearl.png';
import jogoVelha from '../imgs/site-jogo-da-velha.png';
import caiqueEdicao from '../imgs/caiqueEdicao.png';
import rocketflix from '../imgs/rocketflix.png';
import loginForm from '../imgs/loginForm.png';


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
                    <p>Você pode acessar o repositório e o site nos links abaixos:</p>
                    <p>
                        <a href="https://github.com/caiquenerivan/jogo-da-velha" target="_blank">
                            Repositório.
                        </a>
                    </p>
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
                    <p>Criação do meu site de edição de vídeo.</p>
                    <p>O Site foi feito em React, para demonstração de futuros trabalhos de edição de vídeo. </p>
                    <p>Uma página estática onde você navega atravé do menu ao lado. </p>
                    <p>Eu utilizei React Hooks, React slick para o slider, e styled components para a estilização.</p>
                    <p>Você pode acessar o repositório e o site nos links abaixos:</p>
                    <p>
                        <a href="https://github.com/caiquenerivan/site-edicao" target="_blank">
                            Repositório.
                        </a>
                    </p>
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
                    <h2>Landing Page Pearl</h2>
                    <p>Criação de uma landing page promocional do filme Pearl.</p>
                    <p>Criei dentro do Figma o design do site onde você compraria uma versão online do filme para assistir.</p>
                    <p>O Site foi feito com HTML5/CSS3 para criação e estilização da página.</p>
                    <p>Você pode acessar o repositório e o site nos links abaixos:</p>
                    <p>
                        <a href="https://github.com/caiquenerivan/lp-pearl" target="_blank">
                            Repositório.
                        </a>
                    </p>
                    <p>
                        <a href="https://caiquenerivan.github.io/lp-pearl/" target="_blank">
                            Acesse aqui.
                        </a>
                    </p>
                </div>
                <div className="imagem">
                    <img src={pearl} alt="foto do projeto 1" />
                </div>
            </div>
            <div className="container par">
                <div className="descricao">
                    <h2>RocketFlix</h2>
                    <p>Criação de um site para sortear filmes.</p>
                    <p>Site feito em HTML5/CSS3 e Javascript. </p>
                    <p>Com o javascript foi criada funções onde eu recebo uma api de filmes e sorteio os dados de um filme. </p>
                    <p>Após receber esses dados ele vai aparecer no site a sua capa, título e a descrição do filme.</p>
                    <p>Você pode acessar o repositório e o site nos links abaixos:</p>
                    <p>
                        <a href="https://github.com/caiquenerivan/rocketflix" target="_blank">
                            Repositório.
                        </a>
                    </p>
                    <p>
                        <a href="https://caiquenerivan.github.io/rocketflix/" target="_blank">
                            Acesse aqui.
                        </a>
                    </p>
                </div>
                <div className="imagem">
                    <img src={rocketflix} alt="foto do meu portfolio de edição" />
                </div>
            </div>
            <div className="container impar">
                <div className="descricao">
                    <h2>Login Form</h2>
                    <p>Criação de uma página de login.</p>
                    <p>O Site foi feito com HTML5/CSS3 para criação e estilização da página.</p>
                    <p>Você pode acessar o repositório e o site nos links abaixos:</p>
                    <p>
                        <a href="https://github.com/caiquenerivan/loginForm-Rocketseat" target="_blank">
                            Repositório.
                        </a>
                    </p>
                    <p>
                        <a href="https://caiquenerivan.github.io/loginForm-Rocketseat/" target="_blank">
                            Acesse aqui.
                        </a>
                    </p>
                </div>
                <div className="imagem">
                    <img src={loginForm} alt="foto do projeto 1" />
                </div>
            </div>
        </div>
    );
}