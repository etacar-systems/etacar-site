import { useRouter } from 'next/navigation';
import { Button } from '../../../../components/Button';
import { CONTACT } from '../../../../routes';
import style from './Introduction.module.scss';

const infoText = [
  <>
    <strong>EtaCar Systems</strong> is an <strong>AI solutions company</strong> focused on{' '}
    <strong>designing, building, and operating intelligent systems</strong> for modern enterprises.
  </>,
  <>
    We specialize in <strong>AI orchestration</strong>, autonomous enterprise agents, and knowledge intelligence —
    helping organizations <strong>automate complex workflows</strong>, enhance decision-making, and unlock the value of
    their data.
  </>,
  <>
    Our <strong>leadership team</strong> brings over <strong>two decades of experience</strong> working with clients
    across North America and the European Union.
  </>,
  <>
    We believe in <strong>partnership over transactions</strong>. By keeping an open attitude and putting{' '}
    <strong>people first</strong> — clients, teams, and end-users — we create solutions that are not only
    technologically advanced, but also <strong>practical, trusted, and sustainable</strong>.
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
            {/* <div className={style.aboutUsImage}>
              <img src='/images/AboutUs/aboutUs.webp' alt='About Us' />
            </div> */}
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
