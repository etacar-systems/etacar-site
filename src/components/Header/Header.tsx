import logo from './../../shared/assets/Logo.svg';
import '../../shared/styles/_all.scss';

import styles from './Header.module.scss';
import { navItems } from './model/data';
import React from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';
import Button from '../../shared/ui/Button/Button';

export default function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt={'logo'} />
        </div>
        <div className={styles.navigation}>
          {navItems.map(item => (
            <NavLink
              to={item.route}
              className={({ isActive }) =>
                classNames({
                  [styles.item]: true,
                  [styles.item__active]: isActive,
                })
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <Button text={'Get estimation'} onClick={() => {
        }} variant={'stroke'}/>
      </div>
    </header>
  );
}
