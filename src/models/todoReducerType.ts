import { CurrentTodoI, TodoI } from './todo';

export interface TodoState {
  todos: TodoI[];
  loading: boolean;
  error: null | string;
  value: string;
  doneTodos: boolean;
  modal: boolean;
  currentTodo: CurrentTodoI;
}

export enum TodoActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_TODOS = 'SET_TODOS',
  SET_VALUE = 'SET_VALUE',
  DONE_TODOS = 'DONE_TODOS',
  SET_MODAL = 'SET_MODAL',
  SET_CURRENT_TODO = 'SET_CURRENT_TODO',
}

interface FetchTodosAction {
  type: TodoActionTypes.FETCH_TODOS;
}

interface FetchTodosSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: TodoI[];
}

interface FetchTodosErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface SetTodosAction {
  type: TodoActionTypes.SET_TODOS;
  payload: TodoI[];
}

interface SetValueAction {
  type: TodoActionTypes.SET_VALUE;
  payload: string;
}

interface DoneTodosAction {
  type: TodoActionTypes.DONE_TODOS;
  payload: boolean;
}

interface SetModalAction {
  type: TodoActionTypes.SET_MODAL;
  payload: boolean;
}

interface SetCurrentTodoAction {
  type: TodoActionTypes.SET_CURRENT_TODO;
  payload: CurrentTodoI;
}

export type TodoAction =
  | FetchTodosAction
  | FetchTodosSuccessAction
  | FetchTodosErrorAction
  | SetTodosAction
  | SetValueAction
  | DoneTodosAction
  | SetModalAction
  | SetCurrentTodoAction;
