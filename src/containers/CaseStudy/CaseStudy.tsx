import React from 'react';

import { Welcome } from './components/Welcome';
import { Location } from '../../components/Location';
import { caseStudiesGeographyData } from '../../model/caseStudies';

export const CaseStudy = () => {
  return (
    <div>
      <Welcome />
      <Location sectionHeader='Clients Geography' geographyData={caseStudiesGeographyData}/>
    </div>
  );
};
