import React, {forwardRef, ReactElement} from 'react';
import {IconProps} from './index';


const UnCheckedBoxSvg= ({mainColor = 'currentColor'}: IconProps): ReactElement =>  (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18" fill="none">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M18 18V9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44771 16 9V16H2V2H12C12.5523 2 13 1.55228 13 1C13 0.447715 12.5523 0 12 0H0V18H18Z"
      fill={mainColor}/>
  </svg>
);

export const UnCheckedBoxIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {mainColor, ...restProps} = props;

  return <UnCheckedBoxSvg mainColor={mainColor} {...restProps} ref={ref}/>;
});

UnCheckedBoxIcon.displayName = ' UnCheckedBoxIcon';
