import React from 'react'
import styles from './SellerSignUp.module.css'
import Link from 'next/link'

export default function SellerSignUp() {
    return (
        <section className={styles.sellerSignUp}>
            <div className={styles.sellerGreet}>
                sell on BIPONT
            </div>
            <div className={styles.account}>
                <p className={styles.paragraph}>create an account as a seller</p>
                <Link href="/seller-information"><button  className={styles.btn}>Sign up</button></Link>
            </div>
        </section>
    )
}
