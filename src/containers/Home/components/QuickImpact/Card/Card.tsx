import { forwardRef, PropsWithChildren, ReactElement, ReactNode } from 'react';
import styles from './Card.module.scss';

type Props = PropsWithChildren & {
  title?: ReactNode;
  content?: ReactNode;
};

export const Card = forwardRef<HTMLDivElement, Props>(({ title, content }, ref): ReactElement => {
  return (
    <div className={styles.root} ref={ref}>
      <h2 className={styles.title} data-is-content={Boolean(content)}>
        {title}
      </h2>
      {content && (
        <div className={styles.contentContainer}>
          <div className={styles.content}>{content}</div>
        </div>
      )}
    </div>
  );
});
Card.displayName = 'Card';
