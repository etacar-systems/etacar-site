import { fullServices } from '../../../Home/components/Services/data';
import style from './Services.module.scss';

export const Services = () => {
  const { sections } = fullServices.fullServicesPage;

  return (
    <section className={style.services}>
      <div className={style.container}>
        {sections.map(section => (
          <div className={style.service} key={section.id}>
            <div className={style.title}>{section.title}</div>

            {section.description && <div className={style.description}>{section.description}</div>}

            {section.items && section.items.length > 0 && (
              <>
                <div className={style.subtitle}>Key points</div>
                <ul className={style.list}>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {/* {section.cta && (
              <a className={style.cta} href={section.cta.url}>
                {section.cta.label} →
              </a>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
};
