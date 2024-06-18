import styles from './Development.module.scss';
import laptop from '../../../../shared/assets/images/Laptop.svg';
import Heading from '../../../../shared/ui/Heading/Heading';

export const Development = () => {
  const steps = [
    {number: '1/', text: ' Discovery'},
    {number: '2/', text: 'Definition'},
    {number: '3/', text: 'Design', additionalText: 'Prototyping'},
    {number: '4/', text: 'Development', additionalText: 'Testing'},
    {number: '5/', text: 'QA', additionalText: 'Delivery'},
  ];

  return (
    <section className={styles.cycle}>
      <div className={styles.mainText}><Heading text={'COMPREHENSIVE SOFTWARE DEVELOPMENT'}/></div>
      <div className={styles.content}>
        <div>
          <img src={laptop} alt={'Laptop'}/>
        </div>
        <div className={styles.description}>
          <h5 className={styles.text}>
                        Eta Car Systems provides professional software development
                        solutions <br/>for European/US clients. Our experienced engineers ensure personalized
                        services, prioritizing your needs.
                        We follow Agile processes and offer cost-effective Ruby on Rails, JavaScript/TypeScript,
                        UI/UX,
            <br/>and DevOps solutions.

          </h5>
          <div className={styles.list}>
            {steps.map((step, index) => (
              <div key={index} className={styles.option}>
                <h3 className={styles.number}>{step.number}</h3>
                <h3>{step.text}</h3>
                {step.additionalText && (
                  <>
                    <h3 className={styles.blue}>&</h3>
                    <h3>{step.additionalText}</h3>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>


    </section>
  );
};
