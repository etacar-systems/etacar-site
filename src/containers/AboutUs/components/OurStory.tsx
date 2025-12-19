import React from 'react';
import { FadeCard } from '../../../components/FadeCard';
import { SectionWrapper } from '../../../components/SectionWrapper';
import styles from './OurStory.module.scss';

const OurStory: React.FC = () => {
  const storyPoints = [
    {
      title: 'Our Roots',
      description:
        'Our roots go back more than two decades, when “AI” mostly meant enterprise information retrieval, text analytics and recommendation engines.',
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
            fill='currentColor'
          />
        </svg>
      ),
    },
    {
      title: 'Early Experience',
      description:
        'We started as certified specialists on platforms like Autonomy, helping large organizations turn unstructured text into actionable insights, alerts and decision support.',
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      title: 'Building Systems',
      description:
        'Over the years we’ve worked with online businesses and enterprises across Europe and the US, building and maintaining systems for information retrieval, analytics, automation and content management.',
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      title: 'Modern AI Expertise',
      description:
        "When large language models became practical for production use, we didn't start from zero. We already knew what it takes to run AI in production: integration, regulations, data handling and explainability.",
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M13 10V3L4 14H11V21L20 10H13Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      title: 'Neuroscience & Human Factors',
      description:
        'We complement our AI engineering expertise with insights from neuroscience and human behavior, ensuring that our solutions are designed for real people and real organizations.',
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M12 22C16.9706 22 21 17.9706 21 13C21 8.02944 16.9706 4 12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12 4C12 2.89543 12.8954 2 14 2C15.1046 2 16 2.89543 16 4C16 5.10457 15.1046 6 14 6C12.8954 6 12 5.10457 12 4Z'
            fill='currentColor'
          />
        </svg>
      ),
    },
    {
      title: 'Your AI Partner',
      description: (
        <>
          Today, we partner with businesses to <strong>bring AI into their most important workflows</strong>, ensuring
          that it delivers
          <strong> real value</strong> while being <strong>safe, reliable and compliant</strong>.
        </>
      ),
      icon: (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M21 11.5C21 16.1944 16.9706 20.5 12 20.5C7.02944 20.5 3 16.1944 3 11.5C3 6.80558 7.02944 2.5 12 2.5C16.9706 2.5 21 6.80558 21 11.5Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path d='M12 22V20' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8 22H16' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      ),
    },
  ];

  return (
    <SectionWrapper className={styles.ourStorySection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Our story</h2>
        <p className={styles.subtext}>
          We started in the <strong>early 2000s</strong> working with <strong>enterprise AI platforms</strong> such as
          Autonomy as certified specialists. Since then, we’ve built and operated AI-driven systems across finance,
          e-commerce, logistics, telecom and SaaS. The same disciplines we applied to high-stakes decision and analytics
          systems - clear owners, measurable KPIs, robust governance - are now built into every AI system we deliver.
          Today we use <strong>that experience</strong> - and our background in{' '}
          <strong>neuroscience and complex systems</strong> - to design AI solutions that work in real organizations,
          not just in demos. More than two decades of AI experience, from enterprise decision systems to modern AI
          solutions.
        </p>
        <div className={styles.grid}>
          {storyPoints.map((point, index) => (
            <FadeCard key={index} className={styles.card}>
              <div className={styles.icon}>{point.icon}</div>
              <h3 className={styles.cardTitle}>{point.title}</h3>
              <p className={styles.cardDescription}>{point.description}</p>
            </FadeCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OurStory;
