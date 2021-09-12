import { init } from "ityped";
import { useEffect, useRef } from "react";
import cv from "../../img/cv.pdf"

import "./intro.scss";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["ReactJS.", "NodeJS."],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="portrait de Rémy Chazelas" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Salut, <small>je suis</small> </h2>                    
                    <h1><span>R</span>émy</h1>
                    <h3>
                        Développeur web <span ref={textRef}></span>
                    </h3>
                    <h4>&#192; propos de moi :</h4>
                    <p>Après de nombreuses expériences dans différents domaines, je me reconverti dans le développement web. Ambitieux et désireux d'apprendre de nouveaux languages de programmation, je souhaite monter rapidement en compétence. La programmation étant une passion, je suis capable de m'autoformer et d'effectuer des veilles technologiques.</p>
                    <a 
                        href={cv} 
                        className="cv" 
                        download={cv}
                        rel="noopener noreferrer" 
                        target="_blank"
                        >téléchargez mon cv !</a>
                </div>
                <a href="#works" className="arrow">
                    <img src="assets/down.png" alt="flèche qui descend vers mes projets" />
                </a>
            </div>
        </div>
    );
}