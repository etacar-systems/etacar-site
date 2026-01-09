import parse from 'html-react-parser';
import { data } from './data';

import style from './Introduction.module.scss';

export const Introduction = () => {
  return (
    <div className={style.container}>
      <div className={style.container_inner}>
        <div className={style.pageTitle}>Privacy Policy</div>
      </div>
      {data.map((section, i) => (
        <div key={i} className={style.container_inner}>
          <div className={style.title}>{section.title}</div>
          {section.paragraphs.map((text, i) => (
            <div key={i} className={style.paragraph}>
              {parse(text)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
