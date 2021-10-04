import React from 'react';
import styles from './Banner.module.css'
import '../../../../../node_modules/antd/dist/antd.min.css'
import { Carousel } from 'antd'

const Banner = () => {
    return (
        <section>
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
                {/* Banner Slider Start*/}
                <section className={styles.Banner_Sliders}>
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
                </section>
                {/* Banner Slider End*/}
                {/* Discounts */}
                <section className={`${styles.BannerDiscount} text-gray-600`}>
                    <div className={`${styles.BannerDiscount1} shadow`}>
                        <p className="text-2xl font-bold text-center m-0">40% off on</p>
                        <p className="text-2xl font-bold text-center">Groceries</p>
                    </div>
                    <div className={`${styles.BannerDiscount2} shadow`}>
                        <p className="text-2xl font-bold text-center m-0">35% off on</p>
                        <p className="text-2xl font-bold text-center">Accesories</p>
                    </div>
                    <div className={`${styles.BannerDiscount3} shadow`}>
                        <p className="text-2xl font-bold text-center m-0">20% off on</p>
                        <p className="text-2xl font-bold text-center">Books</p>
                    </div>
                    <div className={`${styles.BannerDiscount4} shadow`}>
                        <p className="text-2xl font-bold text-center m-0">40% off on</p>
                        <p className="text-2xl font-bold text-center">T-shirts</p>
                    </div>
                </section>
            </section>

            {/* Mobile view category */}
            <section className={`${styles.MobileViewCategory} grid grid-cols-2 md:grid-cols-4 pt-10`}>

            </section>
        </section >
    );
};

export default Banner;