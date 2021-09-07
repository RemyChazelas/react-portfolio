import { Link } from "react-router-dom";
import "./menu.scss";


export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/" dataText="ccueil"><span>A</span>ccueil</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio" dataText="rojets"><span>P</span>rojets</a>
                </li>                
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials" dataText="émoignages"><span>T</span>émoignages</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact" dataText="ontact"><span>C</span>ontact</a>
                </li>
                <li className="menuContainer">
                    <div>06 66 62 19 83</div>
                </li>
                <li className="menuContainer">
                    <div>remychazelas@gmail.com</div>
                </li>
            </ul>
        </div>
    );
}