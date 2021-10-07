import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import AllProduct from '../AllProduct/AllProduct';
import ShopInfo from '../ShopInfo/ShopInfo';
import styles from './ShopDetails.module.css';

export default function ShopDetails({link}) {
    return (
        <div className={styles.shopDetails}>
            {
                link === 1 && <ShopInfo />
            }
            {
                link === 2 &&  <AddProduct />
            }
            {
                link === 3 && <AllProduct />
            }
        </div>
    )
}
