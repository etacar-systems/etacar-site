import { data } from './data';

import style from './InformationSecurity.module.scss';

export const InformationSecurity = () => {
  return (
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
  );
};
