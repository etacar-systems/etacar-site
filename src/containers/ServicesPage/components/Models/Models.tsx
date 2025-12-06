'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../../../../components/Button';
import { CONTACT } from '../../../../routes';
import { data } from './data';
import style from './Models.module.scss';

export const Models = () => {
  const router = useRouter();
  return (
    <div className={style.wrapper}>
      <div className={style.sectionTitle}>Models</div>
      <div className={style.rowsContainer}>
        {data.map((dataRow, i) => (
          <div key={i} className={style.sectionRow}>
            {dataRow.id % 2 === 0 ? <img className={style.image} src={dataRow.image} alt='Our Team' /> : undefined}
            <div className={style.textContainer}>
              <div className={style.title}>{dataRow.title}</div>
              <div className={style.description}>{dataRow.description}</div>
              {dataRow.advantages.map((string, i) => (
                <div key={i} className={style.listElement}>
                  <div>
                    <img src={'/icons/servicesPage/success.svg'} alt='success icon' />
                  </div>
                  <div>{string}</div>
                </div>
              ))}
              <div className={style.button}>
                <Button onClick={() => router.push(CONTACT)} title={'Get estimation'} type={'ghost'} icon={true} />
              </div>
            </div>
            {dataRow.id % 2 === 1 ? <img className={style.image} src={dataRow.image} alt='Our Team' /> : undefined}
          </div>
        ))}
      </div>
    </div>
  );
};
