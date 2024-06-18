import React, {forwardRef, ReactElement, Ref} from 'react';
import {IconProps} from './index';

const LeftArrowSvg= ({mainColor = 'currentColor'}: IconProps): ReactElement =>  (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g opacity="0.4" clipPath="url(#clip0_290_2218)">
      <path
        d="M3.63654 11.2929C3.44907 11.4804 3.34375 11.7347 3.34375 11.9999C3.34375 12.2651 3.44907 12.5194 3.63654 12.7069L9.29354 18.3639C9.38578 18.4594 9.49613 18.5356 9.61813 18.588C9.74014 18.6404 9.87136 18.668 10.0041 18.6692C10.1369 18.6703 10.2686 18.645 10.3915 18.5947C10.5144 18.5444 10.626 18.4702 10.7199 18.3763C10.8138 18.2824 10.8881 18.1708 10.9384 18.0479C10.9886 17.925 11.0139 17.7933 11.0128 17.6605C11.0116 17.5277 10.984 17.3965 10.9316 17.2745C10.8792 17.1525 10.803 17.0421 10.7075 16.9499L6.75754 12.9999H20.0005C20.2658 12.9999 20.5201 12.8945 20.7076 12.707C20.8952 12.5195 21.0005 12.2651 21.0005 11.9999C21.0005 11.7347 20.8952 11.4803 20.7076 11.2928C20.5201 11.1053 20.2658 10.9999 20.0005 10.9999H6.75754L10.7075 7.0499C10.8897 6.8613 10.9905 6.6087 10.9882 6.3465C10.9859 6.0843 10.8808 5.83349 10.6954 5.64808C10.5099 5.46268 10.2591 5.3575 9.99694 5.35523C9.73474 5.35295 9.48214 5.45374 9.29354 5.6359L3.63654 11.2929Z"
        fill={mainColor}/>
    </g>
    <defs>
      <clipPath id="clip0_290_2218">
        <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
      </clipPath>
    </defs>
  </svg>
);

export const LeftArrowIcon = forwardRef<SVGSVGElement, IconProps>((props, ref: Ref<SVGSVGElement>) => {
  const {mainColor, ...restProps} = props;

  return <LeftArrowSvg mainColor={mainColor} {...restProps} ref={ref}/>;
});

LeftArrowIcon.displayName = 'LeftArrowIcon';
