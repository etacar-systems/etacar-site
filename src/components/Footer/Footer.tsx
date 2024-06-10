import styles from './Footer.module.scss';
import {BottomRightArrowIcon} from '../../shared/ui/icons';

export function Footer() {
  return (
    <section className={styles.wrap}>

      <div className={styles.contacts}>


        <div className={styles.leftBlock}>
          <div className={styles.block}>
            <h4 className={styles.blockHead}>
                            Contacts
              <div> info@etacar.io
                <br/>+1 (831) 333-6202
              </div>
            </h4>
            <div className={styles.link}>
              <h4>Get in touch</h4>
              <BottomRightArrowIcon/>
            </div>
          </div>


          <div className={styles.block}>
            <div>Address
              <h4> 313 Pasadera Court,
                <br/>Monterey, California 93940
              </h4>
            </div>

            <div className={styles.link}>
              <h4>Google map</h4>
              <BottomRightArrowIcon/>
            </div>
          </div>

        </div>
        <div>
          <div className={styles.link}>
            <h4>Linkedin</h4>
            <BottomRightArrowIcon/>
          </div>
        </div>

      </div>
      <div className={styles.contacts}>
        <div>© 2024 EtaCar Systems. All rights reserved.</div>
        <div>Terms of use | Privacy policy</div>
      </div>
    </section>
  );
}
