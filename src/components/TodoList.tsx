import { FC } from 'react';
import { ListBtns } from './ListBtns';
import { List } from './List';
import { ListSort } from './ListSort';
import { MyTitle } from './UI/title/MyTitle';

export const TodoList: FC = (): JSX.Element => {
  return (
    <div className="todo-list">
      <MyTitle>ToDo List</MyTitle>
      <ListSort />
      <List />
      <ListBtns />
    </div>
  );
};
