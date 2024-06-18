import styles from './Tag.module.scss';

type TagPropsType = {
    text: string;
    variant?: 'default' | 'new';
};

export default function Tag({text, variant}: TagPropsType) {
  return (
    <div className={`${styles.tag} ${variant === 'new' ? styles.new : ''}`}>
      {text}
    </div>
  );
}
