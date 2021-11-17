import { Dispatch } from 'redux';
import { CurrentTodoI, TodoI } from '../../models/todo';
import { TodoAction, TodoActionTypes } from '../../models/todoReducerType';

const todo = [
  { body: 'Learn core ReactJS', id: Date.now(), done: false, show: true },
  { body: 'Practice ReactJS', id: Date.now() + 1, done: false, show: true },
  { body: 'Learn Redux', id: Date.now() + 2, done: false, show: true },
];

export const fetchTodos = (): unknown => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });

      setTimeout(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_SUCCESS,
          payload: todo,
        });
      }, 700);
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: 'Error todos on load!',
      });
    }
  };
};

export const setTodos = (
  items: TodoI[],
  text?: string,
  isShow = true
): TodoAction => {
  let todos = items;

  if (text) {
    const newTodo = {
      body: text,
      id: Date.now(),
      done: false,
      show: isShow,
    };

    todos = [newTodo, ...items];
  }
  return { type: TodoActionTypes.SET_TODOS, payload: todos };
};

export const setValue = (text: string): TodoAction => {
  return { type: TodoActionTypes.SET_VALUE, payload: text };
};

export const setDoneTodos = (value: boolean): TodoAction => {
  return { type: TodoActionTypes.DONE_TODOS, payload: value };
};

export const setModal = (value: boolean): TodoAction => {
  return { type: TodoActionTypes.SET_MODAL, payload: value };
};

export const setCurrentTodo = (currentTodo: CurrentTodoI): TodoAction => {
  return { type: TodoActionTypes.SET_CURRENT_TODO, payload: currentTodo };
};
