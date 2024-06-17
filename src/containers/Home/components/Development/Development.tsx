import React from 'react';

import { Section } from '../../../../components/Section';
import appleSet from '../../../../assets/images/appleSet.png';
import styles from './Development.module.scss';
import { Carousel } from './components';

export const Development = () => {
  return (
    <Section title={'COMPREHENSIVE SOFTWARE DEVELOPMENT'}>
      <div className={styles.container}>
        <img className={styles.img} src={appleSet} alt='development' />
        <div>
          <div className={styles.description}>
            Eta Car Systems provides professional software development solutions for European/US clients. Our
            experienced engineers ensure personalized services, prioritizing your needs. We follow Agile processes and
            offer cost-effective Ruby on Rails, JavaScript/TypeScript, UI/UX, and DevOps solutions.
          </div>
          <div className={styles.points}>
            <div className={styles.point}>
              <span>1/</span>Discovery
            </div>
            <div className={styles.point}>
              <span>2/</span>Definition
            </div>
            <div className={styles.point}>
              <span>3/</span>Design <p>&</p> Prototyping
            </div>
            <div className={styles.point}>
              <span>4/</span>Development <p>&</p> Testing
            </div>
            <div className={styles.point}>
              <span>5/</span>QA <p>&</p> Delivery
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </Section>
  );
};
