import { Section } from '../../../../components/Section';
import { WhatWeDoCard } from './components/WhatWeDoCard';
import { whatWeDo } from './data';
import styles from './WhatWeDo.module.scss';

export const WhatWeDo = () => {
  const data = whatWeDo.section;

  return (
    <Section theme='extraLight' title={data.sectionTitle}>
      <div className={styles.container}>
        {data.services.map((service, index) => (
          <WhatWeDoCard key={index} title={service.title} description={service.description} cta={service.cta} />
        ))}
      </div>
    </Section>
  );
};
