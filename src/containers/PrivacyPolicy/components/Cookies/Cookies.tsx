import { data, table } from './data';

import { Fragment } from 'react/jsx-runtime';
import style from './Cookies.module.scss';

export const Cookies = () => {
  return (
    <div className={style.container}>
      <div className={style.container_inner}>
        <div className={style.title}>Use of cookies</div>
        <div className={style.secondaryText}>
          EtaCar Systems may use cookies on our websites to improve performance and enhance your user experience. This
          policy explains generally how cookies work.
        </div>
      </div>
      <div className={style.cards}>
        {data.map((card, i) => (
          <div key={i} className={style.card_container}>
            <div className={style.card_title}>{card.title}</div>
            {card.paragraphs.map((string, index) => (
              <div key={index} className={style.paragraph}>
                <div className={style.card_text}>{string}</div>
                {card.id === 3 && index === 2 ? (
                  <div className={style.table}>
                    {table.map((row, index) => (
                      <Fragment key={index}>
                        {index === 0 ? (
                          <div className={style.row}>
                            {row.map((title, i) => (
                              <div key={i} className={style.row_title}>
                                {title}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className={style.row}>
                            {row.map((string, i) => (
                              <div key={i} className={style.row_string}>
                                {string}
                              </div>
                            ))}
                          </div>
                        )}
                      </Fragment>
                    ))}
                  </div>
                ) : undefined}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
