import styles from './Order.module.css';
import img from '../../pictures/img/product.png'

import { AiOutlineDown } from 'react-icons/ai'

export default function Order() {

  return (
    <div className={`container ${styles.order}`}>
        <div className={styles.description}>
            <h2 className={`title ${styles.title}`}>Steaming lunch, made easy.</h2>
            <p className={styles.subtitle}>Pre-Launch Angebot</p>
            <div className={styles.prices}>
                <p className={`${styles.currentPrice} ${styles.price}`}>269.00 MXN</p>
                <p className={`${styles.previousPrice} ${styles.price}`}>299.00 MXN</p>
            </div>
            <button className={styles.btn}>Buy Now</button>
            <p className={styles.shipping}>Shipping in September 2023</p>
        </div>

        <div className={styles.gallery}> 
            <img className={styles.img} src={img} alt="" />
            <img className={styles.img} src={img} alt="" />
            <img className={styles.img} src={img} alt="" />
            <img className={styles.img} src={img} alt="" />
        </div>

        <div className={styles.descriptions} >

            <div className={styles.description}>
              <input type="checkbox" name="dropdown-head" id="dropdown-head-add" />
              <label htmlFor='dropdown-head-add' className={styles.descriptionInformation}>
                <h3>Add-ons</h3>
                <AiOutlineDown size={20} className={styles.arrow} />
              </label>
                <div className={styles.descriptionDown}>
                  <p>If you need more food trays, you can order them as add-ons in sets of 2 or 4. Each additional food bowl has its own lid, which allows you to easily store your meal in the refrigerator.</p>
                </div>
            </div>
            
            <div className={styles.description}>
                <input type="checkbox" name="dropdown-head" id="dropdown-head-description" />
                <label htmlFor='dropdown-head-description' className={styles.descriptionInformation}>
                  <h3>Description</h3>
                  <AiOutlineDown size={20} className={styles.arrow} />
                </label>
                <div className={styles.descriptionDown}>
                <p>Steasy is a mobile mini-steamer with built-in battery. With it, you can heat up your pre-cooked lunch anywhere with high quality. Steasy offers space for dishes up to 450 g. Steaming takes only 15 minutes and you can enjoy your lunch hot and directly from the stainless steel food bowl. In addition, you can easily operate Steasy via app and can even time your meal in advance. Thanks to the innovative closure system, Steasy is not only leak-proof to transport, but also odor-free during steaming.</p>
                </div>
            </div>
            <div className={styles.description}>
              <input type="checkbox" name="dropdown-head" id="dropdown-head-specifications" />
              <label htmlFor='dropdown-head-specifications' className={styles.descriptionInformation}>
                <h3>Specifications</h3>
                <AiOutlineDown size={20} className={styles.arrow} />
              </label>
              <div className={styles.descriptionDown}>
                <p>Height: 80.4 </p>
                <p>Width: 176 mm</p>
                <p>Length: 234 mm</p>
                <p>Weight: 1300 g</p>
                <p>Volume food bowl: 940 ml</p>
              </div>
            </div>  
            <div className={styles.description}>
              <input type="checkbox" name="dropdown-head" id="dropdown-head-delivery" />
              <label htmlFor='dropdown-head-delivery' className={styles.descriptionInformation}>
                <h3>Scope of delivery</h3>
                <AiOutlineDown size={20} className={styles.arrow} />
              </label>
              <div className={styles.descriptionDown}>
                <p>1x Steasy</p>
                <p>1x stainless steel food tray</p>
                <p>1x charging cable</p>
                <p>App included</p>
              </div>
            </div>
        </div>

        
    </div>
  )
}
