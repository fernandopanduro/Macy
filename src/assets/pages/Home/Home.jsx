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
          <h2 className='title'>Why should you steam your lunch? It simply tastes better.</h2>
          <p className='paragraph'>Finally, a way to reheat that matches the quality of your Mealprep dishes. Our LPS™ technology ensures gentle reheating to best preserve flavor and nutrients.</p>
          <Button text='Our mission' to='/about' />
        </div>
        <ParallaxCard img1={img1} img2={img2} />
      </div>
      <div className={`container ${styles.mision}`}>
        <ParallaxCard img1={img1} img2={img2} />
        <div className={`${styles.containerDescription}`}>
          <h2 className='title'>Smart steaming on the go. High-quality, contemporary and user-friendly.</h2>
          <p className='paragraph'>Steasy is easy to use via app and you can even time your meal in advance. Thanks to the innovative closure system, Steasy is not only spill-proof to transport but also odor-free when steaming.</p>
          <Button text='Product Details' to='/productdetails' />
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
          <h3 className='title'>As easy to order as it is to use.</h3>
          <Button text='To the store' to='/order' />
        </div>
      </div>
    </section>
    </>
  )
}
