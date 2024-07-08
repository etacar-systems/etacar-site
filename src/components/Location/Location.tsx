import { useState } from 'react';
import { aboutUsImages } from '../../assets/images/AboutUs';
import style from './Location.module.scss';

export const data = ['Countries', 'Cities'];

export const Location = () => {
  const [mapType, setMapType] = useState('countries');

  const handleTypeFilter = (value: string) => {
    setMapType(value.toLowerCase());
    console.log(mapType);
  };

  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.contentContainer}>
          {<div className={style.sectionHeader}>{'Clients Geography'}</div>}
          <div className={style.tagsContainer}>
            {data.map(string => (
              <div
                key={string}
                className={`${mapType === string.toLowerCase() ? style.active : style.sortButton}`}
                onClick={() => handleTypeFilter(string.toLowerCase())}
              >
                {string}
              </div>
            ))}
          </div>
          <div className={style.mapImage}>
            {mapType === 'cities' ? <img src={aboutUsImages.mapCities} alt='mapCities' /> : undefined}
            {mapType === 'countries' ? <img src={aboutUsImages.mapCountries} alt='mapCountries' /> : undefined}
          </div>
        </div>
      </div>
    </section>
  );
};
