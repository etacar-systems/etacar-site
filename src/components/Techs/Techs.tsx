import styles from './Techs.module.scss';
import Ruby from '../../shared/assets/techs/Ruby.svg';
import JS from '../../shared/assets/techs/JS.svg';
import TS from '../../shared/assets/techs/TS.svg';
import DevOps from '../../shared/assets/techs/DevOps.svg';

const techs = [
  {src: Ruby, alt: 'Ruby'},
  {src: JS, alt: 'JS'},
  {src: TS, alt: 'TS'},
  {src: DevOps, alt: 'DevOps'}
];

export function Techs() {

  const totalBlocks = 18;
  const jsRepeats = totalBlocks - techs.length;

  return (
    <div className={styles.wrap}>
      {techs.map((tech, index) => (
        <div key={index} className={styles.block}>
          <img src={tech.src} alt={tech.alt}/>
        </div>
      ))}
      {Array.from({length: jsRepeats}).map((_, index) => (
        <div key={techs.length + index} className={styles.block}>
          <img src={JS} alt={'JS'}/>
        </div>
      ))}
    </div>
  );
}
