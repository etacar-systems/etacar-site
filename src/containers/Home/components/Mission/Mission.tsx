import React from 'react';
import { useNavigate } from 'react-router-dom';

import successIcon from '../../../../assets/icons/success.svg';

import { Section } from '../../../../components/Section';
import { about, description, principles } from './data';
import { Card } from './components/Card';
import { Button } from '../../../../components/Button';
import { ABOUT } from '../../../../routes';
import style from './Mission.module.scss';

export const Mission = () => {
  const navigate = useNavigate();
  return (
    <Section theme={'blueLight'} title={`OUR \n MISSION`}>
      <div className={style.container}>
        <div>
          <div className={style.description}>{description}</div>
          <div className={style.list}>
            {principles.map(principle => (
              <div>
                <img src={successIcon} alt={'icon'} />
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
          <Button fullWidth icon onClick={() => navigate(ABOUT)} title={'About us'} type={'ghost'} />
        </div>
      </div>
    </Section>
  );
};
