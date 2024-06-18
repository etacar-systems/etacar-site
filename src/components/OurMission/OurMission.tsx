import '../../shared/styles/_all.scss';
import {PointIcon, RightArrowIcon} from '../../shared/ui/icons';
import Button from '../../shared/ui/Button/Button';
import team from '../../shared/assets/Number.svg';
import styles from './OurMission.module.scss';
import Heading from '../../shared/ui/Heading/Heading';


const missionItems = [
  'Customer is number one',
  `Customer satisfaction and our reputation 
are paramount`,
  'Cost effective solutions',
  'Saving time and resources',
  'Transparency and communication',
  'Partnership and long term relationships'
];


export function OurMission() {
  return (
    <section className={styles.wrap}>
      <div className={styles.mainText}><Heading text={'OUR MISSION'}/></div>
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.text}>
                        We believe that teamwork and partnership
            <br/> are key to our joint success. Our passion is to
                        deliver stable and functional products.
                        We build viable and competitive products from A to Z
                        using the following principles:
          </div>

          <ul className={styles.list}>
            {missionItems.map((item, index) => (
              <li className={styles.list__li} key={index}>
                <PointIcon mainColor={'#1F1F1F'}/>
                {item}
              </li>
            ))}
          </ul>
        </div>


        <div className={styles.right}>
          <div className={styles.block}>
            <div className={styles.blockInfo}>
              <span> <h2 className={styles.number}>50+</h2></span>
              <span>  <h4 className={styles.h4}>Completed projects</h4> </span>
            </div>
            <div className={styles.blockInfo}>
              <h2 className={styles.number}>9+</h2>
              <h4 className={styles.h4}>Years of experience</h4>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.blockInfo}>
              <h2 className={styles.number}>9+</h2>
              <h4 className={styles.h4}>Client countries</h4>
            </div>
            <div className={styles.photo}>
              <img src={team} alt={'Team'}/>
            </div>
          </div>
          <Button
            text={'About us'}
            onClick={() => console.log('Button clicked')}
            icon={<RightArrowIcon/>}
            variant={'iconButton'}
          />

        </div>


      </div>
    </section>
  );

}
