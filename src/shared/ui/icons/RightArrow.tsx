import React, {forwardRef, Ref} from 'react';
import {IconProps} from './index';

const RightArrowSvg: React.FC<IconProps> = ({mainColor = 'currentColor'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0_293_4550)">
      <path
        d="M20.364 12.707C20.5514 12.5194 20.6567 12.2651 20.6567 12C20.6567 11.7348 20.5514 11.4805 20.364 11.293L14.707 5.63598C14.6147 5.54047 14.5044 5.46428 14.3824 5.41188C14.2604 5.35947 14.1291 5.33188 13.9964 5.33073C13.8636 5.32957 13.7319 5.35487 13.609 5.40516C13.4861 5.45544 13.3744 5.52969 13.2806 5.62358C13.1867 5.71747 13.1124 5.82913 13.0621 5.95202C13.0118 6.07492 12.9865 6.2066 12.9877 6.33938C12.9889 6.47216 13.0164 6.60338 13.0689 6.72538C13.1213 6.84739 13.1974 6.95773 13.293 7.04998L17.243 11H3.99995C3.73474 11 3.48038 11.1053 3.29284 11.2929C3.10531 11.4804 2.99995 11.7348 2.99995 12C2.99995 12.2652 3.10531 12.5195 3.29284 12.7071C3.48038 12.8946 3.73474 13 3.99995 13H17.243L13.293 16.95C13.1108 17.1386 13.01 17.3912 13.0123 17.6534C13.0146 17.9156 13.1197 18.1664 13.3051 18.3518C13.4905 18.5372 13.7414 18.6424 14.0036 18.6447C14.2657 18.6469 14.5183 18.5461 14.707 18.364L20.364 12.707Z"
        fill={mainColor}/>
    </g>
    <defs>
      <clipPath id="clip0_293_4550">
        <rect width="24" height="24" fill='white' transform="matrix(0 1 -1 0 24 0)"/>
      </clipPath>
    </defs>
  </svg>
);

export const RightArrowIcon = forwardRef<SVGSVGElement, IconProps>((props, ref: Ref<SVGSVGElement>) => {
  const {mainColor, ...restProps} = props;

  return <RightArrowSvg mainColor={mainColor} {...restProps} ref={ref}/>;
});

RightArrowIcon.displayName = 'RightArrowIcon';
