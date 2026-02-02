import { ArcherContainer, ArcherElement } from 'react-archer';

import { Card } from '../Card';
import { cards, Key } from '../data';
import { relations } from './data';
import styles from './MobileLayout.module.scss';

export const MobileLayout = () => {
  return (
    <ArcherContainer noCurves strokeColor={'white'}>
      <div className={styles.container}>
        {relations.map((relation, index) => (
          <div className={styles.block} key={index}>
            {Object.keys(relation).map(key => {
              const card = cards.find(card => card.id === key)!;
              return (
                <ArcherElement id={card.id} key={card.id} relations={relation[key as Key]}>
                  <Card {...card} />
                </ArcherElement>
              );
            })}
          </div>
        ))}
      </div>
    </ArcherContainer>
  );
};
