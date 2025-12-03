import React from 'react';
import styles from './LeadershipTeam.module.scss';
import { SectionWrapper } from '../../../components/SectionWrapper/SectionWrapper';
import FinalCTA from '../../../components/FinalCTA/FinalCTA';

const LeadershipTeam: React.FC = () => {
  // const teamMembers = [
  //   {
  //     role: 'CEO & Co‑Founder',
  //     name: 'Pavel Rusetsky',
  //     description: 'Leads our work at the intersection of AI, product and execution.',
  //     details: 'Pavel Rusetsky has been building AI‑powered products and platforms since the early 2000s, starting with enterprise systems based on Autonomy technologies. Today he focuses on turning AI from scattered experiments into reliable, measurable capabilities for our clients.'
  //   },
  //   {
  //     role: 'CTO / Head of AI Engineering',
  //     name: 'Egor Borodavkin',
  //     description: 'Responsible for technical direction, architecture and delivery quality.',
  //     details: 'With a background in large‑scale distributed systems and applied machine learning, [Full Name] leads the design of AI solutions that fit existing architectures and meet strict performance, security and compliance requirements.'
  //   },
  //   {
  //     role: 'Head of Neuroscience & Human Factors',
  //     name: 'Serafim Sen',
  //     description: 'Brings neuroscience and human behavior insights into our AI solutions.',
  //     details: 'Serafim Sen is a professional neuroscientist with [academic/industry] experience in studying how complex systems learn and adapt. At EtaCar, [he/she/they] focuses on how AI interacts with people: decision‑making, cognitive load, trust and adoption across teams.'
  //   }
  // ];

  return (
    <SectionWrapper className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Meat our team</h2>
        {/* <p className={styles.intro}>
          Our core team combines backgrounds in AI engineering, product development, neuroscience and operations. Below is a high‑level view of the roles we typically bring into projects. You can meet specific people and profiles during an initial strategy session.
        </p>
        <div className={styles.grid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
              </div>
              <p className={styles.description}>{member.description}</p>
              <p className={styles.details}>{member.details}</p>
            </div>
          ))}
        </div> */}
        <FinalCTA />
      </div>
    </SectionWrapper>
  );
};

export default LeadershipTeam;
