import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Button from '../Button/Button';
import styles from './CardAbout.module.css';

export default function CardAbout({ name, occupation, study, img, imgAvif, imgWebp, translateX, translateY }) {
  return (
    <div className={styles.cardAbout}>
        <div className={styles.parallax}>
            <ParallaxProvider>      
                <div className={styles.bg}></div>
                <Parallax
                    speed={10} 
                    translateX={translateX}
                    translateY={translateY}>
                    <picture className={styles.picture}>
                        <source srcSet={imgWebp} type='image/webp'/>
                        <source srcSet={imgAvif} type='image/avif'/>
                        <img width='300' height='300' decoding="async" loading="lazy" className={styles.img} src={img} alt="" />
                    </picture>
                </Parallax>
            </ParallaxProvider>
        </div>
        <div className={styles.cardAboutDescription}>
            <h3 className={styles.name}>{name}</h3>
            <h4 className={styles.occupation}>{occupation}</h4>
            <p>{study}</p>
            <Button text='Linkedin'/>
        </div>
    </div>
  )
}
