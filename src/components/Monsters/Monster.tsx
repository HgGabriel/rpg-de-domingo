import styles from "./style.module.scss";
import React, { FormEvent, useState, useEffect, BaseSyntheticEvent } from "react";

interface MonsterProps {
  name: string;
  image: string;
}

export const Monster: React.FC = () => {
  const [monster, setMonster] = useState<MonsterProps | null>(null);
  const [search, setSearch] = useState(""); 

  const debounce = (callback, delay) => {
    let timerId;
    return function (...args) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback.apply(this, args);
      }, delay);
    };
  };

  useEffect(() => {
    if (!search) return; // No need to fetch if search is empty

    const fetchMonster = async () => {
      try {
        const response = await fetch(
          `https://www.dnd5eapi.co/api/monsters/${search}`
        );
        if (!response.ok) {
          throw new Error('Monster not found');
        }
        const json = await response.json();
        setMonster(json);
      } catch (error) {
        console.error('Error fetching monster:', error);
        setMonster(null);
      }
    };

    fetchMonster();
  }, [search]);

  function handleSearchSubmit(event: FormEvent) {
    event.preventDefault();
    const userInput = (event.target as HTMLFormElement).querySelector(
      'input'
    ) as HTMLInputElement;
    setSearch(userInput.value);
  }

  const handleSearchChange = debounce((event:BaseSyntheticEvent) => {
    setSearch(event.target.value.toLowerCase());
    // Perform search logic here, like making API calls, filtering data, etc.
  }, 500); // 500ms debounce delay


  return (
    <div>
      <h1 className={styles.titulo}>Tela de Monstros</h1>
      <h2>Monstrinho</h2>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          id="input"
          // value={search}
          // onChange={(e)=> setSearch(e.target.value.toLowerCase())}
          onChange={handleSearchChange}
        />
        <button type="submit">Buscar</button>
      </form>
      <section className={styles.section}>
        {monster ? (
          <>
            <h3>Nome do Monstro: {monster.name}</h3>
            <h3 hidden={monster.image == undefined}>
              Cara feia do Monstro:{" "}
              <img
                src={`https://www.dnd5eapi.co/${monster.image}`}
                alt={monster.name}
              />
            </h3>
            <h3>Descrição do Monstro:</h3>
          </>
        ) : (
          <p>Monstro não encontrado</p>
        )}
      </section>
    </div>
  );
};
