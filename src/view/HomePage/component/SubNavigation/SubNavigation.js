import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from './SubNavigation.module.css';

const SubNavigation = () => {
    return (
        <section className={`${styles.SubNavigation} grid grid-cols-2 md:grid-cols-6`}>
            <p className={styles.Items}>All categories</p>
            <Link href="/switch-to-seller"><p className={styles.SellButton}>Sell</p></Link>
            <p className={styles.Items2}>Help</p>
            <p className={styles.Items2}>Career</p>
        </section>
    );
};

export default SubNavigation;