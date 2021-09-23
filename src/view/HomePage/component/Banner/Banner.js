import React from 'react';
import styles from './Banner.module.css'
import '../../../../../node_modules/antd/dist/antd.min.css'
import { Carousel } from 'antd';


const Banner = () => {
    return (
        <section className={styles.Banner}>
            {/* Category */}
            <section className={styles.Category}>
                {/* List */}
                <ul>
                    <li>Mobile</li>
                    <li>Bicks</li>
                    <li>Laptop</li>
                    <li>Smart TV</li>
                    <li>Groceries</li>
                    <li>Sports</li>
                    <li>Fasion</li>
                    <li>Baby</li>
                    <li>Books</li>
                </ul>
            </section>
            {/* Banner  Start*/}
            <div className={styles.Banner_Sliders}>
                <Carousel autoplay >
                    {/* Slide 1 */}
                    <div className={styles.Banner_Slide1}>
                        <p className={styles.Banner_Title}>Flash sale today</p>
                        <p className={styles.Banner_Description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus optio dolorem repellendus . . .</p>
                    </div>
                    {/* Slide 2 */}
                    <div className={styles.Banner_Slide2}>
                        <p className={styles.Banner_Title}>Flash sale today</p>
                        <p className={styles.Banner_Description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus optio dolorem repellendus . . .</p>
                    </div>
                    {/* Slide 3 */}
                    <div className={styles.Banner_Slide3}>
                        <p className={styles.Banner_Title}>Flash sale today</p>
                        <p className={styles.Banner_Description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus optio dolorem repellendus . . .</p>
                    </div>
                </Carousel>
            </div>
            {/* Banner  End*/}
        </section>
    );
};

export default Banner;