import React from "react";
import styles from "../src/styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={styles.inside__footer}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Made by Pranshu Jain with 💕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
