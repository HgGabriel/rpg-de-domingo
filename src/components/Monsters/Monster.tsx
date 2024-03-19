import styles from "./style.module.scss";
import React, {FormEvent, useState, useEffect} from "react";

interface MonsterProps{
  name: string;
  image: string;
}

export const Monster: React.FC = () => {
  
  const [monster, setMonster] = useState<MonsterProps>()
    const [search, setSearch] = useState("")

  useEffect(() => {
     const fetchMonster = async () => {
      const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${search}`)
      response.json().then(json => {
        setMonster(json)
        console.log(json.image)
      })
    }

    fetchMonster()
  }, [])

  function handleSearchSubmit (event: FormEvent) {
    event.preventDefault()

    
  }

    
  
  

  return (
    <div>
      <h1 className={styles.titulo}>Tela de Monstros</h1>
      <h2>Monstrinho</h2>
      <form onSubmit={handleSearchSubmit}></form>
      <input type="text"  id="input"/> 
      <button type="submit">Buscar</button>
      <section className={styles.section}>
        <h3>Nome do Monstro: {monster?.name}</h3>
        <h3>Cara feia do Monstro: <img src={`https://www.dnd5eapi.co${monster?.image}`} alt="" /></h3>
        <h3>Descrição do Monstro:</h3>
      </section>
    </div>
  );

  }

{
  /* <div className={styles.home_card}>
    <img className={styles.home_card_image} src={thumbnail} alt={name} />
    <div>
      <h1 className={styles.home_card_title}>{name}</h1>
      <p className={styles.home_card_description}>{desc}</p>
    </div>
  </div> */
}
