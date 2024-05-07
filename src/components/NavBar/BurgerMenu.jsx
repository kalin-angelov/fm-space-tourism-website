import styles from "./style/NavBar.module.css";

import { Link } from "react-router-dom";

import IconClose from "/public/shared/IconClose";

const BurgerMenu = () => {
  return (
    <>
      <div className={styles.closeButton}>
          <IconClose />
      </div>
      <ul className={styles.burgerMenuNavLinks}>
          <li><Link to="/"><span>00</span> Home</Link></li>
          <li><Link to="/destination"><span>01</span> Destination</Link></li>
          <li><Link to="/crew"><span>02</span> Crew</Link></li>
          <li><Link to="/technology"><span>03</span> Technology</Link></li>
        </ul>
    </>
  );
};

export default BurgerMenu;
