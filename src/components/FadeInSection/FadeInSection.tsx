import { ReactNode, useEffect, useRef, useState } from 'react';

import style from './FadeInSection.module.scss';

interface FadeInSectionProps {
  children: ReactNode;
}
export const FadeInSection = ({ children }: FadeInSectionProps) => {
  const [isVisible, setVisible] = useState<boolean>(true);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);
  return (
    <div className={`${style.fadeInSection} ${isVisible ? style.isVisible : ''}`} ref={domRef}>
      {children}
    </div>
  );
};
