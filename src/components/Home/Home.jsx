import { useNavigate } from "react-router-dom";
import styles from "./style/Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homeSection}>
      <article className={styles.container}>
        <h1 className={styles.header}>So, you want to travel to</h1>
        <h2>Space</h2>
        <p className={styles.description}>
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
        </p>
      </article>
      <div className={styles.btnContainer}>
        <button 
          onClick={(e) => {navigate('/destination')}} 
          className={styles.exploreBtn}
        >Explore</button>
      </div>
    </div>
  );
};

export default Home;
