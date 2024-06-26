import { data } from './data';
import { servicePageIcons } from '../../../../assets/icons/servicesPage';
import { Button } from '../../../../components/Button';

import style from './Models.module.scss';
import { CONTACT } from '../../../../routes';
import { useNavigate } from 'react-router';

export const Models = () => {
  const navigate = useNavigate();
  return (
    <div className={style.wrapper}>
      <div className={style.sectionTitle}>Models</div>
      <div className={style.rowsContainer}>
        {data.map(dataRow => (
          <div className={style.sectionRow}>
            {dataRow.id % 2 === 0 ? <img className={style.image} src={dataRow.image} alt='Our Team' /> : undefined}
            <div className={style.textContainer}>
              <div className={style.title}>{dataRow.title}</div>
              <div>{dataRow.description}</div>
              {dataRow.advantages.map(string => (
                <div className={style.listElement}>
                  <div>
                    <img src={servicePageIcons.success} alt='success icon' />
                  </div>
                  <div>{string}</div>
                </div>
              ))}
              <div className={style.button}>
                <Button onClick={() => navigate(CONTACT)} title={'Get estimation'} type={'ghost'} icon={true} />
              </div>
            </div>
            {dataRow.id % 2 === 1 ? <img className={style.image} src={dataRow.image} alt='Our Team' /> : undefined}
          </div>
        ))}
      </div>
    </div>
  );
};
