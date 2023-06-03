import { Link } from 'react-router-dom';
import styles from './Button.module.css';


export default function Button({text, to}) {
  return (
    <Link className={styles.link} to={to}><button className={`${styles.btnOrder} ${styles.btn}`}>{text}</button></Link>
  )
}
