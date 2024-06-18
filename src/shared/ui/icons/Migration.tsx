import React, {forwardRef, ReactElement} from 'react';
import {IconProps} from './index';


const MigrationSvg= ({mainColor = 'currentColor'}: IconProps): ReactElement =>  (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M22 12C22 18 17.61 22 12.194 22C7.792 22 4.24 19.665 3 16M2 12C2 6 6.39 2 11.807 2C16.208 2 19.758 4.335 21 8"
      stroke={mainColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 17L3 16L2 20M17 7L21 8L22 4" stroke={mainColor} strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round"/>
  </svg>
);

export const MigrationIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {mainColor, ...restProps} = props;

  return <MigrationSvg mainColor={mainColor} {...restProps} ref={ref}/>;
});

MigrationIcon.displayName = 'MigrationIcon';
