import styles from "./style.module.scss";
import dndlogo from "../../../assets/D&D-logo.svg";

export const Navbar: React.FC = () => {
  return (
    <header>
      <div className={styles.container}>
        <nav className={styles.header_navbar}>
          <ul className={styles.nav_list}>

            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <div className={styles.header_logo}>
                <img src={dndlogo} alt="" />
              </div>
            </li>

            <li>
              <a href="/">Sobre</a>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};
