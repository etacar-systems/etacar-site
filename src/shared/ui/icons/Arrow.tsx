import React, {forwardRef, ReactElement, Ref} from 'react';
import {IconProps} from './index';

const ArrowSvg = ({mainColor = '#1D14BF'}: IconProps): ReactElement => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0_63_138)">
      <path
        d="M12.707 3.636C12.5195 3.44853 12.2652 3.34322 12 3.34322C11.7348 3.34322 11.4805 3.44853 11.293 3.636L5.636 9.293C5.54049 9.38525 5.46431 9.49559 5.4119 9.6176C5.35949 9.7396 5.3319 9.87082 5.33075 10.0036C5.3296 10.1364 5.3549 10.2681 5.40518 10.391C5.45546 10.5139 5.52971 10.6255 5.6236 10.7194C5.7175 10.8133 5.82915 10.8875 5.95205 10.9378C6.07494 10.9881 6.20662 11.0134 6.3394 11.0123C6.47218 11.0111 6.6034 10.9835 6.7254 10.9311C6.84741 10.8787 6.95775 10.8025 7.05 10.707L11 6.757V20C11 20.2652 11.1054 20.5196 11.2929 20.7071C11.4804 20.8946 11.7348 21 12 21C12.2652 21 12.5196 20.8946 12.7071 20.7071C12.8946 20.5196 13 20.2652 13 20V6.757L16.95 10.707C17.1386 10.8892 17.3912 10.99 17.6534 10.9877C17.9156 10.9854 18.1664 10.8802 18.3518 10.6948C18.5372 10.5094 18.6424 10.2586 18.6447 9.9964C18.647 9.73421 18.5462 9.4816 18.364 9.293L12.707 3.636Z"
        fill={mainColor}/>
    </g>
    <defs>
      <clipPath id="clip0_63_138">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export const ArrowIcon = forwardRef<SVGSVGElement, IconProps>((props, ref: Ref<SVGSVGElement>) => {
  const {mainColor, ...restProps} = props;

  return <ArrowSvg mainColor={mainColor} {...restProps} ref={ref}/>;
});

ArrowIcon.displayName = 'ArrowIcon';
