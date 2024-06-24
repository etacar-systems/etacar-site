import style from './Footer.module.scss';
import linkArrow from '../../assets/icons/linkArrow.svg';
import { Link } from 'react-router-dom';
import { TERMS_OF_USE } from '../../routes';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.contacts}>
          <div className={style.contacts__title}>Contacts</div>
          <div className={style.contacts__info}>
            <div className={style.addressAndContacts__textContext}>info@etacar.io</div>
            <div className={style.addressAndContacts__textContext}>+1 (831) 333-6202</div>
          </div>
        </div>
        <div className={style.address}>
          <div className={style.address__title}>Address</div>
          <div className={style.addressAndContacts__textContext}>313 Pasadera Court, Monterey, California 93940</div>
        </div>
      </div>
      <div className={style.link__container}>
        <div className={style.info__links}>
          <div className={style.linkGetInTouch}>
            <div className={style.getInTouch}>
              <a target='_blank' href='mailto:info@etacar.io'>
                Get in touch
              </a>
            </div>
            <div className={style.linkIcon}>
              <img className={style.linkArrow} src={linkArrow} alt='link arrow' />
            </div>
          </div>
          <div className={style.linkGoogleMap}>
            <div className={style.googleMap}>
              <a target='_blank' href='https://maps.app.goo.gl/38kmmrR4fv51q8XE9'>
                Google map
              </a>
            </div>
            <div className={style.linkIcon}>
              <img className={style.linkArrow} src={linkArrow} alt='link arrow' />
            </div>
          </div>
        </div>
        <div className={style.linkedIn__link}>
          <div className={style.linkLinkedIn}>
            <div className={style.linkedIn}>
              <a target='_blank' href='https://www.linkedin.com/company/etacarsystems/'>
                LinkedIn
              </a>
            </div>
            <img className={style.linkArrow} src={linkArrow} alt='link arrow' />
          </div>
        </div>
      </div>
      <div className={style.footerEnd}>
        <div className={style.container__copyright}>
          <div className={style.footerEnd__textContent}>© 2024 EtaCar Systems. All rights reserved.</div>
        </div>
        <div className={style.container__termsAndPrivacy}>
          <Link to={TERMS_OF_USE} className={style.footerEnd__textContent}>
            Terms of use
          </Link>
          <div className={style.footerEnd__textContent}>|</div>
          <div className={style.footerEnd__textContent}>Privacy policy</div>
        </div>
      </div>
    </footer>
  );
};
