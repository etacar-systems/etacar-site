import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CONTACT } from '../../routes';
import { Button } from '../Button';

import style from './Menu.module.scss';

interface NavItem {
  title: string;
  route: string;
}

interface MenuProps {
  items: NavItem[];
  menuActive: boolean;
  setMenuActive: Dispatch<SetStateAction<boolean>>;
}

export const Menu = ({ menuActive, setMenuActive, items }: MenuProps) => {
  const navigate = useNavigate();
  return (
    <div menu-active={menuActive.toString()} className={style.menu}>
      <div className={style.content}>
        <ul className={style.list}>
          {items.map((item, index) => (
            <li key={index} className={style.listElement}>
              <NavLink
                onClick={() => {
                  setMenuActive(false);
                }}
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
            </li>
          ))}
        </ul>
        <Button
          onClick={() => {
            navigate(CONTACT);
            setMenuActive(false);
          }}
          title={'Get estimation'}
          type={'bordered'}
        />
      </div>
    </div>
  );
};
