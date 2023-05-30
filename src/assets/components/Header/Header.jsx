import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs'

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <h1 className={styles.title}>
        <Link className={styles.titleLink} to="/">
          <span className={styles.titleSpan}>
            mazy
          </span>
        </Link>
      </h1>

      <nav className={styles.nav}>
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <Link className={styles.listLink} to="/productdetails">Product Details</Link>
                <span className={styles.listBar}></span>
            </li>
            <li className={styles.listItem}>
                <Link className={styles.listLink} to="/about">About Us</Link>
                <span className={styles.listBar}></span>
            </li>
            <li className={styles.listItem}>
                <Link className={styles.listLink} to="/contact">Contact</Link>
                <span className={styles.listBar}></span>
            </li>
        </ul>
      </nav>

      <div className={styles.btns}>
        <button className={`${styles.btnOrder} ${styles.btn}`}>Order</button>
        <button className={`${styles.btnCart} ${styles.btn}`}><BsCart2 size={25}/></button>
      </div>

    </header>
  )
}
