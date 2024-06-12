import React, { ReactNode } from 'react';

import style from './Section.module.scss';

interface SectionProps {
  children: ReactNode;
  theme?: 'blueLight' | 'light' | 'dark' | 'extraLight';
  title?: string;
  titleColor?: 'light' | 'dark';
}

export const Section = ({ children, theme = 'light', title, titleColor = 'light' }: SectionProps) => {
  return (
    <div className={style.container} data-theme={theme}>
      <div className={style.container_inner}>
        {title && (
          <div className={style.title} data-title-color={titleColor}>
            {title}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
