import { lazy, Suspense, useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';
import { data } from './data';

import style from './TermsOfUse.module.scss';

const Footer = lazy(() => import('../../components/Footer'));
export const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <FadeInSection>
      <div className={style.container}>
        {data.map(section => (
          <div className={style.container_inner}>
            <div className={style.title}>{section.title}</div>
            {section.paragraphs.map(text => (
              <div className={style.secondaryText}>{text}</div>
            ))}
          </div>
        ))}
      </div>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </FadeInSection>
  );
};
