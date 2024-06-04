import React, {forwardRef} from 'react';
import {IconProps} from "./index";


const CloseSvg: React.FC<IconProps> = ({mainColor = '#1D14BF'}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect width="20" height="2" rx="1" transform="matrix(0.710315 -0.703884 0.710315 0.703884 4.42063 18.0777)"
              fill={mainColor}/>
        <rect width="20" height="2" rx="1" transform="matrix(0.710315 0.703884 -0.710315 0.703884 5.42063 4.07767)"
              fill={mainColor}/>
    </svg>
);

export const CloseIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const {mainColor, ...restProps} = props;

    return <CloseSvg mainColor={mainColor} {...restProps} ref={ref as any}/>;
});

CloseIcon.displayName = 'CloseIcon';
