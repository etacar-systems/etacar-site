import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../Button';
import style from './FinalCTA.module.scss';

type FinalCTAProps = {
  title?: string;
  text?: string;
  buttonLabel?: string;
  to?: string;
};

export const FinalCTA: React.FC<FinalCTAProps> = ({
  title = 'Meet the team',
  text = 'If you are exploring how AI can support your most important decisions and operations, we’ll be happy to connect you directly with the people who would work on your project.',
  buttonLabel = 'Book a conversation with our team',
  to = '/contact',
}) => {
  const router = useRouter();

  return (
    <div className={style.container}>
      <p className={style.text}>{text}</p>
      <div className={style.buttonBlock}>
        <Button title={buttonLabel} onClick={() => router.push(to)} icon={true} type='solid' />
      </div>
    </div>
  );
};

export default FinalCTA;
