import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Section } from '../../../../components/Section';
import { mainCases } from '../../../../model/mainCases';
import { Item } from './components/Item';
import style from './CaseStudies.module.scss';

export const CaseStudies = () => {
  return (
    <Section theme={'blueLight'} title={`CASE \n STUDIES`}>
      <div className={style.swiper}>
        <Swiper
          direction={'horizontal'}
          wrapperClass={style.swiper_wrapper}
          modules={[Navigation]}
          navigation={{ nextEl: '#swiper-forward', prevEl: '#swiper-back' }}
          spaceBetween={10}
        >
          {mainCases.map((item, index) => (
            <SwiperSlide area-hidden key={index}>
              <Item
                image={item.image}
                paragraphs={item.paragraphs}
                tags={item.tags}
                title={item.title}
                keyTags={item.keyTags}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};
