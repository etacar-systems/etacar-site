'use client';

import React from 'react';
import styles from './ContactInfo.module.scss';

export const ContactInfo: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>

        <div className={styles.cardsGrid}>
          {/* Email & Phone Card */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width='32' height='32' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M22 6L12 13L2 6'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Contact Information</h3>
            <div className={styles.cardContent}>
              <p className={styles.infoText}>
                <strong>Email:</strong>
                <br />
                info@etacar.io
              </p>
              <p className={styles.infoText}>
                <strong>Phone:</strong>
                <br />
                +1 (831) 333-6202
              </p>
              <a href='mailto:info@etacar.io' target='_blank' rel='noreferrer' className={styles.link}>
                <span>Send us an email</span>
                <img src={'icons/linkArrow.svg'} alt='arrow' className={styles.linkArrow} />
              </a>
            </div>
          </div>

          {/* Address Card */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width='32' height='32' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Office Location</h3>
            <div className={styles.cardContent}>
              <p className={styles.infoText}>
                313 Pasadera Court
                <br />
                Monterey, California 93940
                <br />
                United States
              </p>
              <a
                href='https://maps.app.goo.gl/38kmmrR4fv51q8XE9'
                target='_blank'
                rel='noreferrer'
                className={styles.link}
              >
                <span>View on Google Maps</span>
                <img src={'icons/linkArrow.svg'} alt='arrow' className={styles.linkArrow} />
              </a>
            </div>
          </div>

          {/* Business Hours Card */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width='32' height='32' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M12 6V12L16 14'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Availability</h3>
            <div className={styles.cardContent}>
              <p className={styles.infoText}>
                <strong>Response Time:</strong>
                <br />
                Within 24 hours
              </p>
              <p className={styles.infoText}>
                <strong>Time Zone:</strong>
                <br />
                Pacific Time (PT)
              </p>
              <p className={styles.infoNote}>
                We work with clients globally and accommodate different time zones for meetings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
