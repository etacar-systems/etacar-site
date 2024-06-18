import styles from './Techs.module.scss';
import Ruby from '../../shared/assets/techs/Ruby.svg';
import JS from '../../shared/assets/techs/JS.svg';
import TS from '../../shared/assets/techs/TS.svg';
import DevOps from '../../shared/assets/techs/DevOps.svg';
import Django from '../../shared/assets/techs/django.svg';
import Bootstrap from '../../shared/assets/techs/bootstrap.svg';
import Postgresql from '../../shared/assets/techs/postgresql.svg';
import Git from '../../shared/assets/techs/git.svg';
import html5 from '../../shared/assets/techs/html5.svg';
import figma from '../../shared/assets/techs/figma.svg';
import java from '../../shared/assets/techs/java.svg';

const techs = [
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

export function Techs() {
  const items = [...techs, ...techs];

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
