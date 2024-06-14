import React from 'react';

import { Welcome } from './components/Welcome';
import { Location } from '../../components/Location';
import { caseStudiesGeographyData } from '../../model/caseStudies';
import { Reviews } from '../../commonSections/Reviews';
import { Footer } from '../../components/Footer';

export const CaseStudy = () => {
  return (
    <div>
      <Welcome />
      <Location sectionHeader='Clients Geography' geographyData={caseStudiesGeographyData}/>
      <Reviews textColor='dark' theme='dark'/>
      <Footer/>
    </div>
  );
};
