import { useRouter } from 'next/navigation';
import { Button } from '../../../../components/Button';
import { CONTACT } from '../../../../routes';
import style from './Introduction.module.scss';

const infoText = [
  <>
    <strong>EtaCar Systems</strong> is an <strong>AI solutions company</strong> focused on{' '}
    <strong>designing, building, and operating intelligent systems</strong> for modern enterprises.
  </>,
  'We specialize in AI orchestration, autonomous enterprise agents, and knowledge intelligence - helping organizations automate complex workflows, enhance decision-making, and unlock the value of their data.',
  'Our leadership team brings over a decade of experience working with clients across North America and the European Union.',
  'We believe in partnership over transactions. By keeping an open attitude and putting people first - clients, teams, and end-users - we create solutions that are not only technologically advanced, but also practical, trusted, and sustainable.',
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
