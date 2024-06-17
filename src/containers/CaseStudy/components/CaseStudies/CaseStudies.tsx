import React from 'react';

import { caseStudies } from '../../../../model/caseStudies';
import { Item } from './components/Item';
import style from './CaseStudies.module.scss';


export const CaseStudies = () => {
  return (
    <div className={style.case_studies_container}>
      {caseStudies.map((item, index) => 
        index % 2 === 0
        ? <Item index={index} orderReverse="false" image={item.image} paragraphs={item.paragraphs} tags={item.tags} title={item.title} />
        : <Item index={index} orderReverse="true" image={item.image} paragraphs={item.paragraphs} tags={item.tags} title={item.title} />
          )}
    </div>
  );
};
