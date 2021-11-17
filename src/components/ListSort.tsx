import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { setDoneTodos, setTodos } from '../store/action-creators/todo';
import { MyButton } from './UI/button/MyButton';
import '../styles/list/sort.scss';

export const ListSort: FC = (): JSX.Element => {
  const { todos } = useTypedSelector(({ todo }) => todo);
  const dispatch = useDispatch();

  const sortDoneHandler = (): void => {
    if (todos.length) {
      dispatch(setDoneTodos(true));

      const filterArray = todos
        .filter(({ done }) => !done)
        .map((item) => ({ ...item, show: false }));

      const newArray = todos
        .filter(({ done }) => done)
        .map((item) => ({ ...item, show: true }));

      dispatch(setTodos([...newArray, ...filterArray]));
    }
  };

  const sortTodoHandler = (): void => {
    if (todos.length) {
      dispatch(setDoneTodos(false));

      const filterArray = todos
        .filter(({ done }) => done)
        .map((item) => ({ ...item, show: false }));

      const newArray = todos
        .filter(({ done }) => !done)
        .map((item) => ({ ...item, show: true }));

      dispatch(setTodos([...newArray, ...filterArray]));
    }
  };

  const sortAllHandler = (): void => {
    dispatch(setDoneTodos(false));

    dispatch(setTodos(todos.map((item) => ({ ...item, show: true }))));
  };

  return (
    <div className="sort">
      <MyButton className="w30" onClick={sortAllHandler}>
        All
      </MyButton>
      <MyButton className="w30" onClick={sortDoneHandler}>
        Done
      </MyButton>
      <MyButton className="w30" onClick={sortTodoHandler}>
        ToDo
      </MyButton>
    </div>
  );
};
