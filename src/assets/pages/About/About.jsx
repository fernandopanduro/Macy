import CardAbout from '../../components/CardAbout/CardAbout';
import styles from './About.module.css';

import claudio from '../../pictures/img/claudio.jpg'
import fernando from '../../pictures/img/fernando.jpg'
import johannes  from '../../pictures/img/Johannes.jpg'
import product  from '../../pictures/img/product.png'
import claudioAvif from '../../pictures/img/claudio.avif'
import fernandoAvif from '../../pictures/img/fernando.avif'
import johannesAvif  from '../../pictures/img/Johannes.avif'
import productAvif  from '../../pictures/img/product.avif'
import claudioWebp from '../../pictures/img/claudio.webp'
import fernandoWebp from '../../pictures/img/fernando.webp'
import johannesWebp  from '../../pictures/img/Johannes.webp'
import productWebp  from '../../pictures/img/product.webp'
import team  from '../../pictures/img/team.jpg'
import teamAvif  from '../../pictures/img/team.avif'
import teamWebp  from '../../pictures/img/team.webp'

import Order from '../../components/Order/Order';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function About() {
  return (
    <main className={`container ${styles.about}`}>

        <section className={styles.presentation}>
          <h2 className={`title ${styles.title}`}>We steam your lunch to the next level.</h2>
          <div className={`${styles.presentationDescription}`}>
            <div className={`${styles.bg1} ${styles.bg}`}></div>
            <div className={`${styles.bg2} ${styles.bg}`}></div>
            <ParallaxProvider>
              <Parallax
                className={styles.parallax}
                speed={10} >
                  <picture className={`${styles.imgProduct} ${styles.img}`}>
                    <source srcSet={productWebp} type='image/webp'/>
                    <source srcSet={productAvif} type='image/avif'/>
                    <img width='300' height='300' decoding="async" loading="lazy" className={`${styles.imgProduct} ${styles.img}`} src={product} alt="Mazy product" />
                  </picture>
              </Parallax>
            </ParallaxProvider>
          </div>
        </section>

        <section>
            <h2 className={`title ${styles.title}`}>The idea for Mazy came to us during our studies, when we took lunch from home and reheated it at university. The wait in front of the microwave was annoying, cost us a large part of the lunch time and it tasted less delicious than at home.</h2>
            <h2 className={`title ${styles.title}`}>So we developed a mobile mini-steamer that preserves flavor and nutrients. Under the motto: Mealprep for advanced.</h2>
        </section>

        <section>
            <h2 className={`title ${styles.title}`}>Fundadores</h2>
            <div className={styles.cardsAboutContainer}>
              <CardAbout 
                name='Claudio Ruiz' 
                occupation='CEO' 
                study='Dipl. engineer, robotics technician, hardware professional, cinema fan and tapas connoisseur.' 
                img={claudio}
                imgWebp={claudioWebp}
                imgAvif={claudioAvif} 
                translateX={['40px', '0px']} 
                translateY={['-50px', '50px']} />
              <CardAbout 
                name='Fernando Panduro' 
                occupation='CTO' 
                study='Graduate engineer, software developer and 3D print expert. Likes mountain bikes and dumplings.' 
                img={fernando}
                imgWebp={fernandoWebp}
                imgAvif={fernandoAvif} 
                translateX={['0px', '20px']} 
                translateY={['-10px', '-50px']} />
              <CardAbout 
                name='Johannes Hofer' 
                occupation='CMO' 
                study='Graduate business economist and the man for our marketing. Also violinist and pastalover.' 
                img={johannes}
                imgWebp={johannesWebp}
                imgAvif={johannesAvif} 
                translateX={['-40px', '-20px']} 
                translateY={['-80px', '30px']} />
            </div>
        </section>

        <picture className={styles.img}>
          <source srcSet={teamWebp} type='image/webp'/>
          <source srcSet={teamAvif} type='image/avif'/>
          <img width='300' height='300' decoding="async" loading="lazy" className={styles.img} src={team} alt="Team of Mazy" />
        </picture>

        <section>
          <h2 className={`title ${styles.title}`}>“We believe that the most important meal of the day is a hot lunch, because it gives energy to the body and mind. Its time to do it more justice.”</h2>
          <p className={styles.paragraph}>Hugo, un Reto</p>
        </section>

        <Order />

    </main>
  )
}
