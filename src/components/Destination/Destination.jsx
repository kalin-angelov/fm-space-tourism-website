import styles from "./style/Destination.module.css";

import data from "../../db/data.json";

import { useState } from "react";

const Destination = () => {
  const [destination, setDestination] = useState(data.destinations[0]);
  const generateImgUrl = (image) => {
    const URL = "http://127.0.0.1:5173/";
    const cut = String(image).slice(8);
    const imgUrl = URL + cut;
    console.log(cut);
    return imgUrl;
  }

  return (
    <section className={styles.destinationSection}>
      
      <h1><span>01</span> Pick your destination</h1>
      <div className={styles.destination}>
        <figure className={styles.imgContainer}>
          <img src={generateImgUrl(destination.images.png)} alt={destination.name} />
        </figure>
      
        <article className={styles.objectInformation}>
        <button onClick={() => generateImgUrl(destination.images.png)}>Test</button>
          <ul className={styles.objectsList}>
            <li><button onClick={() => {setDestination(data.destinations[0])}} name="Moon">Moon</button></li>
            <li><button onClick={() => {setDestination(data.destinations[1])}} name="Mars">Mars</button></li>
            <li><button onClick={() => {setDestination(data.destinations[2])}} name="Europe">Europa</button></li>
            <li><button onClick={() => {setDestination(data.destinations[3])}} name="Titan">Titan</button></li>
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
