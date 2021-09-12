import Contact from "../../components/contact/Contact"
import Intro from "../../components/intro/Intro"
import Menu from "../../components/menu/Menu"
import Portfolio from "../../components/portfolio/Portfolio"
import Skills from "../../components/skills/Skills"
import Testimonials from "../../components/testimonials/Testimonials"
import Topbar from "../../components/topbar/Topbar"
import Works from "../../components/works/Works"
import { useState } from "react"
import { Parallax } from "react-parallax"

import "./home.scss"

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false)

const img1 = "https://images.pexels.com/photos/768943/pexels-photo-768943.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
const img2 = "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
const img3 = "https://images.pexels.com/photos/1576369/pexels-photo-1576369.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
const img4 = "https://images.pexels.com/photos/9425387/pexels-photo-9425387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
const img5 = "https://images.pexels.com/photos/2661176/pexels-photo-2661176.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
const img6 = "https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"



  return (    
    <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Parallax bgImage={img1} strength={100}>
            <Intro />
          </Parallax>
          <Parallax bgImage={img2} strength={100}>
            <Portfolio />
          </Parallax>
          <Parallax bgImage={img3} blur={{min: -2, max: 4}}>
            <Works />
          </Parallax>
          <Parallax 
            bgImage={img6} 
            bgClassName='bgImg'
            strength={100}
            renderLayer={precentage => (
              <div
                style={{ 
                  fontFamily: "Roboto Mono",                
                  fontSize: "8px",                
                  padding: '5px',
                  border: `1px solid rgb(48, 0, 94, ${precentage * 1})`,
                  overflowY: 'hidden',
                  position: 'absolute',
                  borderRadius: '5px',
                  color: `rgb(48, 0, 94, ${precentage * 1})`,
                  left: '55%',
                  top: '15%',
                  transform: `translate(-50%, -50%) rotate(${precentage * 850}deg) scale(${precentage * 1.4})`,
                }}
                >addict à CODEWARS !
              </div>
            )}
          >
            <Skills/>
          </Parallax>
          <Parallax bgImage={img4} strength={-200}>
            <Testimonials />
          </Parallax>
          <Parallax bgImage={img5} strength={100}>
            <Contact />
          </Parallax>
        </div>
    </div>
  );
};

export default Home;