import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import logoIcon from '../../assets/icons/Logo.svg';

import { navItems } from './data';
import { Button } from '../Button';
import { CONTACT } from '../../routes';
import style from './NavHeader.module.scss';
import { useViewportSize } from '../../hooks/useViewportSize';
import { Menu } from '../Menu';

export const NavHeader = () => {
  const navigate = useNavigate();
  const { width } = useViewportSize();
  const [ menuActive, setMenuActive ] = useState(false);

  return (
    <header>
      <div className={style.container}>
        <div className={style.logo}>
          <img src={logoIcon} alt={'logo'} />
        </div>
        {width > 768 ? <div className={style.navigation}>
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
        </div> : undefined}
        {width > 768 ? <Button  onClick={() => navigate(CONTACT)} title={'Get estimation'} type={'bordered'} /> : undefined}
        {width < 768 ? <div onClick={() => {menuActive ? setMenuActive(false) : setMenuActive(true)}} className={style.burger_button}><span/></div> : undefined}
        <Menu menuActive={menuActive} setMenuActive={setMenuActive} items={navItems}/>
      </div>
    </header>
  );
};
