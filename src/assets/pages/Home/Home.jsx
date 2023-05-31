import styles from './Home.module.css';

import img2 from '../../pictures/img/img1.jpg';
import img1 from '../../pictures/img/img2.jpg';
import ParallaxCard from '../../components/Parallax/ParallaxCard';
import Button from '../../components/Button/Button';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';


export default function Home() {
  return (
    <>
    <section className={styles.section}>
      <div className={`container ${styles.mision}`}>
        <div className={`${styles.containerDescription}`}>
          <h2 className='title'>¿Por qué cocinar al vapor? Simplemente, sabe mejor.</h2>
          <p className='paragraph'>Por fin, una forma de recalentar a la altura de la calidad de sus platos Mealprep. Nuestra tecnología LPS™ garantiza un recalentamiento suave para conservar el sabor y los nutrientes.</p>
          <Button text='Nuestra misión' to='/about' />
        </div>
        <ParallaxCard img1={img1} img2={img2} />
      </div>
      <div className={`container ${styles.mision}`}>
        <ParallaxCard img1={img1} img2={img2} />
        <div className={`${styles.containerDescription}`}>
          <h2 className='title'>¿Por qué cocinar al vapor? Simplemente, sabe mejor.</h2>
          <p className='paragraph'>Por fin, una forma de recalentar a la altura de la calidad de sus platos Mealprep. Nuestra tecnología LPS™ garantiza un recalentamiento suave para conservar el sabor y los nutrientes.</p>
          <Button text='Nuestra misión' to='/about' />
        </div>
      </div>
      <div className={`container ${styles.order}`}>
        <ParallaxProvider>
          <Parallax
            speed={-10} >
            <picture className={styles.orderPicture}>
              <img className={styles.orderImg} src={img2} alt="" />
            </picture>
          </Parallax>
        </ParallaxProvider>
        <div className={`glassmorphism ${styles.orderDescription}`}>
          <h3 className='title'>Tan fácil de pedir como de usar.</h3>
          <Button text='A la tienda' to='/order' />
        </div>
      </div>
    </section>
    </>
  )
}
