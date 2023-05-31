import CardAbout from '../../components/CardAbout/CardAbout';
import styles from './About.module.css';

import img from '../../pictures/img/img1.jpg'

export default function About() {
  return (
    <main className={`container`}>
        <section>
            <h2 className={`title ${styles.title}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis omnis sed ipsam at aspernatur, repellendus suscipit aliquam tempora porro illum.</h2>
            <h2 className={`title ${styles.title}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis omnis sed ipsam at aspernatur, repellendus suscipit aliquam tempora porro illum.</h2>
        </section>

        <section>
            <h2 className={`title ${styles.title}`}>Fundadores</h2>
            <div className={styles.cardsAboutContainer}>
              <CardAbout 
                name='Fernando Panduro' 
                occupation='CEO' 
                study='Enginner Software' 
                img={img} 
                translateX={['40px', '0px']} 
                translateY={['-50px', '50px']} />
              <CardAbout 
                name='Fernando Panduro' 
                occupation='CEO' 
                study='Enginner Software' 
                img={img} 
                translateX={['0px', '20px']} 
                translateY={['-10px', '-50px']} />
              <CardAbout 
                name='Fernando Panduro' 
                occupation='CEO' 
                study='Enginner Software' 
                img={img} 
                translateX={['-40px', '-20px']} 
                translateY={['-80px', '30px']} />
            </div>
        </section>
    </main>
  )
}
