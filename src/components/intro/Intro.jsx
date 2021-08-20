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
                    <h2>Salut, je suis</h2>
                    <h1>Rémy</h1>
                    <h3>
                        développeur web junior <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    );
}