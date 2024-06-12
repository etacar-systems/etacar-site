import style from './Introducion.module.scss'

export const Introducion = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.blockPrimary}>
          <div className={style.textPrimary}>
            Services are based on full-cycle of custom software development
          </div>
        </div>
        <div className={style.blockSecondary}>
          <div className={style.textSecondary}>
            Discovery <span className={style.textSecondaryBlue}>/</span> Definition <span className={style.textSecondaryBlue}>/</span>
          </div>
          <div className={style.textSecondary}>
            Design <span className={style.textSecondaryBlue}>&</span>  Prototyping <span className={style.textSecondaryBlue}>/</span> 
          </div>
          <div className={style.textSecondary}>
            Development <span className={style.textSecondaryBlue}>&</span> Testing <span className={style.textSecondaryBlue}>/</span> 
          </div>
          <div className={style.textSecondary}>
            Quality Assurance <span className={style.textSecondaryBlue}>&</span> Delivery
          </div>
        </div>
      </div>
    </div>
  )
}