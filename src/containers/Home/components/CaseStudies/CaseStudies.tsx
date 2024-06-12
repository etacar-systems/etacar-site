import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { Section } from '../../../../components/Section';
import { useNavigate } from 'react-router-dom';
import { caseStudies } from '../../../../model/caseStudies';
import { Item } from './components/Item';
import style from './CaseStudies.module.scss';

export const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <Section theme={'blueLight'} title={`CASE \n STADIES`}>
      <div className={style.swiper}>
      <Swiper
        direction={'horizontal'}
        wrapperClass={style.swiper_wrapper}
        modules={[Navigation]}
        navigation={{ nextEl: '#swiper-forward', prevEl: '#swiper-back' }}
        
        spaceBetween={10}
      >
        {caseStudies.map((item, index) => (
          <SwiperSlide area-hidden key={index}>
            <Item description={item.description} image={item.image} tags={item.tags} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </Section>
  );
};
