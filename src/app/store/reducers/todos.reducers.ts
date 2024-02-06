import { createReducer, on } from '@ngrx/store';
import { INITIAL_TODOS_STATE } from 'src/app/constants';
import { selectTODO } from '../actions';
import { Todo, TodosState } from '@interfaces';

const selectTODOReducer = (
  state: TodosState,
  actionProps: { todo: Todo }
): TodosState => {
  return {
    ...state,
    selected: actionProps.todo,
  };
};

export const todosReducer = createReducer(
  INITIAL_TODOS_STATE,
  on(selectTODO, selectTODOReducer)
);
