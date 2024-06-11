import React from 'react';
import Button from '../../../shared/ui/Button/Button';
import '../../../shared/styles/_all.scss';
import {MENU_DATA} from '../model/data';
import {useNavigate} from 'react-router-dom';

export default function Menu() {
  const navigate = useNavigate();

  return (
    <nav className='menu'>
      {MENU_DATA.map((item) => (
        <Button
          key={item.id}
          variant={'menu'}
          text={item.label}
          onClick={() => navigate(item.href)}
        />
      ))}
    </nav>
  );
}
