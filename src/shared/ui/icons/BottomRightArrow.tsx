import React, {forwardRef} from 'react';
import {IconProps} from './index';


const BottomRightArrowSvg: React.FC<IconProps> = ({mainColor = '#90A7FF'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0_551_1839)">
      <path
        d="M17.3545 18.5317C17.6197 18.5317 17.8739 18.4263 18.0614 18.2388C18.2489 18.0513 18.3543 17.7971 18.3543 17.5319L18.3543 9.53169C18.3566 9.39892 18.3325 9.26703 18.2833 9.1437C18.2341 9.02037 18.1608 8.90808 18.0677 8.81337C17.9746 8.71867 17.8636 8.64345 17.7412 8.5921C17.6187 8.54075 17.4873 8.51431 17.3545 8.51431C17.2217 8.51431 17.0903 8.54075 16.9678 8.5921C16.8453 8.64345 16.7343 8.71867 16.6413 8.81337C16.5482 8.90808 16.4749 9.02037 16.4257 9.1437C16.3765 9.26703 16.3523 9.39892 16.3546 9.53169L16.3546 15.1178L6.99043 5.75362C6.80289 5.56608 6.54853 5.46072 6.28332 5.46072C6.0181 5.46072 5.76375 5.56608 5.57621 5.75362C5.38868 5.94115 5.28332 6.1955 5.28332 6.46072C5.28332 6.72594 5.38868 6.98029 5.57621 7.16783L14.9404 16.532L9.35428 16.532C9.09212 16.5366 8.84223 16.6439 8.65844 16.831C8.47465 17.018 8.37166 17.2697 8.37166 17.5319C8.37166 17.7941 8.47465 18.0458 8.65844 18.2328C8.84223 18.4198 9.09212 18.5272 9.35428 18.5317L17.3545 18.5317Z"
        fill={mainColor}/>
    </g>
    <defs>
      <clipPath id="clip0_551_1839">
        <rect width="24" height="24" fill="white" transform="matrix(0 1 -1 0 24 0)"/>
      </clipPath>
    </defs>
  </svg>
);

export const BottomRightArrowIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {mainColor, ...restProps} = props;

  return <BottomRightArrowSvg mainColor={mainColor} {...restProps} ref={ref}/>;
});

BottomRightArrowIcon.displayName = 'BottomRightArrowIcon';
