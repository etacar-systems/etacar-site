import { aboutUsImages } from '../../assets/images/AboutUs';
import style from './Location.module.scss';

export const Location = () => {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.contentContainer}>
          {<div className={style.sectionHeader}>{'Clients Geography'}</div>}
          <div className={style.mapImage}>
            <img src={aboutUsImages.map} alt='map' />
          </div>
        </div>
      </div>
    </section>
  );
};
