import { FC } from 'react';
import { Input } from './Input';
import { MyButton } from './UI/button/MyButton';
import { MyTitle } from './UI/title/MyTitle';

export const TodoInput: FC = (): JSX.Element => {
  return (
    <>
      <MyTitle>ToDo Input</MyTitle>
      <div className="todo-input">
        <Input />
        <MyButton>Add new task</MyButton>
      </div>
    </>
  );
};
