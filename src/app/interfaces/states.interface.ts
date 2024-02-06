import { Todo } from './todo.interface';

export interface MetaReducerState {
  todos: TodosState;
}

export interface TodosState {
  list: Todo[];
  selected: Todo | null;
}
