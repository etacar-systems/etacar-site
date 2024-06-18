import styles from './Industries.module.scss';
import Heading from '../../shared/ui/Heading/Heading';
import Education from '../../shared/assets/industries/Education.svg';
import RealEstate from '../../shared/assets/industries/Real_Estate.svg';
import Applications from '../../shared/assets/industries/applications.png';
import eCommerce from '../../shared/assets/industries/eCommerce.svg';
import {BookIcon, CartIcon, EnterpriseIcon, HomeIcon} from '../../shared/ui/icons';

const industriesData = [
  {
    imgSrc: Education,
    alt: 'Education',
    icon: BookIcon,
    title: 'Education',
  },
  {
    imgSrc: RealEstate,
    alt: 'Real Estate',
    icon: HomeIcon,
    title: 'Real Estate',
  },
  {
    imgSrc: Applications,
    alt: 'Enterprise applications',
    icon: EnterpriseIcon,
    title: 'Enterprise applications',
  },
  {
    imgSrc: eCommerce,
    alt: 'B2C & B2B eCommerce',
    icon: CartIcon,
    title: 'B2C & B2B eCommerce',
  },
  {
    imgSrc: eCommerce,
    alt: 'B2C & B2B eCommerce',
    icon: CartIcon,
    title: 'B2C & B2B eCommerce',
  }
];

export function Industries() {
  return (
    <section className={styles.wrap}>
      <div className={styles.mainText}><Heading text={'Industries'}/></div>
      <div className={styles.slider}>
        {industriesData.map((industry, index) => (
          <div className={index === industriesData.length - 1 ? styles.lastBlock : styles.block} key={index}>
            <img src={industry.imgSrc} alt={industry.alt}/>
            <div className={styles.desc}>
              <industry.icon mainColor={'#1F1F1F'}/>
              <h3>{industry.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
