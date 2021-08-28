import { init } from "ityped";
import { useEffect, useRef } from "react";
import "./intro.scss";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["ReactJS", "NodeJS"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="me" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <ul>
                        <li>s</li>
                        <li>i</li>
                        <li>u</li>
                        <li>s</li>
                        <li>&nbsp;</li>
                        <li>e</li>
                        <li>j</li>
                        <li>&nbsp;</li>
                        <li>,</li>
                        <li>t</li>
                        <li>u</li>
                        <li>l</li>
                        <li>a</li>
                        <li>S</li>
                    </ul>
                    <h1><span>R</span>émy</h1>
                    <h3>
                        Développeur web junior <span ref={textRef}></span>
                    </h3>
                    <h4>A propos de moi :</h4>
                    <p>Après de nombreuses expériences dans difféfents domaines, je me reconverti dans le développement web.</p>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    );
}