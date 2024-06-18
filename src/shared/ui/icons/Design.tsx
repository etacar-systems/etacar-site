import React, {forwardRef} from 'react';
import {IconProps} from './index';


const DesignSvg: React.FC<IconProps> = ({mainColor = '#1D14BF'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M16.7019 2.20156C16.9052 2.28578 17.0899 2.40922 17.2454 2.56483L21.4342 6.75453C21.7482 7.06863 21.9246 7.4946 21.9246 7.93875C21.9246 8.38289 21.7482 8.80887 21.4342 9.12297L9.87345 20.6846C9.71847 20.8406 9.53408 20.9642 9.33098 21.0484C9.12787 21.1326 8.90954 21.1756 8.68968 21.175H4.5C4.05576 21.175 3.62972 20.9985 3.31559 20.6844C3.00147 20.3703 2.825 19.9442 2.825 19.5L2.825 15.3097C2.82435 15.0899 2.86737 14.8721 2.95154 14.669C3.03571 14.4659 3.15983 14.281 3.3158 14.1261L14.8761 2.56483C15.0317 2.40922 15.2164 2.28578 15.4196 2.20156C15.6229 2.11734 15.8408 2.07399 16.0608 2.07399C16.2808 2.07399 16.4987 2.11734 16.7019 2.20156ZM4.675 19.325H8.61409L16.6891 11.25L12.75 7.31091L4.675 15.3859V19.325ZM14.0609 6L18 9.93909L20.0022 7.93687L16.0631 3.99778L14.0609 6Z"
      fill={mainColor}/>
  </svg>
);

export const DesignIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {mainColor, ...restProps} = props;

  return <DesignSvg mainColor={mainColor} {...restProps} ref={ref}/>;
});

DesignIcon.displayName = 'DesignIcon';
