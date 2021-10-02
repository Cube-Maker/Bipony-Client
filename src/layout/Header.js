import React from "react";
import styles from "./Header.module.css";

import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faUserCircle,
  faSignInAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.grid}>
        <Link href="/">
          <div className={styles.logoContainer}>
            Bipony
          </div>
        </Link>
        <div className={styles.headerSearch}>
          <form>
            <input
              type="text"
              placeholder="Search in Bipony"
              className={styles.searchInput}
            />
            <button className={styles.searchBtn}>
              <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
            </button>
          </form>
        </div>
        <div className={styles.headerDetails}>
          <div className={styles.headerProfile}>
            <FontAwesomeIcon className={styles.icon} icon={faUserCircle} />
          </div>
          <div className={styles.headerCart}>
            <FontAwesomeIcon className={styles.icon} icon={faCartPlus} />
          </div>
          <div className={styles.headerLogin}>
            <FontAwesomeIcon className={styles.icon} icon={faSignInAlt} />
          </div>
        </div>
      </div>
    </header>
  );
}
