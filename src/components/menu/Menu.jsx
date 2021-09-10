import { Link } from "react-router-dom";
import Countdown from "../countdown/Countdown";
import "./menu.scss";


export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/" datatext="ccueil"><span>A</span>ccueil</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio" datatext="rojets"><span>P</span>rojets</a>
                </li>                
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials" datatext="émoignages"><span>T</span>émoignages</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact" datatext="ontact"><span>C</span>ontact</a>
                </li>

                <li className="menuContainer">
                    <div>06 66 62 19 83</div>
                </li>
                <li className="menuContainer">
                    <div>remychazelas@gmail.com</div>
                </li>
                <Countdown/>
            </ul>
        </div>
    );
}