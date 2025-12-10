import { FadeCard } from '@/components/FadeCard';
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
            <FadeCard className={style.textContainer}>
              <div className={style.title}>{dataRow.title}</div>
              <div className={style.description}>{dataRow.description}</div>
              <div className={style.list}>
                {dataRow.advantages.map((string, i) => (
                  <div key={i} className={style.listElement}>
                    <svg
                      className={style.icon}
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21 12C21 13.8805 20.411 15.7138 19.3157 17.2424C18.2203 18.771 16.6736 19.918 14.8929 20.5225C13.1122 21.127 11.1868 21.1585 9.3873 20.6125C7.58776 20.0666 6.00442 18.9707 4.85967 17.4788C3.71492 15.9868 3.06627 14.1738 3.00481 12.2943C2.94335 10.4147 3.47218 8.56317 4.51702 6.99962C5.56187 5.43607 7.07023 4.23908 8.83027 3.57678C10.5903 2.91447 12.5136 2.82011 14.33 3.30696'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                      />
                      <path
                        d='M8 10L11.776 14.7201C11.8928 14.866 12.113 14.8708 12.2361 14.7302L19 7'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                      />
                    </svg>

                    <div>{string}</div>
                  </div>
                ))}
              </div>
              <div className={style.button}>
                <Button onClick={() => router.push(CONTACT)} title={'Get estimation'} type={'solid'} icon={true} />
              </div>
            </FadeCard>
            <div className={style.imageContainer}>
              <img className={style.image} src={dataRow.image} alt='Our Team' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
