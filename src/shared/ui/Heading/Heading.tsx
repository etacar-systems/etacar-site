import styles from './Heading.module.scss';

type HeadingPropsType = {
    text: string;
}


export default function Heading({text}: HeadingPropsType) {
  return (
    <h2 className={styles.heading}>{text}</h2>
  );
}
