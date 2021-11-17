import {
  TodoAction,
  TodoActionTypes,
  TodoState,
} from '../../models/todoReducerType';

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  value: '',
  doneTodos: false,
  modal: false,
  currentTodo: { body: '', id: null },
};

export const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true };
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodoActionTypes.SET_TODOS:
      return { ...state, todos: action.payload };
    case TodoActionTypes.SET_VALUE:
      return { ...state, value: action.payload };
    case TodoActionTypes.DONE_TODOS:
      return { ...state, doneTodos: action.payload };
    case TodoActionTypes.SET_MODAL:
      return { ...state, modal: action.payload };
    case TodoActionTypes.SET_CURRENT_TODO:
      return { ...state, currentTodo: action.payload };
    default:
      return state;
  }
};
