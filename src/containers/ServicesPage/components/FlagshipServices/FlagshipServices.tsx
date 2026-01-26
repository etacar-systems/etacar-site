import React from 'react';

import { SectionWrapper } from '../../../../components/SectionWrapper';
import { AIStrategy } from '../AIStrategy';
import { AIDecisions } from '../AIDecisions';
import { AIEngineering } from '../AIEngineering';

export const FlagshipServices: React.FC = () => {
  return (
    <SectionWrapper>
      <AIStrategy />
      <AIDecisions />
      <AIEngineering />
    </SectionWrapper>
  );
};
