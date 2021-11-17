import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { setTodos, setValue } from '../store/action-creators/todo';
import { Input } from './Input';
import { MyButton } from './UI/button/MyButton';
import { MyTitle } from './UI/title/MyTitle';

export const TodoInput: FC = (): JSX.Element => {
  const { value, todos, doneTodos } = useTypedSelector(({ todo }) => todo);
  const dispatch = useDispatch();

  const clickHandler = (): void => {
    if (value.trim()) {
      dispatch(setTodos(todos, value, !doneTodos));
      dispatch(setValue(''));
    }
  };

  return (
    <>
      <MyTitle>ToDo Input</MyTitle>
      <div className="todo-input">
        <Input />
        <MyButton onClick={clickHandler}>Add new task</MyButton>
      </div>
    </>
  );
};
