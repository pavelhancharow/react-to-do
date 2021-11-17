import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { MyButton } from './UI/button/MyButton';
import '../styles/list/btns.scss';
import { setDoneTodos, setTodos } from '../store/action-creators/todo';

export const ListBtns: FC = (): JSX.Element => {
  const { todos } = useTypedSelector(({ todo }) => todo);
  const dispatch = useDispatch();

  const removeDoneHandler = (): void => {
    dispatch(setTodos(todos.filter((item) => !item.done)));
  };

  const removeAllHandler = (): void => {
    dispatch(setDoneTodos(false));
    dispatch(setTodos([]));
  };

  return (
    <div className="list-btns">
      <MyButton className="bgred" onClick={removeDoneHandler}>
        Delete done tasks
      </MyButton>
      <MyButton className="bgred" onClick={removeAllHandler}>
        Delete all tasks
      </MyButton>
    </div>
  );
};
