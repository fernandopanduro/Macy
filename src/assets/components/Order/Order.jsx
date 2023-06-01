import styles from './Order.module.css';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Button from '../Button/Button';
import img from '../../pictures/img/products.jpg'

export default function Order() {
  return (
    <div className={`container ${styles.order}`}>
        <ParallaxProvider>
          <Parallax
            speed={-10} >
            <picture className={styles.orderPicture}>
              <img className={styles.orderImg} src={img} alt="" />
            </picture>
          </Parallax>
        </ParallaxProvider>
        <div className={`glassmorphism ${styles.orderDescription}`}>
          <h3 className='title'>As easy to order as it is to use.</h3>
          <Button text='To the store' to='/order' />
        </div>
    </div>
  )
}
