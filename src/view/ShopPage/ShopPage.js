import React, { useState } from 'react'
import ShopDetails from './component/ShopDetails/ShopDetails'
import Sidebar from './component/Sidebar/Sidebar'

import styles from './ShopPage.module.css'

export default function ShopPage() {
    const [link,setLink] = useState(1)
    return (
        <div className={styles.shopPage}>
            <Sidebar setLink={setLink} />
            <ShopDetails link = {link}/>
        </div>
    )
}