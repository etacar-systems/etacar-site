import styles from './Reviews.module.scss';
import Heading from '../../shared/ui/Heading/Heading';
import {LeftArrowIcon, RightArrowIcon} from '../../shared/ui/icons';
import PersonList from '../Person/ui/PersonList/PersonList';

export function Reviews() {
  return (
    <section className={styles.wrap}>
      <div className={styles.mainText}>
        <Heading text="Reviews"/>
      </div>
      <div className={styles.slider}>

        <div className={styles.arrowBlock}>
          <h4>What our partners say</h4>
          <div className={styles.iconBlock}>
            <LeftArrowIcon/>
            <RightArrowIcon/>
          </div>
        </div>


        <PersonList/>


      </div>

    </section>
  );
}
