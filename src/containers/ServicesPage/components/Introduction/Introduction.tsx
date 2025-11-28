import style from './Introduction.module.scss';

export const Introduction = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.blockPrimary}>
          <div className={style.textPrimary}>Services are based on end-to-end AI product development</div>
        </div>
        <div className={style.blockSecondary}>
          <div className={style.textSecondary}>
            Discovery &amp; Opportunity Mapping <span className={style.textSecondaryBlue}>/</span>
          </div>
          <div className={style.textSecondary}>
            Solution Definition &amp; Architecture <span className={style.textSecondaryBlue}>/</span>
          </div>
          <div className={style.textSecondary}>
            Experience Design &amp; Prototyping <span className={style.textSecondaryBlue}>/</span>
          </div>
          <div className={style.textSecondary}>
            Implementation &amp; Testing <span className={style.textSecondaryBlue}>/</span>
          </div>
          <div className={style.textSecondary}>
            QA, Launch &amp; Continuous Optimization
          </div>
        </div>
      </div>
    </div>
  );
};
