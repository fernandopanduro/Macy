import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs'

import styles from './Header.module.css';
import Button from '../Button/Button';
import { HiMenuAlt1 } from 'react-icons/hi'
import { useState } from 'react';

export default function Header() {

  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className={`glassmorphism ${styles.header} container`}>

      <div className={styles.menu}>
        <HiMenuAlt1 size={25} onClick={() => setIsMenuActive(!isMenuActive)}/>
      </div>
      <div className={`${isMenuActive ? styles.menuLinks : styles.hide}`}>
        <Link to='/'>Home</Link>
        <Link to='/productdetails'>Product Details</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact</Link>
      </div>

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
        <Button text='Order' to='/order'/>
        <button className={`${styles.btnCart} ${styles.btn}`}><BsCart2 size={25}/></button>
      </div>

    </header>
  )
}
