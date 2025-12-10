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
        <FadeCard className={style.getStarted}>
          <div className={style.textContainer}>
            <div className={style.title}>Will your idea be next?</div>
            <div className={style.subtitle}>Get a free project estimation</div>
          </div>
          <div>
            <Button type='solid' title='Get started' icon={true} onClick={() => router.push(CONTACT)} />
          </div>
        </FadeCard>
      )}

      <FadeCard order-reverse={orderReverse.toString()} className={style.container}>
        <div className={style.outer}>
          <div className={style.inner}>
            <h3 className={style.title}>{title}</h3>

            <div className={style.paragraphs}>
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className={style.features}>
              <h4 className={style.featuresTitle}>Key capabilities:</h4>
              <ul className={style.featuresList}>
                {features.map((feature, i) => (
                  <li className={style.featuresListItem} key={i}>
                    <span className={style.bullet}>●</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={style.results}>
              <strong>Result:</strong> {results}
            </div>
          </div>

          <TagsContainer tags={tags} type='blue' />
        </div>

        <div className={style.image}>
          <img src={image} alt={title} />
        </div>
      </FadeCard>
    </>
  );
};
