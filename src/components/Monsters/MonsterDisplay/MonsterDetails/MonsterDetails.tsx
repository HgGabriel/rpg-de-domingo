import React, { useContext } from "react"
import styles from "./styles.module.scss"
import d20 from "../../../../assets/d20.svg"
import { MonsterContext } from "../../../../context/MonsterContext"

export const MonsterDetails: React.FC = () => {
  const {monster }= useContext(MonsterContext)

  return (
    <div className={styles.monster_section_details}>
    <section className={styles.monster_stats}>
      <div className={styles.image_container}>
        <img src={d20} alt="" />
        <div className={styles.text_container}>
          <span>{monster.name}</span>
          <h2>FOR</h2>
        </div>
      </div>
    </section>
  </div>
  )
}