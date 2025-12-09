import { FadeCard } from '@/components/FadeCard';
import React from 'react';
import styles from './ServicesHero.module.scss';

const items = [
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 2L2 7L12 12L22 7L12 2Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2 17L12 22L22 17'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2 12L12 17L22 12'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    label: 'Enterprise AI Strategy, Architecture',
    sectionId: 'enterprise-ai',
  },
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='12' cy='7' r='4' stroke='currentColor' strokeWidth='2' />
        <path
          d='M5 21V19C5 16 7 14 12 14C17 14 19 16 19 19V21'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    ),
    label: 'AI Copilots for Critical Roles',
    sectionId: 'ai-copilots',
  },
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='3' y='6' width='18' height='12' rx='2' stroke='currentColor' strokeWidth='2' />
        <path d='M3 10H21' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        <path d='M7 14H17' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
    label: 'AI-Powered Process Automation',
    sectionId: 'ai-powered',
  },
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M4 6H20V18H4V6Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M4 10H20' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        <path d='M8 14H16' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
    label: 'Document & Knowledge Intelligence',
    sectionId: 'document',
  },
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M3 12H21' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        <path d='M7 8H17V16H7V8Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    ),
    label: 'AI-Augmented Software Delivery',
    sectionId: 'ai-augmented',
  },
  {
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='2' />
        <path d='M8 12H12L14 16' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    ),
    label: 'AI Risk, Evaluation & Governance',
    sectionId: 'ai-risk',
  },
];

export const ServicesHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Services</h1>

        <p className={styles.subtitle}>
          We design, build and operate AI solutions for business-critical operations — from strategy and architecture to
          copilots, automation and governance.
        </p>

        <p className={styles.description}>
          Below are our flagship services. Each is designed to solve a specific class of problems for C-level,
          operations, IT and risk leaders — with clear KPIs and ownership.
        </p>
        <div className={styles.quickFacts}>
          {items.map((item, idx) => (
            <FadeCard key={idx} className={styles.fact}>
              {React.cloneElement(item.icon, { className: styles.icon })}
              <span>{item.label}</span>
              <a href={`#${item.sectionId}`} className={styles.linkButton}>
                Learn more →
              </a>
            </FadeCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
