import React, { useState } from 'react'
import styles from './AddProduct.module.css'

import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';

export default function AddProduct() {
    const router = useRouter()
    const [image, setImage] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    const handleFile = (e) => {
        console.log(e.target.files[0])
        const imageData = new FormData()
        imageData.set('key', 'e5e7c3fd0f17a3470da9a5f0de336257')
        imageData.append('image', e.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => {
                console.log(response)
                setImage(response.data.data.display_url);
            })
            .catch(err => console.log(err))
    }
    return (
        <div className={styles.addProduct}>
            <h2 className={styles.addProductHeading}>Add your product</h2>
            <div className={styles.addProductSection} >
                <form  onSubmit={handleSubmit(onSubmit)} className={styles.addProductForm}>
                    <div>
                        <label className={styles.label} for="title">Your product title</label>
                        <input {...register("title")} className={styles.input} type="text" placeholder="product title" id="title" />
                    </div>
                    <div>
                        <label className={styles.label} for="desc">Your product description</label>
                        <input {...register("description")} className={styles.input} type="text" placeholder="product Description" id="desc" />
                    </div>
                    <div>
                        <label className={styles.label} for="category">Your product category</label>
                        <input {...register("category")} className={styles.input} type="text" placeholder="product category" id="category" />
                    </div>
                    <div>
                        <label className={styles.label} for="price">Your product Price</label>
                        <input {...register("price")} className={styles.input} type="number" placeholder="product Price" id="price" />
                    </div>
                    <div>
                        <label className={styles.label} for="image">product image</label>
                        <input onChange={handleFile} className={styles.input} type="file" placeholder="product image" id="image" />
                    </div>
                   <div>
                   <button
                            type="submit"
                            className={styles.submitBtn}
                        >Add Product</button>
                   </div>
                </form>
            </div>
        </div>
    )
}
