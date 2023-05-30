import { Link } from 'react-router-dom';
import styles from './Button.module.css';


export default function Button({text, to}) {
  return (
    <button className={`${styles.btnOrder} ${styles.btn}`}><Link className={styles.link} to={to}>{text}</Link></button>
  )
}
