import Contact from "../../components/contact/Contact"
import Intro from "../../components/intro/Intro"
import Menu from "../../components/menu/Menu"
import Portfolio from "../../components/portfolio/Portfolio"
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
const img4 = "https://images.pexels.com/photos/6985045/pexels-photo-6985045.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
const img5 = "https://images.pexels.com/photos/2661176/pexels-photo-2661176.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"



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
          <Parallax bgImage={img3} blur={{min: -1, max: 5}}>
          <Works />
          </Parallax>
          <Parallax 
            bgImage={img4} 
            strength={-200}
            renderLayer={precentage => (
              <div
                style={{                  
                  padding: '5px',
                  overflowY: 'hidden',
                  position: 'absolute',
                  width: '45px',
                  height: '25px',
                  borderRadius: '25%',
                  color: `rgb(48, 0, 94, ${precentage * 0.5})`,
                  textDecoration: `underline rgb(128, 255, 0, ${precentage * 1})`,
                  left: '30%',
                  top: '20%',
                  transform: `translate(-50%, -50%) scale(${precentage * 2.5})`,
                }}
                >faux
              </div>
            )}
          >
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