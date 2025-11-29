import { Section } from '../../../../components/Section';
import { ServiceCard } from './components/ServiceCard';
import { services } from './data';
import styles from './Services.module.scss';

export const Services = () => {
  const data = services.homepageFinalServicesBlock;

  return (
    <Section theme='extraLight' title={data.sectionTitle} subtitle={data.sectionSubtitle}>
      <div className={styles.container}>
        {data.services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            features={service.features}
            cta={service.cta}
          />
        ))}
      </div>
    </Section>
  );
};
