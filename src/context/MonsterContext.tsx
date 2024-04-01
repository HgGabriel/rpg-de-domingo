import { createContext } from "react";

interface MonsterProviderProps {
  children: React.ReactNode
}

export const MonsterContext = createContext({})

export const MonsterProvider:React.FC<MonsterProviderProps> = ({children}) => {
  return(
  <MonsterContext.Provider value={""}>
    {children}
  </MonsterContext.Provider>)
}