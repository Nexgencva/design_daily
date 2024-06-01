import { useEffect, useState } from "react";
import "./GroupComponent5.css";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ddlogo from "../Images/ddlogo.png"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <>
      <header className="navdispla">
        <div className="group-header ">
          <div className="frame-child20" />
          <div className="frame-parent34">
            <div className="dailydesign-parent">
              <b className="dailydesign">Dailydesign.</b>
              <img className="frame-child21" alt="" src="/vector-3125.svg" />
            </div>
            <div className="creative-minds-for-creative-ey-wrapper">
              <div className="creative-minds-for">
                Creative Minds for Creative eyes
              </div>
            </div>
          </div>
          <div className="rectangle-parent10">
            <div className="frame-child22" />
            <div className="frame-wrapper18">
              <div className="link-about-us-parent">
                <div className="link-about"><Link to="/" style={{textDecoration:"none"}}>Home</Link></div>
                <div className="about-us-link-two">
                  <div className="link-about1"><Link to="/Graphic_design" style={{textDecoration:"none"}}>Services</Link></div>
                  <div className="vector-wrapper1">
                    <img className="vector-icon5" alt="" src="/vector.svg" />
                  </div>
                </div>
                <div className="link-about2"><Link to="/Website_design" style={{textDecoration:"none"}}>Resource</Link></div>
                <div className="link-about3"><Link to="/App_design" style={{textDecoration:"none"}}>Our Works</Link></div>
                <div className="link-about4"><Link to="/" style={{textDecoration:"none"}}>Careers</Link></div>
              </div>
            </div>
          </div>
          <div className="link-wrapper1">
            <button className="link16">
              <div className="contact-designer">Contact Designer</div>
            </button>
          </div>
        </div>
      </header>

      <div className="group dnonenav">
        <div className="d-flex justify-content-start">
          <img src={ddlogo} alt="ddlogo" style={{width:"50%"}}/>
          {/* <div className="dailydesign-parent">
            <b className="dailydesign">Dailydesign.</b>
            <img
              className="frame-child21"
              alt="vector"
              src="/vector-3125.svg"
            />
          </div>
          <div className="creative-minds-for-creative-ey-wrapper">
            <div className="creative-minds-for">
              Creative Minds for Creative eyes
            </div>
          </div> */}
        </div>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ marginTop: "-1.2rem" }}
        >
          {menuOpen ? (
            <FaTimes className="fs-6" size={30} />
          ) : (
            <FaBars className="fs-6" size={30} />
          )}
          {menuOpen && (
            <>
              <div className={menuOpen ? "navpostion" : "bgnav"}>
                <div className="rectangle-parent10">
                  <div className="link-about-us-parent">
                    <div className="link-about">Home</div>
                    <div className="about-us-link-two">
                      <div className="link-about1">Services</div>
                      <div className="vector-wrapper1">
                        <img
                          className="vector-icon5"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                    <div className="link-about2">Resource</div>
                    <div className="link-about3">Our Works</div>
                    <div className="link-about4">Careers</div>
                  </div>
                </div>
                <div className="link-wrapper1">
                  <button className="link16">
                    <div className="contact-designer">Contact Designer</div>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
