import React, { useState } from 'react'
import styles from './Sidebar.module.css'

export default function Sidebar({ setLink}) {
    return (
        <div className={styles.sideBar}>
            <nav className={styles.sideNav}>
                <ul className={styles.sideNavList}>
                    <li onClick={() => setLink(1)} className={styles.sideNavLink}>Shop Info</li>
                    <li onClick={() => setLink(2)} className={styles.sideNavLink}>Add Product</li>
                    <li onClick={() => setLink(3)} className={styles.sideNavLink}>Products</li>
                </ul>
            </nav>
        </div>
    )
}
