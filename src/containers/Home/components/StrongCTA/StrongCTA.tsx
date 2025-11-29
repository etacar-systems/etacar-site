import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/Button';
import { CONTACT } from '../../../../routes';
import styles from './StrongCTA.module.scss';

export const StrongCTA = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ready to orchestrate AI across your business?</h2>
      <p className={styles.text}>
        <i>Tell us where complexity slows you down – we’ll map the first AI use cases in a free 60-minute session.</i>
      </p>
      <div className={styles.button}>
        <Button onClick={() => navigate(CONTACT)} title={'Book a session'} type={'ghost'} />
      </div>
    </div>
  );
};
