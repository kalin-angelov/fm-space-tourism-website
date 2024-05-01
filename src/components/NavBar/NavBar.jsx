import styles from "./style/NavBar.module.css";

import { Link } from "react-router-dom";

import Logo from "/public/shared/Logo";
import IconHamburger from "/public/shared/IconHamburger";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Link><Logo /></Link>
      <Link><IconHamburger /></Link>
      
      {/* <ul>
          <li>00 </li>
          <li>01</li>
          <li>02</li>
          <li>03</li>
      </ul> */}
    </nav>
  );
};

export default NavBar;
