import React from 'react';
import styles from './Person.module.scss';

type PersonPropsType = {
    name: string,
    ava: string,
    title: string,
    description: string,
}

const Person: React.FC<PersonPropsType> = ({name, ava, title, description}) => (
  <section className={styles.wrap}>
    <div className={styles.info}>
      <div>
        <img className={styles.avatar} src={ava} alt={name}/>
      </div>
      <div className={styles.person}>
        <h3 className={styles.name}>{name}</h3>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
    <p className={styles.description}>{description}</p>
  </section>
);

export default Person;
