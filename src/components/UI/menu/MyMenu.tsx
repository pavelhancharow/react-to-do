import { FC, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import {
  setCurrentTodo,
  setModal,
  setTodos,
} from '../../../store/action-creators/todo';
import { MyButton } from '../button/MyButton';
import { MyInput } from '../input/MyInput';
import { MyModal } from '../modal/MyModal';
import cl from './MyMenu.module.scss';

export const MyMenu: FC = (): JSX.Element => {
  const { todos, currentTodo } = useTypedSelector(({ todo }) => todo);
  const { body, id } = currentTodo;
  const dispatch = useDispatch();

  const confirmHandler = (): void => {
    const idx = todos.findIndex((el) => el.id === id);

    const oldItem = todos[idx];
    const newItem = { ...oldItem, body };

    const newTodos = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];

    dispatch(setTodos(newTodos));
    dispatch(setModal(false));
    dispatch(setCurrentTodo({ ...currentTodo, body: '', id: null }));
  };

  const changeHandler = (e: SyntheticEvent<HTMLInputElement>): void => {
    dispatch(setCurrentTodo({ ...currentTodo, body: e.currentTarget.value }));
  };

  return (
    <MyModal>
      <MyInput
        type="text"
        className={cl.myMenuInput}
        value={body}
        onChange={changeHandler}
      />
      <MyButton onClick={confirmHandler}>Confirm</MyButton>
    </MyModal>
  );
};
