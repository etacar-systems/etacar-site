import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { Section } from '../../components/Section';
import { Navigation as NavigationArrows } from '../../components/Navigation';
import { Review } from './components';
import { people } from './data';
import styles from './Reviews.module.scss';

interface ReviewsProps {
  arrowColor?: 'light' | 'dark';
  textColor?: 'light' | 'dark';
  theme?: 'blueLight' | 'light' | 'dark' | 'extraLight';
}

export const Reviews = ({ arrowColor, textColor, theme }: ReviewsProps) => {
  return (
    <Section textColor={textColor} theme={theme} title={'REVIEWS'}>
      <div className={styles.swiper}>
        <div className={styles.partners}>
          <div className={styles.label} data-text-color={textColor}>
            What our partners say
          </div>
          <div className={styles.arrows}>
            <NavigationArrows arrowColor={arrowColor} />
          </div>
        </div>
        <Swiper
          direction={'horizontal'}
          wrapperClass={styles.swiper_wrapper}
          modules={[Navigation]}
          navigation={{ nextEl: '#swiper-forward', prevEl: '#swiper-back' }}
          spaceBetween={8}
          slidesPerView={2}
        >
          {people.map((person, index) => (
            <SwiperSlide area-hidden key={index}>
              <Review
                avatar={person.avatar}
                company={person.company}
                description={person.description}
                key={index}
                name={person.name}
                textColor={textColor}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};
