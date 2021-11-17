import { FC } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { MyButton } from './UI/button/MyButton';
import { MyCheckbox } from './UI/checkbox/MyCheckbox';
import {
  setCurrentTodo,
  setModal,
  setTodos,
} from '../store/action-creators/todo';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { TodoI } from '../models/todo';
import '../styles/list/item.scss';

interface ListItemI {
  item: TodoI;
  provided: DraggableProvided;
}

export const ListItem: FC<ListItemI> = ({ provided, item }): JSX.Element => {
  const { body, id, done } = item;
  const { todos } = useTypedSelector(({ todo }) => todo);
  const dispatch = useDispatch();

  const changeHandler = (): void => {
    const idx = todos.findIndex((el) => el.id === id);

    const oldItem = todos[idx];
    const newItem = { ...oldItem, done: !oldItem.done };

    const newTodos = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];

    dispatch(setTodos(newTodos));
  };

  const editHandler = (): void => {
    const currentTodo = { body, id };
    dispatch(setCurrentTodo(currentTodo));
    dispatch(setModal(true));
  };

  const clickHandler = (): void => {
    dispatch(setTodos(todos.filter((el) => el.id !== id)));
  };

  return (
    <li
      className="item"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <span className={!done ? '' : 'line'}>{body}</span>
      <div className="item-btns">
        <MyCheckbox id={id} onChange={changeHandler} checked={done} />
        <MyButton className="btn edit" onClick={editHandler} />
        <MyButton className="btn remove" onClick={clickHandler} />
      </div>
    </li>
  );
};
