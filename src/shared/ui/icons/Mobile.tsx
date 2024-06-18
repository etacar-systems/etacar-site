import React, {forwardRef, ReactElement} from 'react';
import {IconProps} from './index';


const MobileSvg= ({mainColor = 'currentColor'}: IconProps): ReactElement =>  (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M15 20.385L13.5862 18.9712C13.2942 18.6792 12.8208 18.6792 12.5287 18.9712C12.2367 19.2633 12.2367 19.7367 12.5287 20.0287L14.7879 22.2879C14.905 22.405 15.095 22.405 15.2121 22.2879L20.4713 17.0287C20.7633 16.7367 20.7633 16.2633 20.4713 15.9712C20.1792 15.6792 19.7058 15.6792 19.4138 15.9712L15 20.385Z"
      fill={mainColor}/>
    <path fillRule="evenodd" clipRule="evenodd"
      d="M7.75 20.75H9.75C10.3023 20.75 10.75 21.1977 10.75 21.75C10.75 22.3023 10.3023 22.75 9.75 22.75H7.5C7.03587 22.75 6.59075 22.5656 6.26256 22.2374C5.93437 21.9092 5.75 21.4641 5.75 21V4.5C5.75 4.03587 5.93437 3.59075 6.26256 3.26256C6.59075 2.93437 7.03587 2.75 7.5 2.75H16.5C16.9641 2.75 17.4092 2.93437 17.7374 3.26256C18.0656 3.59075 18.25 4.03587 18.25 4.5V13.5C18.25 14.0523 17.8023 14.5 17.25 14.5C16.6977 14.5 16.25 14.0523 16.25 13.5V7.75H7.75V20.75ZM16.5 4.5H7.5V6H16.5V4.5Z"
      fill={mainColor}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 4.5H16.5V6H7.5V4.5ZM16.25 4.75H7.75V5.75H16.25V4.75Z"
      fill={mainColor}/>
  </svg>
);

export const MobileIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {mainColor, ...restProps} = props;

  return <MobileSvg mainColor={mainColor} {...restProps} ref={ref}/>;
});

MobileIcon.displayName = 'MobileIcon';
