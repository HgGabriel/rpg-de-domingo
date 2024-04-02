import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import axios from "axios";
import { useDebounce } from "../../custom-hooks/hooks";

interface Monster {
  name: string;
  image: string;
  type: string;
  hit_points:number;
  hit_dice: string
  alignment: string;
  size: string
}

export const Monster: React.FC = () => {
  const [listMonsters, setListMonsters] = useState([]);
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce(filter);
  const [monster, setMonster] = useState<Monster>();

  useEffect(() => {
    async function loadMonsters() {
      const response = await axios.get("https://www.dnd5eapi.co/api/monsters");
      const monstersData = response.data;
      setListMonsters(
        monstersData.results.filter((monstro) =>
          monstro.name.toLowerCase().includes(debouncedFilter.toLowerCase())
        )
      );
    }

    loadMonsters();
  }, [debouncedFilter]);

  async function loadMonster(monsterUrl) {
    const response = await axios.get(`https://www.dnd5eapi.co${monsterUrl}`);
    setMonster(response.data);
  }

  return (
    <div className={styles.container}>
      <section className={styles.search_section}>
        <search>
          <h2>Filtrar:</h2>
          <input
            className={styles.search_section_input}
            type="text"
            placeholder="Aboleth..."
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          />
        </search>

        <menu className={styles.search_section_menu}>
          {listMonsters.map((monsterItem) => (
            <li
              onClick={() => {
                loadMonster(monsterItem.url);
                console.log(monster);
              }}
              key={monsterItem.index}
            >
              {monsterItem.name}
            </li>
          ))}
        </menu>
      </section>
      <section className={styles.monster_section}>
  {monster && (
    <div className={styles.monster_section_card}>
      <h1>{monster.name}</h1>

      {monster.image ? (
        <img
          src={`https://www.dnd5eapi.co${monster.image}`}
          alt={monster.name}
        />
      ) : (
        <img
          src={`src/assets/icons/${monster.type}.jpg`}
          alt={monster.name}
        />
      )}
      <h3 className={styles.health_bar}>{monster.hit_points}/{monster.hit_points}</h3>
      <h4>Alinhamento: <span className={styles.stats}>{monster.alignment}</span> </h4>
      <h4>Tipo: <span className={styles.stats}>{monster.type}</span> </h4>
      <h4>Tamanho: <span className={styles.stats}>{monster.size}</span> </h4>
    </div>
  )}
</section>

    </div>
  );
};
