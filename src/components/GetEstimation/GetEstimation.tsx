import styles from './GetEstimation.module.scss';

export function GetEstimation() {
  const {wrap, block, text, list, paragraph, round} = styles;

  const steps = [
    {step: 1, description: 'Sending your data'},
    {step: 2, description: 'Conducting a free cost and time assessment'},
    {step: 3, description: 'Conclusion of the contract'},
    {step: 4, description: 'Project development'},
    {step: 5, description: 'Project release'}
  ];

  return (
    <section className={wrap}>
      <div className={block}>
        <h3>Get Estimation</h3>
        <h4 className={text}>Enter the data and describe your project so that <br/>we can provide you
                    with a free estimate of the <br/> cost and time of implementation of your idea</h4>

        <div className={list}>
          {steps.map(({step, description}) => (
            <div className={paragraph} key={step}>
              <div className={round}>{step}</div>
              <h4 className={text}>{description}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
