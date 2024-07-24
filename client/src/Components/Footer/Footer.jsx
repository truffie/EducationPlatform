import styles from "./Footer.module.css";
import { React } from "react";

export function Footer() {
  return (
    <footer className={`${"bgColored"} ${styles.footer}`}>
      <div className={"wrapper"}>
        <div className={`${styles.footerTop} ${"layout2Columns"} ${"lineAccent"}`}>
          <nav>
            <ul>
              <li>Home</li>
              <li>Textbook</li>
              <li>Statistics</li>
              <li>Sprint</li>
            </ul>
          </nav>
          <div className={styles.contacts}>
            <p>Alex</p>
            <p>Gabriel</p>
            <p>Marcus</p>
          </div>
        </div>
        <div className={`${styles.footerBottom} ${"layout2Columns"} `}>
          <div>
            <div className={styles.githubIco}></div>
            <div className={styles.gtIco}></div>
            <div className={styles.youtubeIco}></div>
          </div>
          <p>
            ©2024 Hschool. Project for <span>Hschool</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
