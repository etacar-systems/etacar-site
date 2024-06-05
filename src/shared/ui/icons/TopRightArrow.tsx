import React, {forwardRef} from 'react';
import {IconProps} from './index';


const TopRightArrowSvg: React.FC<IconProps> = ({mainColor = '#1D14BF'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0_106_736)">
      <path
        d="M18.5319 6.64464C18.5319 6.37948 18.4265 6.12518 18.239 5.93769C18.0515 5.75019 17.7972 5.64483 17.5321 5.64479L9.53185 5.64479C9.39909 5.64248 9.2672 5.66664 9.14387 5.71585C9.02054 5.76506 8.90824 5.83834 8.81354 5.93142C8.71884 6.02449 8.64361 6.13549 8.59227 6.25795C8.54092 6.3804 8.51448 6.51186 8.51448 6.64464C8.51448 6.77743 8.54092 6.90888 8.59227 7.03133C8.64361 7.15379 8.71883 7.26479 8.81354 7.35787C8.90825 7.45094 9.02054 7.52422 9.14387 7.57343C9.2672 7.62264 9.39909 7.6468 9.53185 7.64449L15.118 7.64449L5.75378 17.0087C5.56625 17.1962 5.46089 17.4506 5.46089 17.7158C5.46089 17.981 5.56625 18.2354 5.75378 18.4229C5.94132 18.6105 6.19567 18.7158 6.46089 18.7158C6.72611 18.7158 6.98046 18.6105 7.168 18.4229L16.5322 9.0587L16.5322 14.6448C16.5368 14.907 16.6441 15.1569 16.8311 15.3407C17.0181 15.5245 17.2699 15.6275 17.5321 15.6275C17.7943 15.6275 18.046 15.5245 18.233 15.3407C18.42 15.1569 18.5274 14.907 18.5319 14.6448L18.5319 6.64464Z"
        fill={mainColor}/>
    </g>
    <defs>
      <clipPath id="clip0_106_736">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export const TopRightArrowIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {mainColor, ...restProps} = props;

  return <TopRightArrowSvg mainColor={mainColor} {...restProps} ref={ref}/>;
});

TopRightArrowIcon.displayName = 'TopRightArrowIcon';
