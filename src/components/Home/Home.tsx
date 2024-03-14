import { Card } from "../Cards/Card";
import { Navbar } from "../Navbar/Navbar";
import styles from "./style.module.scss";

export const Home: React.FC = () => {
  return (
    <>
      <div className={styles.screen}>
        <Navbar />
        
        <div className={styles.card_container}>
          <Card
            thumbnail={
              "https://images.ctfassets.net/swt2dsco9mfe/7JMkOcQrCV1ubEnFSRyKGC/ba084c8cec4cbfc1c972cd354102285d/bx66w0bwE87WIQT.hero.jpg?q=70&w=1920"
            }
            title="Monstros"
            desc="Clique Aqui para adicionar um monstro"
          />
          <Card
            thumbnail="https://images.ctfassets.net/swt2dsco9mfe/24zGpu8o1eFqYuWMJlZ2q2/000b6dcbc4a3c6fdbc9170f3989886ec/324009_1920x1342.jpg?q=70&w=1920"
            title="Itens"
            desc="Clique aqui para pesquisar itens"
          />
        </div>
        <div className={styles.background}>
        
        </div>

      </div>
    </>
  );
};
