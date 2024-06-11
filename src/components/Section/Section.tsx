import React, { ReactNode } from "react";

import style from "./Section.module.scss";

interface SectionProps {
  children: ReactNode;
  theme?: 'blueLight' | 'light' | 'dark' | 'extraLight';
  title?: string;
}

export const Section = ({ children, theme = 'light', title }: SectionProps) => {
  return (
    <div className={style.container} data-theme={theme}>
      <div className={style.container_inner}>
      {title && <div className={style.title}>{title}</div>}
      {children}
    </div>
    </div>
  );
};
