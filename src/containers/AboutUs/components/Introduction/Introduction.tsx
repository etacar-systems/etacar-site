import { useNavigate } from 'react-router';
import { aboutUsImages } from '../../../../assets/images/AboutUs';
import { Button } from '../../../../components/Button';
import { CONTACT } from '../../../../routes';
import style from './Introduction.module.scss';

const infoText = [
  'EtaCar Systems is an AI solutions company focused on designing, building, and operating intelligent systems for modern enterprises.',
  'We specialize in AI orchestration, autonomous enterprise agents, and knowledge intelligence — helping organizations automate complex workflows, enhance decision-making, and unlock the value of their data.',
  'Our leadership team brings over a decade of experience working with clients across North America and the European Union.',
  'We believe in partnership over transactions. By keeping an open attitude and putting people first — clients, teams, and end-users — we create solutions that are not only technologically advanced, but also practical, trusted, and sustainable.',
];

export const Introduction = () => {
  const navigate = useNavigate();
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

            <div className={style.infoBold}>EtaCar Systems — Orchestrating Intelligence. Navigating Complexity.</div>

            <div className={style.buttonBlock}>
              <Button title='Get In Touch' type='ghost' onClick={() => navigate(CONTACT)} icon={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
