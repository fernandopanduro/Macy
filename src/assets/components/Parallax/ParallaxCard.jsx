import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import styles from './ParallaxCard.module.css'

export default function ParallaxCard({img1, img1Webp, img1Avif, img2, img2Webp, img2Avif}) {
  return (
    <ParallaxProvider>
    <div className={styles.parallax}>
      <Parallax  
        speed={-10} 
        translateX={['-50px', '-50px']}
        translateY={['-50px', '-150px']}>      
        <picture className={`${styles.picture1} ${styles.picture}`}>
          <source srcSet={img1Webp} type='image/webp'/>
          <source srcSet={img1Avif} type='image/avif'/>
          <img width='300' height='300' decoding="async" loading="lazy" className={styles.img} src={img1} alt="" />
        </picture>
      </Parallax>
      <Parallax 
        speed={10}
        translateX={['200px', '150px']}
        translateY={['-250px', '-250px']}>
        <picture className={`${styles.picture2} ${styles.picture}`}>
          <source srcSet={img2Webp} type='image/webp'/>
          <source srcSet={img2Avif} type='image/avif'/>
          <img width='300' height='300' decoding="async" loading="lazy" className={styles.img} src={img2} alt="" />
        </picture>
      </Parallax>   
    </div>
  </ParallaxProvider>
  )
}
