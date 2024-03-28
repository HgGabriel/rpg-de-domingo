
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss"
import axios from "axios"

export const Monster: React.FC = () => {

const [listaMonstros, setListaMonstros] = useState([])

useEffect(() => {
  async function loadMonsters() {
    const response = await axios.get("https://www.dnd5eapi.co/api/monsters")
    const monstersData = response.data

    setListaMonstros(monstersData.results)
  }
  loadMonsters()
},[])

  return (
    <div className={styles.container}>
      <section className={styles.search_section}>
        <search>
          <h2>Filtrar:</h2>
        <input className={styles.search_section_input} type="text" placeholder="Aboleth..." />
        </search>
        
        <menu>
          {
            listaMonstros.map((monstro) => {
              return (
                <li  key={monstro.index}>
                 {monstro.name}
                </li>
              )
            })
          }
            
        </menu>
      </section>
      <section className={styles.monster_section}>
        <h1>Uau</h1>
      </section>
    </div>
  );
};
