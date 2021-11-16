import { FC } from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

export const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
};
