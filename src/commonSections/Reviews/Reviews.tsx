'use client';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation as NavigationArrows } from '../../components/Navigation';
import { Section } from '../../components/Section';
import { useViewportSize } from '../../hooks/useViewportSize';
import { Review } from './components';
import { people } from './data';
import styles from './Reviews.module.scss';

interface ReviewsProps {
  arrowColor?: 'light' | 'dark';
  textColor?: 'light' | 'dark';
  theme?: 'blueLight' | 'light' | 'dark' | 'extraLight';
}

export const Reviews = ({ arrowColor, textColor, theme }: ReviewsProps) => {
  const { width } = useViewportSize();
  const slidesCount = width < 1200 ? 1 : 2;
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
          slidesPerView={slidesCount}
        >
          {people.map((person, index) => (
            <SwiperSlide aria-hidden key={index}>
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
