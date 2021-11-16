import { FC } from 'react';
import { MyInput } from './UI/input/MyInput';
import '../styles/input.scss';

export const Input: FC = (): JSX.Element => {
  return (
    <div className="input">
      <MyInput type="text" placeholder="New To Do" />
      <div className="input-img" />
    </div>
  );
};
