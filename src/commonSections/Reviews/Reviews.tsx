import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SectionWrapper } from '@/components/SectionWrapper';
import { Navigation as NavigationArrows } from '../../components/Navigation';
import { useViewportSize } from '../../hooks/useViewportSize';
import { Review } from './components';
import { people } from './data';
import styles from './Reviews.module.scss';

export const Reviews = () => {
  const { width } = useViewportSize();
  const slidesCount = width < 1200 ? 1 : 2;
  return (
    <SectionWrapper className={styles.reviews} variant='gradient'>
      <div className={styles.container}>
        <h2 className={styles.title}>What our clients trust us with</h2>
        <div className={styles.swiper}>
          <div className={styles.label}>Perspectives from clients on <strong>outcomes</strong>, <em>trust</em>, and delivering business-critical AI.</div>
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
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.arrows}>
          <NavigationArrows />
        </div>
      </div>
    </SectionWrapper>
  );
};
