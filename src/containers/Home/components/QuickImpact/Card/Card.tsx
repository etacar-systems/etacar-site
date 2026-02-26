import { forwardRef, PropsWithChildren, ReactElement, ReactNode } from 'react';
import { UseResizeDetectorReturn } from 'react-resize-detector';

import styles from './Card.module.scss';

type Props = PropsWithChildren & {
  background?: string;
  itemRef?: UseResizeDetectorReturn<HTMLDivElement>['ref'];
  title?: ReactNode;
  content?: ReactNode;
};

export const Card = forwardRef<HTMLDivElement, Props>(({ background, itemRef, title, content }, ref): ReactElement => {
  return (
    <div
      ref={node => {
        if (itemRef) {
          itemRef.current = node;
        }
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      className={styles.cardWrapper}
    >
      <h2 className={styles.title} data-is-content={Boolean(content)} style={{ background }}>
        {title}
      </h2>
      {content && (
        <div className={styles.content}>
          {content}
        </div>
      )}
    </div>
  );
});
Card.displayName = 'Card';
