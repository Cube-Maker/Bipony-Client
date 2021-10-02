import React from 'react'
import ShopDetails from './component/ShopDetails/ShopDetails'
import Sidebar from './component/Sidebar/Sidebar'

import styles from './ShopPage.module.css'

export default function ShopPage() {
    return (
        <div className={styles.shopPage}>
            <Sidebar />
            <ShopDetails />
        </div>
    )
}