import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  cta: {
    label: string;
    url: string;
  };
}

export const ServiceCard = ({ title, description, features, cta }: ServiceCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>

        <ul className={styles.features}>
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>

        {/* <Link className={styles.cta} to={CONTACT}>
          {cta.label} →
        </Link> */}
      </div>
    </div>
  );
};
