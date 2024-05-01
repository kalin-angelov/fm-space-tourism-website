import styles from "./style/Home.module.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className={styles.homeSection}>
      <article className={styles.container}>
        <p className={styles.header}>So, you want to travel to</p>
        <h1>Space</h1>
        <p className={styles.description}>
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
        </p>
      </article>
      <Link className={styles.exploreBtn} to="#">Explore</Link>
    </section>
  );
};

export default Home;
