import React from 'react'
import styles from './Header.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faUserCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

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
                        <FontAwesomeIcon className={styles.icon} icon={faSignInAlt} />
                    </div>
                </div>
            </div>
        </header>
    )
}
