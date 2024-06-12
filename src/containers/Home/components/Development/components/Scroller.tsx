import React from 'react';

import Ruby from '../../../../../assets/techs/Ruby.svg';
import JS from '../../../../../assets/techs/JS.svg';
import TS from '../../../../../assets/techs/TS.svg';
import DevOps from '../../../../../assets/techs/DevOps.svg';
import Django from '../../../../../assets/techs/django.svg';
import Bootstrap from '../../../../../assets/techs/bootstrap.svg';
import Postgresql from '../../../../../assets/techs/postgresql.svg';
import Git from '../../../../../assets/techs/git.svg';
import html5 from '../../../../../assets/techs/html5.svg';
import figma from '../../../../../assets/techs/figma.svg';
import java from '../../../../../assets/techs/java.svg';

import styles from './Scroller.module.scss';

const techs = [
  { src: Ruby, alt: 'Ruby' },
  { src: JS, alt: 'JS' },
  { src: TS, alt: 'TS' },
  { src: DevOps, alt: 'DevOps' },
  { src: Django, alt: 'Django' },
  { src: Postgresql, alt: 'Postgresql' },
  { src: Bootstrap, alt: 'Bootstrap' },
  { src: Git, alt: 'Git' },
  { src: html5, alt: 'html5' },
  { src: figma, alt: 'figma' },
  { src: java, alt: 'java' },
];

export const Scroller = () => {
  const items = [...techs, ...techs];

  return (
    <div className={styles.scroller}>
      {items.map((tech, index) => (
        <div key={index} className={styles.block}>
          <img className={styles.techImg} src={tech.src} alt={tech.alt} />
        </div>
      ))}
    </div>
  );
};
