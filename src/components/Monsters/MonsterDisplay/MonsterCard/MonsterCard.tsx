import React from "react";
import styles from "./styles.module.scss"

interface MonsterCardProps {
  name: string;
  image: string;
  type: string;
  hit_points: number;
  hit_dice: string;
  alignment: string;
  size: string;
}

export const MonsterCard: React.FC<MonsterCardProps> = ({name, image, type, hit_points, alignment, size}) => {
  return (
    <div className={styles.monster_section_card}>
      <h1>{name}</h1>

      {image ? (
        <img
          src={`https://www.dnd5eapi.co${image}`}
          alt={name}
        />
      ) : (
        <img src={`src/assets/icons/${type}.jpg`} alt={name} />
      )}
      <h3 className={styles.health_bar}>
        {hit_points}/{hit_points}
      </h3>
      <h4>
        Alinhamento: <span className={styles.stats}>{alignment}</span>
      </h4>
      <h4>
        Tipo: <span className={styles.stats}>{type}</span>
      </h4>
      <h4>
        Tamanho: <span className={styles.stats}>{size}</span>
      </h4>
    </div>
  );
};
