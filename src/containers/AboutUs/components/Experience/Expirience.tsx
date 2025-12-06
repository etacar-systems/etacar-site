'use client';

import { data, expirience } from './data';
import style from './Expirience.module.scss';

export const Expirience = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.block}>
          <div className={style.rowTop}>
            <div className={style.smallHighBlock}>
              <img src='/images/AboutUs/workExpirience1.webp' alt='Work Expirience' />
            </div>
            <div className={style.smallHighTextBlock}>
              {expirience.map((exp, i) => (
                <div key={i} className={style.primaryTextContainer}>
                  <div className={style.textPrimary}>{exp.number}</div>
                  <div>{exp.desc}</div>
                </div>
              ))}
            </div>
            <div className={style.bigHighBlock}>
              <img src='/images/AboutUs/workExpirience2.webp' alt='Work Expirience' />
            </div>
          </div>
          <div className={style.rowBottom}>
            <div className={style.smallBlock}>
              <img src='/images/AboutUs/workExpirience3.webp' alt='Work Expirience' />
            </div>
            <div className={style.smallBlock}>
              <img src='/images/AboutUs/workExpirience4.webp' alt='Work Expirience' />
            </div>
            <div className={style.smallBlock}>
              <img src='/images/AboutUs/workExpirience5.webp' alt='Work Expirience' />
            </div>
            <div className={style.smallTextBlock}>
              {data.map((string, i) => (
                <div key={i} className={style.secondaryTextContainer}>
                  <div>
                    <img src='/icons/AboutUs/success.svg' alt='success' />
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
