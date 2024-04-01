import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

interface CardProps {
  thumbnail: string;
  title: string;
  desc: string;
  link: string;
}

export const Card: React.FC<CardProps> = ({ thumbnail, title, desc, link }) => (
  <Link to={link}>
    <div className={styles.home_card}>
      <img className={styles.home_card_image} src={thumbnail} alt={title} />
      <div>
        <h1 className={styles.home_card_title}>{title}</h1>
        <p className={styles.home_card_description}>{desc}</p>
      </div>
    </div>
  </Link>
);
