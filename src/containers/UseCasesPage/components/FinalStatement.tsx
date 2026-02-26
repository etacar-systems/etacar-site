import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Button } from '@/components/Button';
import styles from './FinalStatement.module.scss';

const FinalStatement = () => {
  const router = useRouter();

  return (
    <SectionWrapper className={styles.container}>
      <div className={styles.backgroundGradient} />
      <div className={styles.glowEffect} />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.statement}>
          <p className={styles.text}>This is not experimentation.</p>
          <p className={styles.textHighlight}>This is operational infrastructure.</p>
        </div>

        <motion.div
          className={styles.buttonWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button
            title='Request Executive Discussion'
            onClick={() => router.push('/contact')}
            type='solid'
            size='large'
          />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default FinalStatement;
