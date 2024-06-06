import logo from './../../shared/assets/Logo.svg';
import Menu from '../Menu/ui/Menu';
import '../../shared/styles/_all.scss';
import Button from '../../shared/ui/Button/Button';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.wrap}>
      <div className={styles.header}>
        <img src={logo} alt={'Eta Car Systems'}/>
        <Menu/>
        <Button text={'Get estimation'} onClick={() => {
        }} variant={'stroke'}/></div>
    </header>
  );
}
