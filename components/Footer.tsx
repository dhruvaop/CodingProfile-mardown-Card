import React from "react";
import styles from "../src/styles/Footer.module.css";

const Footer = () => {
  const githubAvatarUrl = "https://avatars.githubusercontent.com/u/71749153?v=4";

  return (
    <footer>
      <div className={styles.inside__footer}>
        <div className={styles.footerContent}>
          <img
            src={githubAvatarUrl}
            alt="Dhruva Bhattacharya's GitHub Avatar"
            className={styles.avatar}
          />
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Made by{" "}
            <span className={styles.authorName}>Dhruva Bhattacharya</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
