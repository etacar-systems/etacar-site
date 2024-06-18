import styles from './Scroller.module.scss';
import Ruby from '../../../../../shared/assets/images/techs/Ruby.svg';
import JS from '../../../../../shared/assets/images/techs/JS.svg';
import TS from '../../../../../shared/assets/images/techs/TS.svg';
import DevOps from '../../../../../shared/assets/images/techs/DevOps.svg';
import Django from '../../../../../shared/assets/images/techs/django.svg';
import Bootstrap from '../../../../../shared/assets/images/techs/bootstrap.svg';
import Postgresql from '../../../../../shared/assets/images/techs/postgresql.svg';
import Git from '../../../../../shared/assets/images/techs/git.svg';
import html5 from '../../../../../shared/assets/images/techs/html5.svg';
import figma from '../../../../../shared/assets/images/techs/figma.svg';
import java from '../../../../../shared/assets/images/techs/java.svg';

const scroller = [
  {src: Ruby, alt: 'Ruby'},
  {src: JS, alt: 'JS'},
  {src: TS, alt: 'TS'},
  {src: DevOps, alt: 'DevOps'},
  {src: Django, alt: 'Django'},
  {src: Postgresql, alt: 'Postgresql'},
  {src: Bootstrap, alt: 'Bootstrap'},
  {src: Git, alt: 'Git'},
  {src: html5, alt: 'html5'},
  {src: figma, alt: 'figma'},
  {src: java, alt: 'java'},
];

export function Scroller() {
  const items = [...scroller, ...scroller];

  return (
    <div className={styles.wrap}>
      <div className={styles.scroller}>
        {items.map((tech, index) => (
          <div key={index} className={styles.block}>
            <img className={styles.techImg} src={tech.src} alt={tech.alt}/>
          </div>
        ))}
      </div>
    </div>
  );
}
