import style from './Introduction.module.scss';

export const Introduction = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h1>Services</h1>
        <p className={style.subheadline}>
          We design, build and operate AI solutions for business-critical operations — from strategy and architecture to
          copilots, automation and governance.
        </p>
        <p className={style.intro}>
          Below are our flagship services. Each is designed to solve a specific class of problems for C‑level,
          operations, IT and risk leaders — with clear KPIs and ownership.
        </p>
      </div>
    </div>
  );
};
