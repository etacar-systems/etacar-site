import { ReactNode } from 'react';
import style from './Section.module.scss';
import classNames from 'classnames';

interface SectionProps {
  children: ReactNode;
  theme?: 'blueLight' | 'light' | 'dark' | 'extraLight';
  title?: string;
  subtitle?: string;
  textColor?: 'light' | 'dark';
  titleClassName?: string;
}

export const Section = ({ children, theme = 'light', title, subtitle, textColor = 'light', titleClassName }: SectionProps) => {
  return (
    <div className={style.container} data-theme={theme}>
      <div className={style.container_inner}>
        {title && (
          <div className={classNames(style.title, titleClassName)} data-title-color={textColor}>
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
