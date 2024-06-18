import React, {forwardRef, Ref} from 'react';
import {IconProps} from './index';


const ClipSvg: React.FC<IconProps> = ({mainColor = 'currentColor'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M10 6C9.20435 6 8.44129 6.31607 7.87868 6.87868C7.31607 7.44129 7 8.20435 7 9V13C7 14.3261 7.52678 15.5979 8.46447 16.5355C9.40215 17.4732 10.6739 18 12 18C13.3261 18 14.5979 17.4732 15.5355 16.5355C16.4732 15.5979 17 14.3261 17 13V9C17 8.73478 17.1054 8.48043 17.2929 8.29289C17.4804 8.10536 17.7348 8 18 8C18.2652 8 18.5196 8.10536 18.7071 8.29289C18.8946 8.48043 19 8.73478 19 9V13C19 13.9193 18.8189 14.8295 18.4672 15.6788C18.1154 16.5281 17.5998 17.2997 16.9497 17.9497C16.2997 18.5998 15.5281 19.1154 14.6788 19.4672C13.8295 19.8189 12.9193 20 12 20C11.0807 20 10.1705 19.8189 9.32122 19.4672C8.47194 19.1154 7.70026 18.5998 7.05025 17.9497C6.40024 17.2997 5.88463 16.5281 5.53284 15.6788C5.18106 14.8295 5 13.9193 5 13V9C5 7.67392 5.52678 6.40215 6.46447 5.46447C7.40215 4.52678 8.67392 4 10 4C11.3261 4 12.5979 4.52678 13.5355 5.46447C14.4732 6.40215 15 7.67392 15 9V13C15 13.7956 14.6839 14.5587 14.1213 15.1213C13.5587 15.6839 12.7956 16 12 16C11.2044 16 10.4413 15.6839 9.87868 15.1213C9.31607 14.5587 9 13.7956 9 13V9C9 8.73478 9.10536 8.48043 9.29289 8.29289C9.48043 8.10536 9.73478 8 10 8C10.2652 8 10.5196 8.10536 10.7071 8.29289C10.8946 8.48043 11 8.73478 11 9V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8946 11.7348 14 12 14C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V9C13 8.20435 12.6839 7.44129 12.1213 6.87868C11.5587 6.31607 10.7956 6 10 6Z"
      fill={mainColor}/>
  </svg>
);

export const ClipIcon = forwardRef<SVGSVGElement, IconProps>((props, ref: Ref<SVGSVGElement>) => {
  const {mainColor, ...restProps} = props;

  return <ClipSvg mainColor={mainColor} {...restProps} ref={ref}/>;
});

ClipIcon.displayName = 'ClipIcon';