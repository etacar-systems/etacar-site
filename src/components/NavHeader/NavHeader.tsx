import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';
import { useViewportSize } from '../../hooks/useViewportSize';
import { CONTACT, HOME } from '../../routes';
import { Button } from '../Button';
import { Menu } from '../Menu';
import { navItems } from './data';
import style from './NavHeader.module.scss';

export const NavHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { width } = useViewportSize();
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <img onClick={() => router.push(HOME)} src={'/icons/Logo.svg'} alt={'logo'} />
        </div>
        <div className={style.navigation_container}>
          {width > 768 ? (
            <div className={style.navigation}>
              {navItems.map((item, i) => {
                const isActive =
                  item.route === '/' ? pathname === '/' || pathname === '' : pathname.replace(/\/$/, '') === item.route;

                return (
                  <Link
                    key={i}
                    href={item.route}
                    className={classNames(style.item, {
                      [style.item__active]: isActive,
                    })}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          ) : undefined}
          {width > 768 ? (
            <Button onClick={() => router.push(CONTACT)} title={'Get estimation'} type={'bordered'} />
          ) : undefined}
          {width < 768 ? (
            <div
              onClick={() => {
                menuActive ? setMenuActive(false) : setMenuActive(true);
              }}
              className={menuActive ? style.burger_button_active : style.burger_button}
            >
              <span />
            </div>
          ) : undefined}
          <Menu menuActive={menuActive} setMenuActive={setMenuActive} items={navItems} />
        </div>
      </div>
    </header>
  );
};
