import { MetaReducerState, TodosState } from '@interfaces';
import { createSelector } from '@ngrx/store';

export const selectTodosState = (state: MetaReducerState): TodosState =>
  state.todos;

export const selectTodosListState = createSelector(
  selectTodosState,
  (state: TodosState) => state.list
);

export const selectSelectedTodoState = createSelector(
  selectTodosState,
  (state: TodosState) => state.selected
);
