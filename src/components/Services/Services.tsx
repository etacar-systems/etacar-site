import styles from './Services.module.scss';
import Heading from '../../shared/ui/Heading/Heading';
import Service from '../../shared/ui/Services/Service';
import {
  ComputerIcon,
  DesignIcon,
  MigrationIcon,
  MobileIcon,
  PMIcon,
  PointIcon,
  RightArrowIcon,
  SupportIcon,
  TeamIcon
} from '../../shared/ui/icons';
import Button from '../../shared/ui/Button/Button';

const services = [
  {text: 'Software development', icon: <ComputerIcon mainColor="#90A7FF"/>},
  {text: 'Web & Mobile development', icon: <MobileIcon mainColor="#90A7FF"/>},
  {text: 'UX/UI design & Branding', icon: <DesignIcon mainColor="#90A7FF"/>},
  {text: 'Software testing & Code audit', icon: <PointIcon mainColor="#90A7FF"/>},
  {text: 'Migration to Rails & React.js', icon: <MigrationIcon mainColor="#90A7FF"/>},
  {text: 'Team extension', icon: <TeamIcon mainColor="#90A7FF"/>},
  {text: 'Maintenance & support', icon: <SupportIcon mainColor="#90A7FF"/>},
  {text: 'Consultations & Project management', icon: <PMIcon mainColor="#90A7FF"/>}
];

export default function Services() {
  return (
    <section className={styles.wrap}>
      <div className={styles.mainText}><Heading text={'Services'}/></div>
      <div className={styles.content}>
        {services.map((service, index) => (
          <Service key={index} text={service.text} icon={service.icon}/>
        ))}
        <div className={styles.serviceButton}>
          <Button
            text="All services"
            onClick={() => {
            }}
            variant="new"
            icon={<RightArrowIcon/>}
            size={'big'}
          />
        </div>
      </div>
    </section>
  );
}
