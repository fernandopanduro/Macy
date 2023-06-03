import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsInstagram, BsFacebook, BsPinterest } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
        <div className={styles.containerFooter}>
            <div className={styles.sectionFooter}>
                <h4 className={styles.title}>Newsletter</h4>
                <label className={styles.newsletter} htmlFor="newsletter">
                    <input className={styles.newsletterInput} type="email" autoComplete='email' required placeholder='Email' />
                    <button className={styles.btn}><AiOutlineArrowRight className={styles.newsletterRight} size={25} /></button>
                </label>
            </div>
            <div className={styles.sectionFooter}>
                <h4 className={styles.title}>
                    <Link className={styles.titleLink} to="/">
                    <span className={styles.titleSpan}>
                        mazy
                    </span>
                    </Link>
                </h4>

                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <Link className={styles.listLink} to="/">Intro</Link>
                            <span className={styles.listBar}></span>
                        </li>
                        <li className={styles.listItem}>
                            <Link className={styles.listLink} to="/about">About Us</Link>
                            <span className={styles.listBar}></span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.sectionFooter}>
                <h4 className={styles.title}>Service</h4>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <Link className={styles.listLink} to="/faqs">FAQs</Link>
                            <span className={styles.listBar}></span>
                        </li>
                        <li className={styles.listItem}>
                            <Link className={styles.listLink} to="/contact">Contact</Link>
                            <span className={styles.listBar}></span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.sectionFooter}>
                <h4 className={styles.title}>Social</h4>
                <nav className={styles.nav}>
                    <ul className={`${styles.list} ${styles.listSocial}`}>
                        <li className={styles.listItem}>
                            <a className={styles.listLink} href='#' name='Instagram' target='_blank'><BsInstagram size={25}/></a>
                            <span className={styles.listBar}></span>
                        </li>
                        <li className={styles.listItem}>
                            <a className={styles.listLink} href='#' name='Facebook' target='_blank'><BsFacebook size={25}/></a>
                            <span className={styles.listBar}></span>
                        </li>
                        <li className={styles.listItem}>
                            <a className={styles.listLink} href='#' name='Pinterest' target='_blank'><BsPinterest size={25}/></a>
                            <span className={styles.listBar}></span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div>

        </div>
    </footer>
  )
}
