import React from 'react';

import { AIStrategy } from '../AIStrategy';
import { AIDecisions } from '../AIDecisions';
import { AIEngineering } from '../AIEngineering';

export const FlagshipServices: React.FC = () => {
  return (
    <>
      <AIStrategy />
      <AIDecisions />
      <AIEngineering />
    </>
  );
};
