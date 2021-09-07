import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { NavLink } from "react-router-dom";
import { Person, Mail } from "@material-ui/icons";

import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                   <NavLink to="/" className="logo" ><span>R</span>C</NavLink>                 
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>06 66 62 19 83</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>remychazelas@gmail.com</span>
                    </div>
                    <div className="socialNetwork">
                        <a 
                        href="https://www.linkedin.com/in/r%C3%A9my-chazelas-4837bb20b/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            <LinkedInIcon className="socialIcon"/>
                        </a>
                    </div>
                    <div className="socialNetwork">
                        <a 
                        href="https://github.com/RemyChazelas" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            <GitHubIcon className="socialIcon"/>
                        </a>
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div >
    );
}