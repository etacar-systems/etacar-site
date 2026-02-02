import { useRouter } from 'next/navigation';
import { Button } from '../../../../components/Button';
import { CONTACT } from '../../../../routes';
import { Card } from './components/Card';
import { about, description, principles } from './data';
import style from './Mission.module.scss';
import { SectionWrapper } from '@/components/SectionWrapper';

export const Mission = () => {
  const router = useRouter();
  return (
    <SectionWrapper >
      <h2 className={style.title}>Our mission</h2>
      <div className={style.container}>
        <div>
          <div className={style.description}>{description}</div>
          <ul className={style.list}>
            {principles.map((principle, index) => (
              <li key={index} className={style.listItem}>
                <span className={style.bullet}>●</span>
                <span className={style.principle}>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={style.cards}>
            {about.map((data, index) => (
              <Card description={data.subtitle} key={index} src={data.src} title={data.title} />
            ))}
          </div>
          <Button
            fullWidth
            icon
            onClick={() => router.push(CONTACT)}
            title={'Book an AI use case workshop'}
            type={'solid'}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};
