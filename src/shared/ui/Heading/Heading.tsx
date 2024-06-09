import {useState} from 'react';
import styles from './Heading.module.scss';

type HeadingPropsType = {
  text: string;
};

export default function Heading({text}: HeadingPropsType) {
  const [isLeaving, setIsLeaving] = useState(false);

  const handleMouseEnter = () => {
    setIsLeaving(false);
  };

  const handleMouseLeave = () => {
    setIsLeaving(true);
    setTimeout(() => setIsLeaving(false), 500); // вернуть к исходному состоянию после завершения анимации
  };

  return (
    <h2
      className={`${styles.heading} ${isLeaving ? styles.leave : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </h2>
  );
}
