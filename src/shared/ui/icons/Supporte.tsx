import React, {forwardRef} from 'react';
import {IconProps} from './index';


const SupportSvg: React.FC<IconProps> = ({mainColor = '#1D14BF'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C6.486 2 2 6.486 2 12V16.143C2 17.167 2.897 18 4 18H5C5.26522 18 5.51957 17.8946 5.70711 17.7071C5.89464 17.5196 6 17.2652 6 17V11.857C6 11.5918 5.89464 11.3374 5.70711 11.1499C5.51957 10.9624 5.26522 10.857 5 10.857H4.092C4.648 6.987 7.978 4 12 4C16.022 4 19.352 6.987 19.908 10.857H19C18.7348 10.857 18.4804 10.9624 18.2929 11.1499C18.1054 11.3374 18 11.5918 18 11.857V18C18 19.103 17.103 20 16 20H14V19H10V22H16C18.206 22 20 20.206 20 18C21.103 18 22 17.167 22 16.143V12C22 6.486 17.514 2 12 2Z"
      fill={mainColor}/>
  </svg>
);

export const SupportIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {mainColor, ...restProps} = props;

  return <SupportSvg mainColor={mainColor} {...restProps} ref={ref}/>;
});

SupportIcon.displayName = 'SupportIcon';
