import React, {forwardRef} from 'react';
import {IconProps} from "./index";


const ComputerSvg: React.FC<IconProps> = ({mainColor = '#1D14BF'}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
            d="M10.5 3H4.5C3.67158 3 3 3.67158 3 4.5V15.5C3 16.3285 3.67158 17 4.5 17H19.5C20.3285 17 21 16.3285 21 15.5V10.5"
            stroke={mainColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17V21" stroke={mainColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3L14 5L16 7" stroke={mainColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 3L21 5L19 7" stroke={mainColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 21H17" stroke={mainColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ComputerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const {mainColor, ...restProps} = props;

    return <ComputerSvg mainColor={mainColor} {...restProps} ref={ref as any}/>;
});

ComputerIcon.displayName = 'ComputerIcon';
