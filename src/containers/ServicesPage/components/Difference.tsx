import { Table } from 'antd';

import { SectionWrapper } from '@/components/SectionWrapper';
import styles from '../ServicesPage.module.scss';

export const Difference = () => {
  return (
    <SectionWrapper id={'difference'}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{'Why this is different'}</h2>
        </div>

        <Table
          columns={[
            { dataIndex: 'generic', title: 'Generic AI Integration' },
            { dataIndex: 'systems', title: 'EtaCar Systems' },
          ]}
          dataSource={[
            {
              generic: 'Model-first approach',
              systems: 'Decision-first architecture',
            },
            {
              generic: 'Governance added later',
              systems: 'Governance embedded at design stage',
            },
            {
              generic: 'Black-box reasoning',
              systems: 'Structured and traceable logic',
            },
            {
              generic: 'Pilot focus',
              systems: 'Production focus',
            },
          ]}
          pagination={false}
          rowHoverable={false}
        />
      </div>
    </SectionWrapper>
  );
};
