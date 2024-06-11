import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import logoIcon from "../../assets/icons/Logo.svg";

import { navItems } from "./data";
import style from "./NavHeader.module.scss";

export const NavHeader = () => {
  return (
    <header>
      <div className={style.container}>
        <div className={style.logo}>
          <img src={logoIcon} alt={"logo"} />
        </div>
        <div className={style.navigation}>
          {navItems.map((item) => (
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
      </div>
    </header>
  );
};
