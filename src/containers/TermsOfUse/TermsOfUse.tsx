import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import { data } from './data';

import style from './TermsOfUse.module.scss';

import Footer from '../../components/Footer';

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
