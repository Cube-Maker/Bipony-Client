import React from 'react'
// import image from '../../../../images/dog.jpg';

import styles from './ShopInfo.module.css';

export default function ShopInfo() {
    return (
        <div className={styles.shopInfo}>
            <h2 className={styles.shopHeading}>your shop information</h2>
            <div className={styles.shopDetails}>
                <h2 className={styles.shopName}>Sourceman company</h2>
                <img src="https://cdn.pixabay.com/photo/2013/07/13/11/31/shop-158317_960_720.png" alt="shop image" />
                <p>this is an ecomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.this is an eccomerce shop.you can find everything here through Bipony.</p>
                <button className={styles.editBtn}>edit</button>
            </div>
        </div>
    )
}
