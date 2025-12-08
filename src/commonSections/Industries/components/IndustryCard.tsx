import styles from './IndustryCard.module.scss';

interface ItemProps {
  description: string;
  image: string;
  icon: string;
  onClick: () => void;
}

export const IndustryCard = ({ description, icon, image, onClick }: ItemProps) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image} alt='Avatar' />
      <div className={styles.container}>
        <img src={icon} alt='description' />
        <h4>{description}</h4>
      </div>
    </div>
  );
};
