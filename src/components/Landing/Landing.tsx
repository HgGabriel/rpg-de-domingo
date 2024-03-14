import dndlogo from "../../assets/DD-Logo.png";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export const Landing: React.FC = () => {
  return (
    <>
      <div className={styles.screen}>
        <div className={styles.landing_container}>
          <a href="https://dnd.wizards.com/" target="_blank">
            <img src={dndlogo} className={styles.logo} alt="D&D logo" />
          </a>
          <h1 className={styles.title}>RPG de Domingo</h1>
          <Link className={styles.button_enter} to={"/Home"}> Entrar </Link>
        </div>
      </div>
    </>
  );
}
