import styles from "./style/Technology.module.css";

import data from "../../db/data.json";

import { useState } from "react";

const Technology = () => {
  const [tech, setTech] = useState(data.technology[0]);
  
  return (
    <section className={styles.technologySection}>
      <h1><span>03</span> Space launch 101</h1>
      <div className={styles.machine}>
        <figure className={styles.imgContainer}>
          <img src={tech.images.landscape} alt={tech.name} />
        </figure>
      
        <article className={styles.machineInformation}>
          <ul className={styles.machineList}>
            <li>
              <button
                onClick={() => {setTech(data.technology[0])}}
                style={tech.name === "Launch vehicle" ? 
                  {backgroundColor: "white", color: "black"} 
                  : 
                  {backgroundColor: "transparent", color: "white"}
                }
              >1</button>
            </li>
            <li>
               <button
                onClick={() => {setTech(data.technology[1])}}
                style={tech.name === "Spaceport" ? 
                  {backgroundColor: "white", color: "black"} 
                  :
                  {backgroundColor: "transparent", color: "white"}
                }
              >2</button>
            </li>
            <li>
              <button
                onClick={() => {setTech(data.technology[2])}}
                style={tech.name === "Space capsule" ? 
                  {backgroundColor: "white", color: "black"} 
                  : 
                  {backgroundColor: "transparent", color: "white"}
                }
              >3</button>
            </li>
          </ul>
          <h2>The terminology ...</h2>
          <h3>{tech.name}</h3>
          <p>{tech.description}</p>
        </article>
      </div>
    </section>
  )
};

export default Technology;
