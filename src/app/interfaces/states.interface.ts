import { Todo } from './todo.interface';

export interface MetaReducerState {
  todos: TodosState;
  appState: AppState;
}

export interface TodosState {
  list: Todo[];
  selected: Todo | null;
}

export interface AppState {
  isDarkTheme: boolean;
}
