import styles from './Tag.module.scss';

type TagPropsType = {
    text: string;
}

export default function Tag({text}: TagPropsType) {
  return (
    <div className={styles.tag}>{text}</div>
  );
}
