import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import logoIcon from '../../assets/icons/Logo.svg';

import { navItems } from './data';
import { Button } from '../Button';
import { CONTACT } from '../../routes';
import style from './NavHeader.module.scss';

export const NavHeader = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className={style.container}>
        <div className={style.logo}>
          <img src={logoIcon} alt={'logo'} />
        </div>
        <div className={style.navigation}>
          {navItems.map(item => (
            <NavLink
              to={item.route}
              className={({ isActive }) =>
                classNames({
                  [style.item]: true,
                  [style.item__active]: isActive,
                })
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <Button  onClick={() => navigate(CONTACT)} title={'Get estimation'} type={'bordered'} />
      </div>
    </header>
  );
};
