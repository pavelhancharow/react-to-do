import { FC, SyntheticEvent } from 'react';
import classes from './MyInput.module.scss';

interface MyInputI {
  type: string;
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  checked?: boolean;
  onChange?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
}

export const MyInput: FC<MyInputI> = ({ className, ...props }): JSX.Element => {
  const rootClasses = [classes.myInput];

  if (className) rootClasses.push(className);

  return <input className={rootClasses.join(' ')} {...props} />;
};
