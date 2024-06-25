import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { HOME } from '../../routes';
import { notFoundPageImages } from '../../assets/icons/NotFoundPage';
import style from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={style.wrapper}>
      <div className={style.title_container}>
        <div className={style.title}>This page doesn’t exist</div>
        <Button
          onClick={() => {
            navigate(HOME);
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
            <img src={notFoundPageImages.error404} alt='error code' />
          </div>
        </div>
      </div>
    </div>
  );
};
