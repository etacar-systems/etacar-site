import { fullServices } from '../../../Home/components/WhatWeDo/data';
import style from './Services.module.scss';

export const Services = () => {
  const { sections } = fullServices.fullServicesPage;

  return (
    <section className={style.services}>
      <div className={style.container}>
        {sections.map(section => (
          <div className={style.service} key={section.id}>
            <h2>{section.title}</h2>
            <p className={style.oneLiner}>{section.oneLiner}</p>
            {section.bestFor && <p><strong>Best for:</strong> {section.bestFor}</p>}
            {section.problem && <p><strong>Problem we solve:</strong> {section.problem}</p>}
            {section.whatWeDeliver && (
              <>
                <h3>What we deliver:</h3>
                <ul>
                  {section.whatWeDeliver.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            {section.howWeMeasure && (
              <>
                <h3>How we measure success:</h3>
                <ul>
                  {section.howWeMeasure.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            {section.exampleKPIs && (
              <>
                <h3>Example KPIs:</h3>
                <ul>
                  {section.exampleKPIs.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            {section.typicalProcesses && (
              <>
                <h3>Typical processes:</h3>
                <ul>
                  {section.typicalProcesses.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
