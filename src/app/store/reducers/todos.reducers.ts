import { createReducer, on } from '@ngrx/store';
import { INITIAL_TODOS_STATE } from 'src/app/constants';
import { selectTodo } from '../actions';
import { Todo, TodosState } from '@interfaces';

const selectTodoReducer = (
  state: TodosState,
  actionProps: { todo: Todo | null }
): TodosState => {
  return {
    ...state,
    selected: actionProps.todo,
  };
};

export const todosReducer = createReducer(
  INITIAL_TODOS_STATE,
  on(selectTodo, selectTodoReducer)
);
