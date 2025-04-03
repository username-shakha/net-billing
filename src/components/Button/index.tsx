import { ReactElement, ReactNode } from 'react';
import './index.scss';

interface IButtonProps {
  children: ReactNode;
  leftIcon?: ReactElement;
}

export const Button = ({ children, leftIcon }: IButtonProps) => {
  return (
    <button className="button">
      {leftIcon && leftIcon}
      {children}
    </button>
  );
};
