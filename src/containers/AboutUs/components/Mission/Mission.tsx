'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../../../../components/Button';
import { Section } from '../../../../components/Section';
import { CONTACT } from '../../../../routes';
import { Card } from './components/Card';
import { about, description, principles } from './data';
import style from './Mission.module.scss';

export const Mission = () => {
  const router = useRouter();
  return (
    <Section theme={'blueLight'} title={`OUR \n MISSION`}>
      <div className={style.container}>
        <div>
          <div className={style.description}>{description}</div>
          <div className={style.list}>
            {principles.map((principle, i) => (
              <div key={i}>
                <img src={'icons/success.svg'} alt={'icon'} />
                {principle}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={style.cards}>
            {about.map((data, index) => (
              <Card description={data.subtitle} key={index} src={data.src} title={data.title} />
            ))}
          </div>
          <Button fullWidth icon onClick={() => router.push(CONTACT)} title={'Contact us'} type={'ghost'} />
        </div>
      </div>
    </Section>
  );
};
