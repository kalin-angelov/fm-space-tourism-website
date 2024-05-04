import styles from "./style/NavBar.module.css";

import { Link } from "react-router-dom";

import Logo from "/public/shared/Logo";
import IconHamburger from "/public/shared/IconHamburger";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [windowWith, setWindowWith] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowWith = () => {
      setWindowWith(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowWith);

    return () => {
      window.removeEventListener("resize", handleWindowWith);
    };

  },[]);

  return (
    <nav className={styles.navBar}>
      <Link to="/" ><Logo /></Link>
      {windowWith <= 425 ?
        <IconHamburger />
        :
        <>
          <hr />
          <ul className={styles.navLinks}>
            <li><Link to="/"><span>00</span> Home</Link></li>
            <li><Link to="/destination"><span>01</span> Destination</Link></li>
            <li><Link to="/crew"><span>02</span> Crew</Link></li>
            <li><Link to="/technology"><span>03</span> Technology</Link></li>
          </ul>
      </>
    }
    </nav>
  );
};

export default NavBar;
