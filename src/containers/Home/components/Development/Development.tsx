import React from 'react';

import { Section } from '../../../../components/Section';
import appleSet from '../../../../assets/images/appleSet.webp';
import styles from './Development.module.scss';
import { Carousel } from './components';

export const Development = () => {
  return (
    <Section title={'END-TO-END AI PRODUCT DEVELOPMENT'}>
      <div className={styles.container}>
        <img className={styles.img} src={appleSet} alt='development' />
        <div>
          <div className={styles.points}>
            <div className={styles.point}>
              <span>1/</span>Discovery & Opportunity Mapping
            </div>
            <div className={styles.point}>
              <span>2/</span>Solution Definition <p>&</p> Architecture
            </div>
            <div className={styles.point}>
              <span>3/</span>Experience Design <p>&</p> Prototyping
            </div>
            <div className={styles.point}>
              <span>4/</span>Implementation <p>&</p> Testing
            </div>
            <div className={styles.point}>
              <span>5/</span>QA, Launch <p>&</p> Continuous Optimization
            </div>
          </div>
          <div className={styles.description}>
          EtaCar Systems designs and delivers AI-native products for European and US clients.
Our teams combine deep software engineering with modern AI capabilities to build agents, copilots, and decision workflows that plug into your real systems. We follow an agile, outcome-driven process—from early discovery to production rollout and optimization—so every project stays aligned with your business goals, governance requirements, and technical landscape.
          </div>
        </div>
      </div>
      <Carousel />
    </Section>
  );
};
