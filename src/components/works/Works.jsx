import { useState } from "react";
import "./works.scss";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "assets/wecode-icon.png",
            title: "WECODE",
            desc:
                "Création d'un site vitrine responsive : WECODE (maquette Figma, page d’accueil, diverses pages sur des thèmes différents liés au développement).",
            img:
                "assets/wecode-rogne.png",
            link:"https://we-code.netlify.app/",
        },
        {
            id: "2",
            icon: "assets/logo-cineflix.png",
            title: "Cineflix",
            desc:
                "Création d'une WebApp qui utilise une API publique en utilisant React, un backend très simple avec express utilisation de SCRUM ainsi que Git et Github pour le travail collaboratif avec Trello.",
            img:
                "assets/cineflix-rogne.png",
            link:"https://cineflix-wcs-p2.netlify.app/home",
        },
        {
            id: "3",
            icon: "./assets/tetris-icon.png",
            title: "Tetris App",
            desc:
                "Réplique du célèbre jeu Tétris en React & TypeScipt, réalisé grâce à un tuto.",
            img:
                "assets/tetris-rogne.png",
                link:"https://tetris-rc.netlify.app/",
        },
        {
            id: "4",
            icon: "./assets/yoga-icon.png",
            title: "Yoga App",
            desc:
                "Application de Yoga réalisée en Vanilla JavaScript.",
            img:
                "assets/yoga-rogne.png",
                link:"https://yoga-rc.netlify.app/",

        },
        {
            id: "5",
            icon: "./assets/flag-icon.png",
            title: "Flag App",
            desc:
                "Application qui permet de voir les informations d'un pays en survolant son drapeau, réalisé en React et en utilisant une API.",
            img: "assets/flag-rogne.png",
            link: "https://flag-react.netlify.app/", 
        },
        {
            id: "6",
            icon: "./assets/shifumi-icon.png",
            title: "Shi Fu Mi App",
            desc:
                "Ce challenge à été réalisé en HTML, CSS et JavaScript. Je l'ai trouvé sur frontendmentor.io.",
            img: "assets/shifumi-rogne.png",

            link: "https://shi-fu-mi.netlify.app/",
 
        },
        {
            id: "7",
            icon: "./assets/joke-icon.png",
            title: "Joke App",
            desc:
                "Ce générateur de blagues à été réalisé en HTML, CSS et JavaScript. J'ai utilisé une API existante pour les blagues et j'ai créé une API pour inclure aléatoirement des émojis ascii.",
            img: "assets/joke-rogne.png",

            link: "https://joke-app-rc.netlify.app/",
 
        },
        {
            id: "8",
            icon: "./assets/million-icon.png",
            title: "Qui Veut Gagner Des Millions",
            desc:
                "Réplique du célèbre jeu Qui Veut Gagner Des Millions, créer en React.",
            img: "assets/million-rogne.png",

            link: "https://qui-veut-gagner-des-millions.netlify.app/",
 
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 7)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="works" id="works">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <a rel="noopener noreferrer" href={d.link} target="_blank">Projet</a>
                                </div>
                            </div>
                            <div className="right">
                                <img
                                    src={d.img}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="assets/arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/arrow.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    );
}