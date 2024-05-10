import styles from "./style/Destination.module.css";

import { Link } from "react-router-dom";

const Destination = () => {
  return (
    <section className={styles.destinationSection}>
      <h1><span>01</span> Pick your destination</h1>
      <div className={styles.destination}>
        <figure className={styles.imgContainer}>
          <img src="/public/destination/image-moon.png" alt="Moon" />
        </figure>
      
        <article className={styles.objectInformation}>
          <ul className={styles.objectsList}>
            <li><Link>Moon</Link></li>
            <li><Link>Mars</Link></li>
            <li><Link>Europa</Link></li>
            <li><Link>Titan</Link></li>
          </ul>
          <h2>Moon</h2>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
            regain perspective and come back refreshed. While you’re there, take in some history 
            by visiting the Luna 2 and Apollo 11 landing sites.
          </p>

          <div className={styles.travelingDistance}>
            <ul>
              <li className={styles.heder}>Avg. distance</li>
              <li className={styles.info}>384,400 km</li>
            </ul>
            <ul>
              <li className={styles.heder}>Est. travel time</li>
              <li className={styles.info}>3 days</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Destination;
