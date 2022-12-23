import React, {useState} from 'react';
//import '../style/main.scss';
import '../style/mainResponsivo.scss';
import titulo from '../imgs/titulo.png';
import behance from '../imgs/behance-144.png';
import linkedin from '../imgs/linkedin-240.png';
import github from '../imgs/github-384.png';
import instagram from '../imgs/instagram-384.png';
import artstation from '../imgs/artstation.svg';
import x from '../imgs/x.png';
import hamburguer from '../imgs/hamburguer.png';



export default function Main() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar);


    return (
        <div className="mainSession">
            <div className="navbar">
                <div className="title">
                    <img src={titulo} alt="cn." />
                </div>

                <div className='setNavbar'>
                    <button onClick={showSidebar}>
                        <img src={sidebar? `${x}` : `${hamburguer}`}/>
                    </button>
                </div>
                <div className={sidebar ? 'nav-container active':'nav-container'}>

                    <div className="menu">
                        <ul>
                            <li><a href='#' alt='home'>Home</a></li>
                            <li><a href='#' alt='skills'>Skills</a></li>
                            <li><a href='#' alt='portfolio'>Portfolio</a></li>
                            <li><a href='#' alt='sobre'>Sobre</a></li>
                            <li><a href='#' alt="contato">Contato</a></li>
                        </ul>
                    </div>
                    <div id="social-media">
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/caiquenerivan/" target="_blank">
                                    <img src={linkedin} alt="linkedin" />
                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/caiquenerivan" target="_blank">
                                    <img src={github} alt="github" />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.behance.net/caiquenerivan" target="_blank">
                                    <img src={behance} alt="behance" />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/craquenerivan/" target="_blank">
                                    <img src={instagram} alt="instagram" />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.artstation.com/caiquenerivan" target="_blank">
                                    <img src={artstation} alt="artstation" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="principal">
                <h1>CAIQUE <br />NERIVAN</h1>
                <h2>FRONT-END DEVELOPER</h2>
                
            </div>
        </div>
    );
}