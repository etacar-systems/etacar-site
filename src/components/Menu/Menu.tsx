'use client';

import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import { CONTACT } from '../../routes';
import { Button } from '../Button';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div menu-active={menuActive.toString()} className={style.menu}>
      <div className={style.content}>
        <ul className={style.list}>
          {items.map((item, index) => {
            const isActive = pathname === item.route;

            return (
              <li key={index} className={style.listElement}>
                <Link
                  onClick={() => {
                    setMenuActive(false);
                  }}
                  href={item.route}
                  className={classNames(style.item, {
                    [style.item__active]: isActive,
                  })}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button
          onClick={() => {
            router.push(CONTACT);
            setMenuActive(false);
          }}
          title={'Get estimation'}
          type={'bordered'}
        />
      </div>
    </div>
  );
};
