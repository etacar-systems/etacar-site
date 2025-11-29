import { ReactNode } from 'react';
import style from './Section.module.scss';

interface SectionProps {
  children: ReactNode;
  theme?: 'blueLight' | 'light' | 'dark' | 'extraLight';
  title?: string;
  subtitle?: string;
  textColor?: 'light' | 'dark';
}

export const Section = ({ children, theme = 'light', title, subtitle, textColor = 'light' }: SectionProps) => {
  return (
    <div className={style.container} data-theme={theme}>
      <div className={style.container_inner}>
        {title && (
          <div className={style.title} data-title-color={textColor}>
            {title}
          </div>
        )}

        {subtitle && (
          <div className={style.subtitle} data-title-color={textColor}>
            {subtitle}
          </div>
        )}

        {children}
      </div>
    </div>
  );
};
