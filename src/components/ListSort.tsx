import { FC } from 'react';
import { MyButton } from './UI/button/MyButton';
import '../styles/list/sort.scss';

export const ListSort: FC = (): JSX.Element => {
  return (
    <div className="sort">
      <MyButton className="w30">All</MyButton>
      <MyButton className="w30">Done</MyButton>
      <MyButton className="w30">ToDo</MyButton>
    </div>
  );
};
