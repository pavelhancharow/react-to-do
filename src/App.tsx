import { FC } from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { MyMenu } from './components/UI/menu/MyMenu';

export const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
      <MyMenu />
    </div>
  );
};
