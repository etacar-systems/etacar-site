'use client';

import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import { data } from './data';

import dynamic from 'next/dynamic';
import style from './TermsOfUse.module.scss';

const Footer = dynamic(() => import('../../components/Footer'), { ssr: false });

export const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeInSection>
        <div className={style.container}>
          {data.map((section, i) => (
            <div key={i} className={style.container_inner}>
              <div className={style.title}>{section.title}</div>
              {section.paragraphs.map((text, i) => (
                <div key={i} className={style.secondaryText}>
                  {text}
                </div>
              ))}
            </div>
          ))}
        </div>
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
};
