import React, {forwardRef} from 'react';
import {IconProps} from './index';


const CheckedBoxSvg: React.FC<IconProps> = ({mainColor = 'currentColor'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18" fill="none">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M18 18V9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44771 16 9V16H2V2H12C12.5523 2 13 1.55228 13 1C13 0.447715 12.5523 0 12 0H0V18H18Z"
      fill={mainColor}/>
    <path d="M5 7L8.77604 11.7201C8.89277 11.866 9.11304 11.8708 9.23608 11.7302L16 4" stroke={mainColor}
      strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CheckedBoxIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {mainColor, ...restProps} = props;

  return <CheckedBoxSvg mainColor={mainColor} {...restProps} ref={ref}/>;
});

CheckedBoxIcon.displayName = ' CheckedBoxIcon';
