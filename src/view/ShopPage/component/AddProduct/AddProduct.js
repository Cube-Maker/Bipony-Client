import React from 'react'
import styles from './AddProduct.module.css'

export default function AddProduct() {
    return (
        <div className={styles.addProduct}>
            <h2 className={styles.addProductHeading}>Add your product</h2>
            <div className={styles.addProductSection} >
                <form className={styles.addProductForm}>
                    <div>
                        <label className={styles.label} for="title">Your product title</label>
                        <input className={styles.input} type="text" placeholder="product title" id="title" />
                    </div>
                    <div>
                        <label className={styles.label} for="desc">Your product description</label>
                        <input className={styles.input} type="text" placeholder="product Description" id="desc" />
                    </div>
                    <div>
                        <label className={styles.label} for="category">Your product category</label>
                        <input className={styles.input} type="text" placeholder="product category" id="category" />
                    </div>
                    <div>
                        <label className={styles.label} for="price">Your product Price</label>
                        <input className={styles.input} type="number" placeholder="product Price" id="price" />
                    </div>
                    <div>
                        <label className={styles.label} for="image">product image</label>
                        <input className={styles.input} type="file" placeholder="product image" id="image" />
                    </div>
                </form>
            </div>
        </div>
    )
}
