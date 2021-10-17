import React from 'react';
import styles from './Banner.module.css'
import '../../../../../node_modules/antd/dist/antd.min.css'
import { Carousel } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faBiking, faBook, faFootballBall, faLaptop, faMobile, faPhone, faPhoneAlt, faShoppingBasket, faTshirt, faTv } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <section>
            <section className={styles.Banner}>
                {/* Category */}
                <section className={styles.Category}>
                    {/* List */}
                    <ul>
                        <li><FontAwesomeIcon icon={faMobile} className={styles.CategoryIcons} /> Mobile</li>
                        <li><FontAwesomeIcon icon={faBiking} className={styles.CategoryIcons} /> Bicks</li>
                        <li><FontAwesomeIcon icon={faLaptop} className={styles.CategoryIcons} /> Laptop</li>
                        <li><FontAwesomeIcon icon={faTv} className={styles.CategoryIcons} /> Smart TV</li>
                        <li><FontAwesomeIcon icon={faShoppingBasket} className={styles.CategoryIcons} /> Groceries</li>
                        <li><FontAwesomeIcon icon={faFootballBall} className={styles.CategoryIcons} /> Sports</li>
                        <li><FontAwesomeIcon icon={faTshirt} className={styles.CategoryIcons} /> Fasion</li>
                        <li><FontAwesomeIcon icon={faBaby} className={styles.CategoryIcons} /> Baby</li>
                        <li><FontAwesomeIcon icon={faBook} className={styles.CategoryIcons} /> Books</li>
                    </ul>
                </section>
                {/* Banner Slider Start*/}
                <section className={styles.Banner_Sliders}>
                    <Carousel autoplay>
                        {/* Slide 1 */}
                        <div className={styles.Banner_Slide1}>
                            <div className={styles.BannerContent}>
                                <p className={styles.Banner_Title}>Flash sale today</p>
                                <p className={styles.Banner_Description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus optio dolorem repellendus . . .</p>
                            </div>
                        </div>
                        {/* Slide 2 */}
                        <div className={styles.Banner_Slide2}>
                            <div className={styles.BannerContent}>
                                <p className={styles.Banner_Title}>Flash sale today</p>
                                <p className={styles.Banner_Description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus optio dolorem repellendus . . .</p>
                            </div>
                        </div>
                        {/* Slide 3 */}
                        <div className={styles.Banner_Slide3}>
                            <div className={styles.BannerContent}>
                                <p className={styles.Banner_Title}>Flash sale today</p>
                                <p className={styles.Banner_Description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus optio dolorem repellendus . . .</p>
                            </div>
                        </div>
                    </Carousel>
                </section>
                {/* Banner Slider End*/}
                {/* Discounts */}
                <section className={`${styles.BannerDiscount}`}>
                    <div className={`${styles.BannerDiscount1} shadow`}>
                        <div className={styles.BannerDiscountContent}>
                            <p className="text-2xl font-bold text-center m-0">40% off on</p>
                            <p className="text-2xl font-bold text-center">Groceries</p>
                        </div>
                    </div>
                    <div className={`${styles.BannerDiscount2} shadow`}>
                        <div className={styles.BannerDiscountContent}>
                            <p className="text-2xl font-bold text-center m-0">35% off on</p>
                            <p className="text-2xl font-bold text-center">Accesories</p>
                        </div>
                    </div>
                    <div className={`${styles.BannerDiscount3} shadow`}>
                        <div className={styles.BannerDiscountContent}>
                            <p className="text-2xl font-bold text-center m-0">20% off on</p>
                            <p className="text-2xl font-bold text-center">Books</p>
                        </div>
                    </div>
                    <div className={`${styles.BannerDiscount4} shadow`}>
                        <div className={styles.BannerDiscountContent}>
                            <p className="text-2xl font-bold text-center m-0">40% off on</p>
                            <p className="text-2xl font-bold text-center">T-shirts</p>
                        </div>
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