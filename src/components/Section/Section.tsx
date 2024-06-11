import React, { ReactNode } from "react";

import style from "./Section.module.scss";

interface SectionProps {
  children: ReactNode;
  theme?: 'dark' | 'white';
  title?: string;
}

export const Section = ({ children, theme, title }: SectionProps) => {
  return (
    <div className={style.container}>
      {title && <div className={style.title}>{title}</div>}
      {children}
    </div>
  );
};
