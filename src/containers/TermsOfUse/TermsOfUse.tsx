import { Footer } from '../../components/Footer';
import { data } from './data';

import style from './TermsOfUse.module.scss';

export const TermsOfUse = () => {
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
