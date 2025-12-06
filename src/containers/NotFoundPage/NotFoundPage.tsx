'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../../components/Button';
import { HOME } from '../../routes';
import style from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div className={style.wrapper}>
      <div className={style.title_container}>
        <div className={style.title}>This page doesn’t exist</div>
        <Button
          onClick={() => {
            router.push(HOME);
          }}
          type='ghost'
          title='Go Home'
          icon
        />
      </div>
      <div className={style.error_text}>
        <div className={style.error_container}>
          <div className={style.oops}>OOOOOPSSS</div>
          <div className={style.zero}></div>
          <div className={style.error}>
            <img src={'/icons/NotFoundPage/error404.svg'} alt='error code' />
          </div>
        </div>
      </div>
    </div>
  );
};
