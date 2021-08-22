import "./menu.scss";


export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Accueil</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Projets</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials">Témoignages</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <li className="menuContainer">
                    <span>06 66 62 19 83</span>
                </li>
                <li className="menuContainer">
                    <span>remychazelas@gmail.com</span>
                </li>
            </ul>
        </div>
    );
}