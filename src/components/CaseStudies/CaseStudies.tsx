import '../../shared/styles/_all.scss';
import styles from './CaseStudies.module.scss';
import Heading from '../../shared/ui/Heading/Heading';
import LaptopImg from '../../shared/assets/LaptopPhoto.svg';
import {LeftArrowIcon, RightArrowIcon} from '../../shared/ui/icons';
import Tag from '../../shared/ui/Tag/Tag';
import Button from '../../shared/ui/Button/Button';

const tags = [
  'Marketplace', 'Ruby', 'PostgreSQL', 'OAuth 2.0', 'Twilio', 'Stripe', 'Sidekid', 'Apollo'
];

const description = [
  'Building a business marketplace connecting Clients and Suppliers for professional services and projects, based on experience sharing.',
  'Service businesses use the platform to identify new clients and prospects and to position their service offers using real market insights.'
];

export default function CaseStudies() {
  return (
    <section className={styles.wrap}>
      <div className={styles.mainText}>
        <Heading text="CASE STUDIES"/>
      </div>

      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.iconBlock}>
            <LeftArrowIcon/>
            <RightArrowIcon/>
          </div>
          <h4 className={styles.descHeading}>Business marketplace</h4>
          <div className={styles.tagList}>
            {tags.map(tag => <Tag key={tag} text={tag}/>)}
          </div>
          <div className={styles.text}>
            {description.map((text, index) => <p key={index}>{text}</p>)}
          </div>
          <Button
            text="All cases"
            onClick={() => {
            }}
            variant="iconButton"
            icon={<RightArrowIcon/>}
          />
        </div>

        <div className={styles.imgBlock}>
          <img src={LaptopImg} alt="Laptop"/>
        </div>
      </div>
    </section>
  );
}
