import { FC, ReactNode } from 'react';
import classes from './MyButton.module.scss';

interface MyButtonI {
  children?: ReactNode;
  className?: string;
}

export const MyButton: FC<MyButtonI> = ({
  children,
  className,
}): JSX.Element => {
  return (
    <button type="button" className={`${classes.myBtn} ${className || ''}`}>
      {children}
    </button>
  );
};
