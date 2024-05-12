import styles from "./style/Crew.module.css";

import data from "../../db/data.json";

import { useState } from "react";

const Crew = () => {
  const [member, setMember] = useState(data.crew[0]);
  
  return (
    <section className={styles.crewSection}>
      <h1><span>02</span> Meet your crew</h1>
      <div className={styles.member}>
        <figure className={styles.imgContainer}>
          <img src={member.images.png} alt={member.name} />
        </figure>
      
        <article className={styles.memberInformation}>
          <ul className={styles.crewList}>
            <li 
              onClick={() => {setMember(data.crew[0])}}
              style={member.role === "Commander" ? {backgroundColor: "white"} : {backgroundColor: "rgba(255, 255, 255, 0.407)"}}>
              <button>1</button>
            </li>
            <li 
              onClick={() => {setMember(data.crew[1])}}
              style={member.role === "Mission Specialist" ? {backgroundColor: "white"} : {backgroundColor: "rgba(255, 255, 255, 0.407)"}}>
              <button>2</button>
            </li>
            <li 
              onClick={() => {setMember(data.crew[2])}}
              style={member.role === "Pilot" ? {backgroundColor: "white"} : {backgroundColor: "rgba(255, 255, 255, 0.407)"}}>
              <button>3</button>
            </li>
            <li 
              onClick={() => {setMember(data.crew[3])}}
              style={member.role === "Flight Engineer" ? {backgroundColor: "white"} : {backgroundColor: "rgba(255, 255, 255, 0.407)"}}>
              <button>4</button>
            </li>
          </ul>
          <h2>{member.role}</h2>
          <h3>{member.name}</h3>
          <p>{member.bio}</p>
        </article>
      </div>
    </section>
  );
};

export default Crew;
