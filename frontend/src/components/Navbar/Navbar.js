import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import props from "prop-types";
import Submenu from "./Submenu";
import NavItems from "./NavItems";

function Navbar(props) {
  const navRef = useRef();

  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const showNavbar = (props) => {
    navRef.current.classList.toggle("responsive_nav");
  };
  // const darktext = () => {
  //   theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  // };

  return (
    <>
      <header>
        <h2>Placement Dashboard</h2>

        <nav ref={navRef}>
          {NavItems.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          {/* <button className="dark" onClick={() => darktext()}>
            {theme === "light-theme"
              ? `Enable dark mode !`
              : `Enable light mode !`}
          </button> */}
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar;