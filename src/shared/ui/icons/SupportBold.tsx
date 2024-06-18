import React, {forwardRef} from 'react';
import {IconProps} from './index';


const SupportBoldSvg: React.FC<IconProps> = ({mainColor = '#1D14BF'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 10.607H4.38596C5.04336 6.9974 8.20416 4.25 12 4.25C15.7958 4.25 18.9566 6.9974 19.614 10.607H19C18.6685 10.607 18.3505 10.7387 18.1161 10.9731C17.8817 11.2075 17.75 11.5255 17.75 11.857V18C17.75 18.9649 16.9649 19.75 16 19.75H14.25V19V18.75H14H10H9.75V19V22V22.25H10H16C18.2643 22.25 20.1198 20.4715 20.2434 18.2377C21.3565 18.1243 22.25 17.243 22.25 16.143V12C22.25 6.34793 17.6521 1.75 12 1.75C6.34793 1.75 1.75 6.34793 1.75 12V16.143C1.75 17.3222 2.77671 18.25 4 18.25H5C5.33152 18.25 5.64946 18.1183 5.88388 17.8839C6.1183 17.6495 6.25 17.3315 6.25 17V11.857C6.25 11.5255 6.1183 11.2075 5.88388 10.9731C5.64946 10.7387 5.33152 10.607 5 10.607Z"
      fill="#1D14BF" stroke={mainColor} strokeWidth="0.5"/>
  </svg>
);

export const SupportBoldIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {mainColor, ...restProps} = props;

  return <SupportBoldSvg mainColor={mainColor} {...restProps} ref={ref}/>;
});

SupportBoldIcon.displayName = 'SupportBoldIcon';