import "./menu.scss";


export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro"><span>A</span>ccueil</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio"><span>P</span>rojets</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works"><span>W</span>orks</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials"><span>T</span>émoignages</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact"><span>C</span>ontact</a>
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