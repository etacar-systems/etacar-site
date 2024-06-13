
import { aboutUsImages } from '../../assets/images/AboutUs';
import { aboutUsIcons } from '../../assets/icons/AboutUs';
import style from './Location.module.scss';


interface LocationProps {
  sectionHeader?: string;
  geographyData: {
    title: string,
    tags: string,
  }[];

}

export const Location = ({sectionHeader, geographyData}: LocationProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.contentContainer}>
        {sectionHeader ? <div className={style.sectionHeader}>{sectionHeader}</div> : <></>}
        <div className={style.geographyData}>
          {geographyData.map(geographyElem =>
          <div className={style.geographyDataElement}>
            <div className={style.elementTitle}>{geographyElem.title}</div>
            <div className={style.elementTags}>{geographyElem.tags}</div>
          </div>)}
        </div>
        <div className={style.mapImage}>
          <img src={aboutUsImages.map} alt='map'/>
        </div>
      </div> 
    </div> 
  )
}