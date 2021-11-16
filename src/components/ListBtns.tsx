import { FC } from 'react';
import { MyButton } from './UI/button/MyButton';
import '../styles/list/btns.scss';

export const ListBtns: FC = (): JSX.Element => {
  return (
    <div className="list-btns">
      <MyButton className="bgred w45">Delete done tasks</MyButton>
      <MyButton className="bgred w45">Delete all tasks</MyButton>
    </div>
  );
};
