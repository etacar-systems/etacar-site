import { FadeCard } from '@/components/FadeCard';
import { useRouter } from 'next/navigation';
import { Button } from '../../../components/Button';
import { TagsContainer } from '../../../components/TagsContainer';
import { CONTACT } from '../../../routes';
import style from './CaseStudiesItem.module.scss';

interface CaseStudiesItemProps {
  image: string;
  paragraphs: string[];
  tags: string[];
  title: string;
  orderReverse: boolean;
  index: number;
  indexOnPage: number;
}

export const CaseStudiesItem = ({
  indexOnPage,
  image,
  paragraphs,
  tags,
  title,
  orderReverse,
  index,
}: CaseStudiesItemProps) => {
  const router = useRouter();
  return (
    <>
      {indexOnPage === 2 ? (
        <FadeCard className={style.getStarted}>
          <div className={style.textContainer}>
            <div className={style.title}>Will your idea be next?</div>
            <div className={style.subtitle}>Get a free project estimation</div>
          </div>
          <div>
            <Button type='solid' title='Get started' icon={true} onClick={() => router.push(CONTACT)} />
          </div>
        </FadeCard>
      ) : undefined}
      <FadeCard order-reverse={orderReverse.toString()} className={style.container}>
        <div className={style.outer}>
          <div className={style.inner}>
            <div className={style.title}>{title}</div>
            <div className={style.paragraphs}>
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <TagsContainer tags={tags} type={'blue'} />
        </div>
        <div className={style.image}>
          <img src={image} alt={`${title}_icon`} />
        </div>
      </FadeCard>
    </>
  );
};
