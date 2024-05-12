import styles from "./style/Destination.module.css";

import data from "../../db/data.json";

import { useState } from "react";

const Destination = () => {
  const [destination, setDestination] = useState(data.destinations[0]);

  return (
    <section className={styles.destinationSection}>
      
      <h1><span>01</span> Pick your destination</h1>
      <div className={styles.destination}>
        <figure className={styles.imgContainer}>
          <img src={destination.images.png} alt={destination.name} />
        </figure>
      
        <article className={styles.objectInformation}>
          <ul className={styles.objectsList}>
            <li style={destination.name === "Moon" ? {borderBottom: "3px solid white"} : null}><button onClick={() => {setDestination(data.destinations[0])}} name="Moon">Moon</button></li>
            <li style={destination.name === "Mars" ? {borderBottom: "3px solid white"} : null}><button onClick={() => {setDestination(data.destinations[1])}} name="Mars">Mars</button></li>
            <li style={destination.name === "Europa" ? {borderBottom: "3px solid white"} : null}><button onClick={() => {setDestination(data.destinations[2])}} name="Europe">Europa</button></li>
            <li style={destination.name === "Titan" ? {borderBottom: "3px solid white"} : null}><button onClick={() => {setDestination(data.destinations[3])}} name="Titan">Titan</button></li>
          </ul>
          <h2>{destination.name}</h2>
          <p>{destination.description}</p>

          <div className={styles.travelingDistance}>
            <ul>
              <li className={styles.heder}>Avg. distance</li>
              <li className={styles.info}>{destination.distance}</li>
            </ul>
            <ul>
              <li className={styles.heder}>Est. travel time</li>
              <li className={styles.info}>{destination.travel}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Destination;
