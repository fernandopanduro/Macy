import styles from './Home.module.css';

import benefits01 from '../../pictures/img/benefits_01.jpg';
import benefits02 from '../../pictures/img/benefits_02.jpg';
import gallery1 from '../../pictures/img/gallery_01_2x.jpg';
import gallery2 from '../../pictures/img/gallery_02_2x.jpg';
import gallery4 from '../../pictures/img/gallery_04_new_front2x.jpg';
import gallery5 from '../../pictures/img/gallery_05_2x.jpg';
import product from '../../pictures/img/product.png';
import benefits01Avif from '../../pictures/img/benefits_01.avif';
import benefits02Avif from '../../pictures/img/benefits_02.avif';
import gallery1Avif from '../../pictures/img/gallery_01_2x.avif';
import gallery2Avif from '../../pictures/img/gallery_02_2x.avif';
import gallery4Avif from '../../pictures/img/gallery_04_new_front2x.avif';
import gallery5Avif from '../../pictures/img/gallery_05_2x.avif';
import productAvif from '../../pictures/img/product.avif';
import benefits01Webp from '../../pictures/img/benefits_01.webp';
import benefits02Webp from '../../pictures/img/benefits_02.webp';
import gallery1Webp from '../../pictures/img/gallery_01_2x.webp';
import gallery2Webp from '../../pictures/img/gallery_02_2x.webp';
import gallery4Webp from '../../pictures/img/gallery_04_new_front2x.webp';
import gallery5Webp from '../../pictures/img/gallery_05_2x.webp';
import productWebp from '../../pictures/img/product.webp';

import video from '../../pictures/video/product_animation.mp4'

import ParallaxCard from '../../components/Parallax/ParallaxCard';
import Button from '../../components/Button/Button';
import Order from '../../components/Order/Order';


export default function Home() {
  window.scrollTo(0, 0)
  return (
    <>
    <section className={styles.section}>

      <div className={`container ${styles.presentation}`}>
        <h2 className={`title ${styles.title} ${styles.titlePrimary}`}>Steaming lunch, made easy.</h2>
        <video className={styles.video} src={video} autoPlay muted playsInline></video>
      </div>

      <div className='container'>
        <h2 className={`title ${styles.title}`}>Mazy is a mobile mini-steamer with built-in battery. With it, you can heat up your pre-cooked lunch anywhere with high quality.</h2>
      </div>

      <div className={`${styles.gallery}`}>
        <picture className={`${styles.img1} ${styles.img}`}>
          <source srcSet={gallery1Webp} type='image/webp'/>
          <source srcSet={gallery1Avif} type='image/avif'/>
          <img width='300' height='300' decoding="async" loading="lazy" className={`${styles.img1} ${styles.img}`} src={gallery1} alt="" />
        </picture>
        <picture className={`${styles.img2} ${styles.img}`}>
          <source srcSet={gallery2Webp} type='image/webp'/>
          <source srcSet={gallery2Avif} type='image/avif'/>
          <img width='300' height='300' decoding="async" loading="lazy" className={`${styles.img2} ${styles.img}`} src={gallery2} alt="" />
        </picture>
        <picture className={`${styles.img4} ${styles.img}`}>
          <source srcSet={gallery4Webp} type='image/webp'/>
          <source srcSet={gallery4Avif} type='image/avif'/>
          <img width='300' height='300' decoding="async" loading="lazy" className={`${styles.img4} ${styles.img}`} src={gallery4} alt="" />
        </picture>
        <picture className={`${styles.img5} ${styles.img}`}>
          <source srcSet={gallery5Webp} type='image/webp'/>
          <source srcSet={gallery5Avif} type='image/avif'/>
          <img width='300' height='300' decoding="async" loading="lazy" className={`${styles.img5} ${styles.img}`} src={gallery5} alt="" />
        </picture>
        <picture className={`${styles.img3} ${styles.img}`}>
          <source srcSet={productWebp} type='image/webp'/>
          <source srcSet={productAvif} type='image/avif'/>
          <img width='300' height='300' decoding="async" loading="lazy" className={`${styles.img3} ${styles.img}`} src={product} alt="" />
        </picture>
      </div>

      <div className={`container ${styles.mision}`}>
        <div className={`${styles.containerDescription}`}>
          <h2 className='title'>Why should you steam your lunch? It simply tastes better.</h2>
          <p className='paragraph'>Finally, a way to reheat that matches the quality of your Mealprep dishes. Our LPS™ technology ensures gentle reheating to best preserve flavor and nutrients.</p>
          <Button text='Our mission' to='/about' />
        </div>
        <ParallaxCard img2={product} img2Avif={productAvif} img2Webp={productWebp} img1={benefits01} img1Webp={benefits01Webp} img1Avif={benefits01Avif} />
      </div>
      <div className={`container ${styles.mision}  ${styles.mision2}`}>
        <ParallaxCard img2={product} img2Avif={productAvif} img2Webp={productWebp} img1={benefits02} img1Webp={benefits02Webp} img1Avif={benefits02Avif} />
        <div className={`${styles.containerDescription}`}>
          <h2 className='title'>Smart steaming on the go. High-quality, contemporary and user-friendly.</h2>
          <p className='paragraph'>Mazy is easy to use via app and you can even time your meal in advance. Thanks to the innovative closure system, Mazy is not only spill-proof to transport but also odor-free when steaming.</p>
          <Button text='Product Details' to='/productdetails' />
        </div>
      </div>
      <Order />
    </section>
    </>
  )
}
