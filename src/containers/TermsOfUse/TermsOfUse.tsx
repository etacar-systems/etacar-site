import { useEffect } from 'react';
import parse from 'html-react-parser';
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
              {section.paragraphs.map((text, j) => (
                <div key={j} className={style.secondaryText}>
                  {parse(text)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </FadeInSection>
      <Footer />
    </>
  );
};
