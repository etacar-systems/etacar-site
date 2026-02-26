import { motion, type Variants } from 'framer-motion';
import { FadeCard } from '@/components/FadeCard';
import { useRouter } from 'next/navigation';
import { Button } from '../../../components/Button';
import { TagsContainer } from '../../../components/TagsContainer';
import { CONTACT } from '../../../routes';
import style from './CaseStudiesItem.module.scss';

interface CaseStudiesItemProps {
  image: string;
  paragraphs: string[]; // Проблема + что построили
  features: string[]; // Список возможностей
  results: string; // Результат
  tags: string[];
  keyTags?: string[]; // если используешь где-то ещё
  title: string;
  orderReverse: boolean;
  index: number;
  indexOnPage: number;
}

// Animation variants
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.3,
    },
  },
};

const ctaVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const CaseStudiesItem = ({
  indexOnPage,
  image,
  paragraphs,
  features,
  results,
  tags,
  title,
  orderReverse,
}: CaseStudiesItemProps) => {
  const router = useRouter();

  return (
    <>
      {indexOnPage === 2 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ctaVariants}
        >
          <FadeCard className={style.getStarted}>
            <div className={style.textContainer}>
              <div className={style.title}>Will your idea be next?</div>
              <div className={style.subtitle}>Get a free project estimation</div>
            </div>
            <div>
              <Button type='solid' title='Get started' icon={true} onClick={() => router.push(CONTACT)} />
            </div>
          </FadeCard>
        </motion.div>
      )}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <FadeCard order-reverse={orderReverse.toString()} className={style.container}>
          {/* Background glow effect */}
          <div className={style.backgroundGlow} />

          <div className={style.outer}>
            <div className={style.inner}>
              <motion.h3 className={style.title} variants={itemVariants}>
                {title}
              </motion.h3>

              <motion.div className={style.paragraphs} variants={itemVariants}>
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </motion.div>

              <motion.div className={style.features} variants={contentVariants}>
                <motion.h4 className={style.featuresTitle} variants={itemVariants}>
                  Key capabilities:
                </motion.h4>
                <motion.ul className={style.featuresList} variants={contentVariants}>
                  {features.map((feature, i) => (
                    <motion.li className={style.featuresListItem} key={i} variants={itemVariants}>
                      <span className={style.bullet}>●</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div className={style.results} variants={itemVariants}>
                <strong>Result:</strong> {results}
              </motion.div>
            </div>

            <TagsContainer tags={tags} type='blue' />
          </div>

          <motion.div className={style.image} variants={imageVariants}>
            <img src={image} alt={title} />
          </motion.div>
        </FadeCard>
      </motion.div>
    </>
  );
};
