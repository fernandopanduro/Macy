import styles from './Home.module.css';

import benefits01 from '../../pictures/img/benefits_01.jpg';
import benefits02 from '../../pictures/img/benefits_02.jpg';
import gallery1 from '../../pictures/img/gallery_01_@2x.jpg';
import gallery2 from '../../pictures/img/gallery_02_@2x.jpg';
import gallery4 from '../../pictures/img/gallery_04_new_front@2x.jpg';
import gallery5 from '../../pictures/img/gallery_05_@2x.jpg';
import product from '../../pictures/img/product.png';

import video from '../../pictures/video/product_animation.mp4'

import ParallaxCard from '../../components/Parallax/ParallaxCard';
import Button from '../../components/Button/Button';
import Order from '../../components/Order/Order';


export default function Home() {
  return (
    <>
    <section className={styles.section}>

      <div className={`container ${styles.container}`}>
        <h2 className={`title ${styles.title} ${styles.titlePrimary}`}>Steaming lunch, made easy.</h2>
        <video className={styles.video} src={video} autoPlay muted playsInline></video>
      </div>

      <div className='container'>
        <h2 className={`title ${styles.title}`}>Steasy is a mobile mini-steamer with built-in battery. With it, you can heat up your pre-cooked lunch anywhere with high quality.</h2>
      </div>

      <div className={`${styles.gallery}`}>
        <img className={`${styles.img1} ${styles.img}`} src={gallery1} alt="" />
        <img className={`${styles.img2} ${styles.img}`} src={gallery2} alt="" />
        <img className={`${styles.img3} ${styles.img}`} src={product} alt="" />
        <img className={`${styles.img4} ${styles.img}`} src={gallery4} alt="" />
        <img className={`${styles.img5} ${styles.img}`} src={gallery5} alt="" />
      </div>

      <div className={`container ${styles.mision}`}>
        <div className={`${styles.containerDescription}`}>
          <h2 className='title'>Why should you steam your lunch? It simply tastes better.</h2>
          <p className='paragraph'>Finally, a way to reheat that matches the quality of your Mealprep dishes. Our LPS™ technology ensures gentle reheating to best preserve flavor and nutrients.</p>
          <Button text='Our mission' to='/about' />
        </div>
        <ParallaxCard img2={product} img1={benefits01} />
      </div>
      <div className={`container ${styles.mision}`}>
        <ParallaxCard img2={product} img1={benefits02} />
        <div className={`${styles.containerDescription}`}>
          <h2 className='title'>Smart steaming on the go. High-quality, contemporary and user-friendly.</h2>
          <p className='paragraph'>Steasy is easy to use via app and you can even time your meal in advance. Thanks to the innovative closure system, Steasy is not only spill-proof to transport but also odor-free when steaming.</p>
          <Button text='Product Details' to='/productdetails' />
        </div>
      </div>
      <Order />
    </section>
    </>
  )
}
