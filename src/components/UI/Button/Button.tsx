import { ReactNode } from "react"
import style from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  buttonIcon: string;
  altText?: string;
  buttonTheme?: 'blue' | 'lightblue';
  fontWeight?: string;

}

export const Button = ({
  children, 
  buttonIcon, 
  altText, 
  buttonTheme = 'blue',
  fontWeight = '700',
}: ButtonProps) => {
  return (
    <button 
      className={style.button} 
      button-theme = {buttonTheme}
    >
        <div font-weight={fontWeight}>{children}</div>
        <img src={buttonIcon} alt={altText} />
    </button>
  )
}