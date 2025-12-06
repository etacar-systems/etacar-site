'use client';

import { data } from './data';

import style from './Introduction.module.scss';

export const Introduction = () => {
  return (
    <div className={style.container}>
      <div className={style.container_inner}>
        <div className={style.pageTitle}>Privacy Policy</div>
        <div className={style.secondaryText}>
          EtaCar Systems is committed to safeguarding the confidentiality and privacy of information entrusted to it,
          including any personal information (sometimes referred to as “personally identifiable information” or “PII”)
          collected through its websites. Your continued use of this website constitutes your agreement with this
          Privacy Policy and any subsequent updates.
        </div>
      </div>
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
