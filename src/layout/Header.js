import React from "react";
import styles from "./Header.module.css";

<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.grid}>
        <div className={styles.logoContainer}>Bipony</div>
        <div className={styles.headerSearch}>
          <form>
            <input
              type="text"
              placeholder="Search Product"
              className={styles.searchInput}
            />
            <input type="submit" className={styles.searchBtn} />
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
            <button className={styles.loginBtn}>LogIn</button>
          </div>
        </div>
      </div>
    </header>
  );
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faUserCircle, faSignInAlt, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.grid}>
                <div className={styles.logoContainer}>
                    Bipony
                </div>
                <div className={styles.headerSearch}>
                    <form >
                        <input type="text" placeholder="Search Product" className={styles.searchInput} />
                        <button className={styles.searchBtn}><FontAwesomeIcon className={styles.searchIcon} icon={faSearch} /></button>
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
    )
>>>>>>> a0ef8c8e443f742927e34ec0e82522c7adca57fa
}
