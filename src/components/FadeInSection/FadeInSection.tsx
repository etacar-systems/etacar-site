'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import style from './FadeInSection.module.scss';

interface FadeInSectionProps {
  children: ReactNode;
}

export const FadeInSection = ({ children }: FadeInSectionProps) => {
  const [isVisible, setVisible] = useState(false);
  const [prevY, setPrevY] = useState(0); // временно 0
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setPrevY(window.scrollY);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > prevY;
      setPrevY(currentY);

      if (domRef.current) {
        const rect = domRef.current.getBoundingClientRect();
        const isElementVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isScrollingDown && isElementVisible) {
          setVisible(true);
        } else if (!isScrollingDown && !isElementVisible && rect.top >= window.innerHeight) {
          setVisible(false);
        }
      }
    };

    const handleInitialVisibility = () => {
      if (domRef.current) {
        const rect = domRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisible(true);
        }
      }
    };

    handleInitialVisibility();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevY]);

  return (
    <div className={`${style.fadeInSection} ${isVisible ? style.isVisible : ''}`} ref={domRef}>
      {children}
    </div>
  );
};
