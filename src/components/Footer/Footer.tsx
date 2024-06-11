import React, {ReactNode} from 'react';
import styles from './Footer.module.scss';
import {BottomRightArrowIcon} from '../../shared/ui/icons';

type FooterPropsType = {
    title: string,
    children?: ReactNode,
}

const ContactBlock: React.FC<FooterPropsType> = ({title, children}) => (
  <div className={styles.block}>
    <div className={styles.blockHead}>{title}</div>
    {children}
  </div>
);

const LinkBlock: React.FC<FooterPropsType & { url?: string }> = ({title, url}) => (
  <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer">
    <h4>{title}</h4>
    <BottomRightArrowIcon/>
  </a>
);

export const Footer: React.FC = () => {
  return (
    <footer className={styles.wrap}>
      <div className={styles.contacts}>
        <div className={styles.leftBlock}>
          <ContactBlock title="Contacts">
            <div className={styles.label}>info@etacar.io<br/>+1 (831) 333-6202</div>
            <LinkBlock title="Get in touch"/>
          </ContactBlock>

          <ContactBlock title="Address">
            <div className={styles.label}>313 Pasadera Court,<br/>Monterey, California 93940</div>
            <LinkBlock title="Google map"
              url="https://www.google.com/maps?q=313+Pasadera+Court,+Monterey,+California+93940"/>
          </ContactBlock>
        </div>
        <LinkBlock title="Linkedin"
          url='https://www.linkedin.com/company/etacarsystems/'
        />
      </div>
      <div className={styles.contacts}>
        <div className={styles.text}>© 2024 EtaCar Systems. All rights reserved.</div>
        <div className={styles.text}>Terms of use | Privacy policy</div>
      </div>
    </footer>
  );
};
