import React, {forwardRef, ReactElement} from 'react';
import {IconProps} from './index';


const MobileBoldSvg= ({mainColor = 'currentColor'}: IconProps): ReactElement =>  (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M15 20.1729L13.6923 18.8652C13.3417 18.5146 12.7733 18.5146 12.4227 18.8652C12.0721 19.2158 12.0721 19.7842 12.4227 20.1348L14.6818 22.3939C14.8575 22.5697 15.1425 22.5697 15.3182 22.3939L20.5773 17.1348C20.9279 16.7842 20.9279 16.2158 20.5773 15.8652C20.2267 15.5146 19.6583 15.5146 19.3077 15.8652L15 20.1729Z"
      fill={mainColor} stroke={mainColor} strokeWidth="0.3"/>
    <path
      d="M9.75 20.6H7.9V7.9H16.1V13.5C16.1 14.1351 16.6149 14.65 17.25 14.65C17.8851 14.65 18.4 14.1351 18.4 13.5V4.5C18.4 3.99609 18.1998 3.51282 17.8435 3.1565C17.4872 2.80018 17.0039 2.6 16.5 2.6H7.5C6.99609 2.6 6.51282 2.80018 6.1565 3.1565C5.80018 3.51282 5.6 3.99609 5.6 4.5V21C5.6 21.5039 5.80018 21.9872 6.1565 22.3435C6.51282 22.6998 6.99609 22.9 7.5 22.9H9.75C10.3851 22.9 10.9 22.3851 10.9 21.75C10.9 21.1149 10.3851 20.6 9.75 20.6ZM7.9 5.6V4.9H16.1V5.6H7.9Z"
      fill={mainColor} stroke={mainColor} strokeWidth="0.3"/>
  </svg>
);

export const MobileBoldIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {mainColor, ...restProps} = props;

  return <MobileBoldSvg mainColor={mainColor} {...restProps} ref={ref}/>;
});

MobileBoldIcon.displayName = 'MobileBoldIcon';
