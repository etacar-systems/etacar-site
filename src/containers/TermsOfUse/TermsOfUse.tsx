import { lazy, useEffect } from 'react';
import { data } from './data';

import style from './TermsOfUse.module.scss';

const Footer = lazy(() => import('../../components/Footer'));
export const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
      <Footer />
    </>
  );
};
