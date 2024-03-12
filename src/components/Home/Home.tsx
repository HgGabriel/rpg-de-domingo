import styles from "./style.module.scss";

function Home() {
  return (
    <>
      <div className={styles.screen}>
        <div className={styles.home_container}>
          <div className={styles.menu_card}>
            <img
              className={styles.menu_card_image}
              src={
                "https://images.ctfassets.net/swt2dsco9mfe/7JMkOcQrCV1ubEnFSRyKGC/ba084c8cec4cbfc1c972cd354102285d/bx66w0bwE87WIQT.hero.jpg?q=70&w=1920"
              }
            />
            <h1 className={styles.menu_card_title}>Monstros</h1>
            <p className={styles.menu_card_description}>Clique Aqui para Pesquisar Monstros de DND</p>
          </div>

          <div className={styles.menu_card}>
            <img
              className={styles.menu_card_image}
              src={
                "https://images.ctfassets.net/swt2dsco9mfe/24zGpu8o1eFqYuWMJlZ2q2/000b6dcbc4a3c6fdbc9170f3989886ec/324009_1920x1342.jpg?q=70&w=1920"
              }
            />
            <h1 className={styles.menu_card_title}>Itens</h1>
            <p className={styles.menu_card_description}>
              Clique Aqui para Pesquisar itens de DND
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
