import { aboutUsImages } from '../../../../assets/images/AboutUs';
import { aboutUsIcons } from '../../../../assets/icons/AboutUs';
import { data, expirience } from './data';
import style from './Expirience.module.scss';


export const Expirience = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.block}>
          <div className={style.rowTop}>
            <div className={style.smallHighBlock}>
              <img src={aboutUsImages.workExpirience1} alt='Work Expirience' />
            </div>
            <div className={style.smallHighTextBlock}>
              {expirience.map(exp => (
                <div className={style.primaryTextContainer}>
                  <div className={style.textPrimary}>{exp.number}</div>
                  <div>{exp.desc}</div>
                </div>
              ))}
            </div>
            <div className={style.bigHighBlock}>
              <img src={aboutUsImages.workExpirience2} alt='Work Expirience' />
            </div>
          </div>
          <div className={style.rowBottom}>
            <div className={style.smallBlock}>
              <img src={aboutUsImages.workExpirience3} alt='Work Expirience' />
            </div>
            <div className={style.smallBlock}>
              <img src={aboutUsImages.workExpirience4} alt='Work Expirience' />
            </div>
            <div className={style.smallBlock}>
              <img src={aboutUsImages.workExpirience5} alt='Work Expirience' />
            </div>
            <div className={style.smallTextBlock}>
              {data.map(string => (
                <div className={style.secondaryTextContainer}>
                  <div>
                    <img src={aboutUsIcons.success} alt='success' />
                  </div>
                  <div>{string}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
