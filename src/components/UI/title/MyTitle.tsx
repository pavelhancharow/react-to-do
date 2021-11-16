import { FC, ReactNode } from 'react';
import classes from './MyTitle.module.scss';

interface MyTitleI {
  children: ReactNode;
}

export const MyTitle: FC<MyTitleI> = ({ children }): JSX.Element => {
  return <h2 className={classes.myTitle}>{children}</h2>;
};
