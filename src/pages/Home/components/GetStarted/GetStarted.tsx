import Button from '../../../../shared/ui/Button/Button';
import '../../../../shared/styles/_all.scss';
import styles from './GetStarted.module.scss';

export const GetStarted = () => {
  return (
    <>
      <section className={styles.wrap}>
        <div className={styles.mainText}>
          <div>Your Digital</div>
          <div className={styles.colorText}> Product</div>
          <div className={styles.colorText}>Development</div>
          <div> Partner</div>
        </div>

        <div className={styles.right}>
          <div className={styles.text}>
                        Expand your business capabilities
                        with comprehensive world-class software development, including
                        thoughtful strategy, UX/UI design and on-demand development
          </div>
          <div className={styles.getStarted}>
            <div className={styles.projectText}> free project estimation</div>
            <Button text={'Get Started'} onClick={() => {
            }}/>
          </div>
        </div>
      </section>
    </>
  );
};
