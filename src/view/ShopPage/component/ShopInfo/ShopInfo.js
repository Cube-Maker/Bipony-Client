import React from 'react'
import image from '../../../../images/dog.jpg'

import styles from './ShopInfo.module.css'

export default function ShopInfo() {
    return (
        <div className={styles.shopInfo}>
            <h2 className={styles.shopHeading}>your shop information</h2>
            <div className={styles.shopDetails}>
                <h2 className={styles.shopName}>Sourceman company</h2>
                <img src={image} alt="shop image" />
                <p>this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.</p>
                <button className={styles.editBtn}>edit</button>
            </div>
        </div>
    )
}
