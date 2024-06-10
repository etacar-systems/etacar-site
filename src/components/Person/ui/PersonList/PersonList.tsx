import {PERSON_DATA} from '../../model/data';
import Person from '../Person';
import styles from './PersonList.module.scss';


const PersonList = () => (
  <div className={styles.list}>
    {PERSON_DATA.map(person => (
      <Person key={person.id} {...person} />
    ))}
  </div>
);

export default PersonList;
