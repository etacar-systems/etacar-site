import { Tag } from '../Tag';
import style from './TagsContainer.module.scss';

interface TagsContainerProps {
  tags: string[];
  type: 'light' | 'blue';
  quantity?: number;
}

export const TagsContainer = ({ tags, type, quantity }: TagsContainerProps) => {
  const tagsToRender = quantity ? tags.slice(0, quantity) : tags;
  return (
    <div className={style.container}>
      {tagsToRender.map((tag, index) => (
        <Tag key={index} title={tag} type={type} />
      ))}
    </div>
  );
};
