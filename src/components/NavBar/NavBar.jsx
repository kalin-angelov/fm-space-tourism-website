import styles from "./style/NavBar.module.css";

import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import Logo from "/public/shared/Logo";
import IconHamburger from "/public/shared/IconHamburger";
import IconClose from "/public/shared/IconClose";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const menuRef = useRef();
  const [windowWith, setWindowWith] = useState(window.innerWidth);  
  const [toggle, setToggle] = useState(false);

  const toggleIconsAndStyles = () => {
    setToggle(!toggle);
  };

  useEffect(() => {

    const closeBurgerMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setToggle(false);
      };
    };

    window.addEventListener("mousedown", closeBurgerMenu);

    const handleWindowWith = () => {
      setWindowWith(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowWith);

    return () => {
      window.removeEventListener("resize", handleWindowWith);
      window.removeEventListener("mousedown",closeBurgerMenu);
    };

  },[]);

  return (
    <nav className={styles.navBar}>
      <Link to="/" ><Logo /></Link>
      {
      // If the page with is less than 653px it's going to show the Burger Menu else it will show the Navigation Bar
        windowWith <= 653 ?
          // The Burger Menu
          <div onClick={toggleIconsAndStyles} ref={menuRef}>
            <IconHamburger />
            <aside className={toggle ? styles.burgerMenuOpen : styles.burgerMenuClose}>
              <div className={styles.closeButton}>
                <IconClose />
              </div>
              <NavLinks />
            </aside>
          </div>
        :
          // The Navigation Bar
          <div ref={menuRef}>
            <hr />
            <NavLinks />
          </div>
      }
    </nav>
  );
};

export default NavBar;
