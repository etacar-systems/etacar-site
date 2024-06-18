import React, {forwardRef} from 'react';
import {IconProps} from './index';


const PointBoldSvg: React.FC<IconProps> = ({mainColor = '#1D14BF'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 12C21 13.8805 20.411 15.7138 19.3157 17.2424C18.2203 18.771 16.6736 19.9181 14.8929 20.5226C13.1122 21.127 11.1868 21.1585 9.3873 20.6126C7.58776 20.0667 6.00442 18.9708 4.85967 17.4788C3.71492 15.9869 3.06627 14.1738 3.00481 12.2943C2.94335 10.4148 3.47218 8.56321 4.51702 6.99967C5.56187 5.43612 7.07023 4.23913 8.83027 3.57682C10.5903 2.91451 12.5136 2.82016 14.33 3.30701"
      stroke={mainColor} strokeWidth="3" strokeLinecap="round"/>
    <path d="M8 10L11.776 14.7201C11.8928 14.866 12.113 14.8708 12.2361 14.7302L19 7" stroke={mainColor}
      strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const PointBoldIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {mainColor, ...restProps} = props;

  return <PointBoldSvg mainColor={mainColor} {...restProps} ref={ref}/>;
});

PointBoldIcon.displayName = 'PointBoldIcon';
