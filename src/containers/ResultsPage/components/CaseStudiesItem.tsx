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
        <div className={style.getStarted}>
          <div className={style.textContainer}>
            <div className={style.title}>Will your idea be next?</div>
            <div>Get a free project estimation</div>
          </div>
          <div>
            <Button type='solid' title='Get started' icon={true} onClick={() => router.push(CONTACT)} />
          </div>
        </div>
      ) : undefined}
      <div order-reverse={orderReverse.toString()} className={style.container}>
        <div className={style.outer}>
          <div className={style.inner}>
            <div className={style.title}>{title}</div>
            <div>
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
      </div>
    </>
  );
};
