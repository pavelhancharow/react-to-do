import { FC } from 'react';
import classes from './MyInput.module.scss';

interface MyInputI {
  type: string;
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
}

export const MyInput: FC<MyInputI> = (props): JSX.Element => {
  return <input className={classes.myInput} {...props} />;
};
