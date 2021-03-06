import { Link } from "react-router-dom";
import { Person, Mail } from "@material-ui/icons";

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
                    <a href="#testimonials" datatext="√©moignages"><span>T</span>√©moignages</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact" datatext="ontact"><span>C</span>ontact</a>
                </li>

                <li className="menuContainer">
                    <Person className="icon" />
                    <div>0666621983</div>
                </li>
                <li className="menuContainer">
                    <Mail className="icon" />
                    <div>contact@remychazelas.com</div>
                </li>
                <Countdown/>
            </ul>
        </div>
    );
}