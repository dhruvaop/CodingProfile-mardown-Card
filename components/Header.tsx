import React from "react";
import styles from "../src/styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.Container}>
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/">Leetcode</Link>
          </div>
          <div>
            <Link href="/codeforces">Codeforces</Link>
          </div>
          <div>
            <Link href="/codechef">Codechef</Link>
          </div>
          <div>
            <Link href="mailto:pranshujain0111@gmail.com" target="_blank">
              Reach Me
            </Link>
          </div>
          <div>
            <Link href="https://pranshuportfolio.netlify.app/" target="_blank">
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
