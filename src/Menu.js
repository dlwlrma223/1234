import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <div className={styles.menu}>
        <Link to="/" className={styles.box}>
          <div>首頁</div>
        </Link>
        <Link to="/HeroList" className={styles.box}>
          <div>英雄列表</div>
        </Link>
        <Link to="/UpDate" className={styles.box}>
          <div>最新更新</div>
        </Link>
        <Link to="/Match" className={styles.box}>
          <div>比賽一覽</div>
        </Link>
        <video className={styles.videoBackground} autoPlay loop muted>
          <source src="/img/BgMovie.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
}
