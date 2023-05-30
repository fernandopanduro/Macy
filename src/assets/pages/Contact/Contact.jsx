import Button from '../../components/Button/Button';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={`container ${styles.contact}`}>
        <h2 className={styles.title}>Tus inquietudes, nuestros correos.</h2>
        <div className={styles.contactDetails}>
          <p>Para la mayoria de las preguntas encontrará las respuestas aquí:</p>
          <Button to='/faqs' text='FAQs' />
        </div>

        <div className={styles.contactDetails}>
          <div>
            <p>Guadalajara, Jalisco</p>
            <p>La Perla 33</p>
            <p>3504 San Fernando</p>
          </div>
          <a className={styles.link} href="">info@mazy.com</a>
        </div>

        <div className={styles.contactDetails}>
          <p>Para preguntas sobre pedidos:</p>
          <a className={styles.link} href="">order@mazy.com</a>
        </div>

        <div className={styles.contactDetails}>
          <p>Para preguntas sobre pedidos de 20 piezas o más:</p>
          <a className={styles.link} href="">business@mazy.com</a>
        </div>

        <div className={styles.contactDetails}>
          <p>Para preguntas sobre comó usar Mazy:</p>
          <a className={styles.link} href="">help@mazy.com</a>
        </div>
    </section>
  )
}
