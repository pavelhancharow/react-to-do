export interface TodoI {
  body: string;
  id: number;
  done: boolean;
  show: boolean;
}

export interface CurrentTodoI {
  body: string;
  id: number | null;
}
