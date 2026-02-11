import { useRouter } from 'next/navigation';
import { Button } from '../../../../components/Button';
import { CONTACT } from '../../../../routes';
import style from './Introduction.module.scss';

const infoText = [
  <>
    <strong>EtaCar Systems</strong> is an <strong>AI solutions company</strong> focused on
    <strong>building and operating intelligent systems</strong> for enterprises.
  </>,
  <>
    We specialize in <strong>AI orchestration</strong> and enterprise agents — helping organizations
    <strong>automate complex workflows</strong>, strengthen decision-making, and unlock data value.
  </>,
  <>
    Our <strong>leadership team</strong> brings over <strong>two decades of experience</strong> across North America and the European Union.
  </>,
  <>
    We believe in <strong>long-term partnership</strong> and a <strong>people-first approach</strong>, creating solutions that are practical, trusted, and sustainable.
  </>,
];

export const Introduction = () => {
  const router = useRouter();
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.block}>
          <div className={style.columnLeft}>
            <div className={style.aboutUs}>About Us</div>
          </div>
          <div className={style.columnRight}>
            <div className={style.ourTeamImage}>
              <img src='/images/AboutUs/ourTeam.webp' alt='Our Team' />
            </div>
            {infoText.map((string, i) => (
              <div key={i} className={style.info}>
                {string}
              </div>
            ))}

            <div className={style.infoBold}>EtaCar Systems - Orchestrating Intelligence. Navigating Complexity.</div>

            <div className={style.buttonBlock}>
              <Button title='Get In Touch' type='solid' onClick={() => router.push(CONTACT)} icon={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
