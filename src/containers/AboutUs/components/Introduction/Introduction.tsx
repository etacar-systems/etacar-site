import { aboutUsImages } from '../../../../assets/images/AboutUs';
import style from './Introduction.module.scss';
import { Button } from '../../../../components/Button';

const infoText = [
  'EtaCar Systems is a privately held software development outsourcing company.',
  'EtaCar management has over a decade of practical experience working with clients in both North America and the European Union. We have extensive experience recruiting, training and supervising industry leading IT staff.',
  'Our aim is to exceed our client’s expectations in everything we do. We believe that keeping an open attitude and putting people first is instrumental in creating long term partnerships.',
];

export const Introduction = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.block}>
          <div className={style.columnLeft}>
            <div className={style.aboutUs}>About Us</div>
            <div className={style.aboutUsImage}>
              <img src={aboutUsImages.aboutUs} alt='About Us' />
            </div>
          </div>
          <div className={style.columnRight}>
            <div className={style.ourTeamImage}>
              <img src={aboutUsImages.ourTeam} alt='Our Team' />
            </div>
            {infoText.map(string => (
              <div className={style.info}>{string}</div>
            ))}
            <div className={style.buttonBlock}>
              <Button 
                title='Get In Touch' 
                type='ghost' 
                onClick={() => {}}
                icon={true}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
