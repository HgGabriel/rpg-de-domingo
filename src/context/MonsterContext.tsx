
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useDebounce } from "../custom-hooks/hooks";

interface MonsterProviderProps {
  children: React.ReactNode
}

// export interface MonsterList {
//   index: string
//   name: string
//   url: string
// }

export interface Monster {
  name: string;
  image: string;
  type: string;
  hit_points: number;
  hit_dice: string;
  alignment: string;
  size: string;
  strength: string;
}

interface MonsterContextData {
  listMonsters
  setMonster() : React.Dispatch<React.SetStateAction<Monster>>
  setFilter() : React.Dispatch<React.SetStateAction<string>>
  monster: Monster
  filter: string
}

export const MonsterContext = createContext({} as MonsterContextData)

export const MonsterProvider: React.FC<MonsterProviderProps> =({children}) => {
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


  return (
    <MonsterContext.Provider value={{listMonsters, setMonster, monster, filter, setFilter}}>
      {children}
    </MonsterContext.Provider>
  )
}
