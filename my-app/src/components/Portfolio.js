import React from 'react';
import '../style/portfolio.scss';
import dashboard from '../imgs/dashboard.png';


export default function Portfolio() {


    return (
        <div id="portfolio">
            <h1>Portfolio</h1>
            <div className="container impar">
                <div className="descricao bloco">
                    <h2>PROJETO 1</h2>
                    <p>Qui non dolore fugiat reprehenderit ut nulla dolore non et dolor. Culpa ad in quis culpa dolore id culpa. Fugiat aliqua proident velit enim excepteur occaecat exercitation deserunt excepteur dolore. Est amet duis incididunt sint sint exercitation cillum commodo adipisicing elit. Mollit sit irure exercitation elit aute. Id ex qui consectetur in laboris adipisicing sunt aliquip officia. Do enim aliquip duis nostrud irure elit velit ullamco nisi commodo ea. Cupidatat magna laboris ut pariatur dolore excepteur deserunt commodo cupidatat cupidatat sint. Excepteur cillum proident consequat et nisi officia magna duis. Excepteur commodo nulla veniam culpa incididunt velit sint ipsum.</p>
                </div>
                <div className="imagem bloco">
                    <img src={dashboard} alt="foto do projeto 1"/>
                </div>
            </div>
            <div className="container par">
                <div className="descricao bloco">
                    <h2>PROJETO 2</h2>
                    <p>Qui non dolore fugiat reprehenderit ut nulla dolore non et dolor. Culpa ad in quis culpa dolore id culpa. Fugiat aliqua proident velit enim excepteur occaecat exercitation deserunt excepteur dolore. Est amet duis incididunt sint sint exercitation cillum commodo adipisicing elit. Mollit sit irure exercitation elit aute. Id ex qui consectetur in laboris adipisicing sunt aliquip officia. Do enim aliquip duis nostrud irure elit velit ullamco nisi commodo ea. Cupidatat magna laboris ut pariatur dolore excepteur deserunt commodo cupidatat cupidatat sint. Excepteur cillum proident consequat et nisi officia magna duis. Excepteur commodo nulla veniam culpa incididunt velit sint ipsum.</p>
                </div>
                <div className="imagem bloco">
                    <img src={dashboard} alt="foto do projeto 1"/>
                </div>
            </div>
            <div className="container impar">
                <div className="descricao bloco">
                    <h2>PROJETO 3</h2>
                    <p>Qui non dolore fugiat reprehenderit ut nulla dolore non et dolor. Culpa ad in quis culpa dolore id culpa. Fugiat aliqua proident velit enim excepteur occaecat exercitation deserunt excepteur dolore. Est amet duis incididunt sint sint exercitation cillum commodo adipisicing elit. Mollit sit irure exercitation elit aute. Id ex qui consectetur in laboris adipisicing sunt aliquip officia. Do enim aliquip duis nostrud irure elit velit ullamco nisi commodo ea. Cupidatat magna laboris ut pariatur dolore excepteur deserunt commodo cupidatat cupidatat sint. Excepteur cillum proident consequat et nisi officia magna duis. Excepteur commodo nulla veniam culpa incididunt velit sint ipsum.</p>
                </div>
                <div className="imagem bloco">
                    <img src={dashboard} alt="foto do projeto 1"/>
                </div>
            </div>
        </div>
    );
}