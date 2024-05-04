import { useNavigate } from "react-router-dom";
import styles from "./style/Home.module.css";

const Home = () => {
  const navigate = useNavigate();

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
      <button 
        onClick={(e) => {navigate('/destination')}} 
        className={styles.exploreBtn}
      >Explore</button>
    </section>
  );
};

export default Home;
