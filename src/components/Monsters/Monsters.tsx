import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import axios from "axios";
import { MonsterCard } from "./MonsterDisplay/MonsterCard/MonsterCard";
import { MonsterDetails } from "./MonsterDisplay/MonsterDetails/MonsterDetails";
import { MonsterContext, MonsterProvider } from "../../context/MonsterContext";

export const Monsters: React.FC = () => {
  
  const { listMonsters, setMonster, monster, filter, setFilter } = useContext(MonsterContext);

  useEffect(() => {
    console.log(listMonsters);
  });

  return (
    <MonsterProvider>
      <div className={styles.container}>
        <section className={styles.search_section}>
          <search>
            <h2>Filtrar:</h2>
            <input
              className={styles.search_section_input}
              type="text"
              placeholder="Aboleth..."
              onChange={(e) => {
                setFilter(e.target.value);
                console.log(filter);
              }}
              value={filter}
            />
          </search>

          {listMonsters ? (
            <menu className={styles.search_section_menu}>
              {listMonsters.map((monsterItem) => (
                <li
                  onClick={async () => {
                    const response = await axios.get(
                      `https://www.dnd5eapi.co${monsterItem.url}`
                    );
                    setMonster(response.data);
                  }}
                  key={monsterItem.index}
                >
                  {monsterItem.name}
                </li>
              ))}
            </menu>
          ) : (
            <div>Loading...</div>
          )}
        </section>

        <section className={styles.monster_section}>
          {monster && (
            <>
              <MonsterCard
                alignment={monster.alignment}
                hit_dice={monster.hit_dice}
                hit_points={monster.hit_points}
                image={monster.image}
                name={monster.name}
                size={monster.size}
                type={monster.type}
              />

              <MonsterDetails />
            </>
          )}
        </section>
      </div>
    </MonsterProvider>
  );
};
