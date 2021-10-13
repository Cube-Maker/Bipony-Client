import React from 'react'
import styles from './Footer.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid_footer}>
                    <div className={styles.footer_logo}>
                        <h2>Bipony</h2>
                        {/* Social Icons */}
                        <div className={styles.socialIcons}>
                            <div className={styles.socialIcon}>
                                <FontAwesomeIcon className={styles.icon} icon={faFacebookF} />
                            </div>
                            <div className={styles.socialIcon}>
                                <FontAwesomeIcon className={styles.icon} icon={faGooglePlusG} />
                            </div>
                            <div className={styles.socialIcon}>
                                <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
                            </div>
                        </div>
                        <p className={styles.footer_heading}>Contactn US</p>
                        <address>
                            <p>Address: 623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
                            <p>Phone: 415-201-6370 Email: hello@bipony.com</p>
                        </address>
                    </div>
                    {/* Other links */}
                    <div className={styles.footer_links}>
                        <p className={styles.footer_heading}>Get to Know us</p>
                        <nav className={styles.footer_link}>
                            <ul>
                                <li>Carrer</li>
                                <li>Blogs</li>
                                <li>About Bipony</li>
                                <li>sustainability</li>
                                <li>press center</li>
                                <li>Investor Relation</li>
                                <li>bipony devices</li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.footer_links}>
                        <p className={styles.footer_heading}>Make Money with us</p>
                        <nav className={styles.footer_link}>
                            <ul>
                                <li>Carrer</li>
                                <li>Blogs</li>
                                <li>About Bipony</li>
                                <li>sustainability</li>
                                <li>press center</li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.footer_links}>
                        <p className={styles.footer_heading}>Get to Know us</p>
                        <nav className={styles.footer_link}>
                            <ul>
                                <li>Carrer</li>
                                <li>Blogs</li>
                                <li>About Bipony</li>
                                <li>sustainability</li>
                                <li>press center</li>
                                <li>Investor Relation</li>
                                <li>bipony devices</li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.footer_links}>
                        <p className={styles.footer_heading}>Get to Know us</p>
                        <nav className={styles.footer_link}>
                            <ul>
                                <li>Carrer</li>
                                <li>Blogs</li>
                                <li>About Bipony</li>
                                <li>sustainability</li>
                                <li>press center</li>
                                <li>Investor Relation</li>
                                <li>bipony devices</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

