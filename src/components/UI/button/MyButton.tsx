import { FC, ReactNode } from 'react';
import classes from './MyButton.module.scss';

interface MyButtonI {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MyButton: FC<MyButtonI> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  const rootClasses = [classes.myBtn];

  if (className) rootClasses.push(className);

  return (
    <button type="button" className={rootClasses.join(' ')} {...props}>
      {children}
    </button>
  );
};
