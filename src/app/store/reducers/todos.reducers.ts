import { createReducer, on } from '@ngrx/store';
import { INITIAL_TODOS_STATE } from 'src/app/constants';
import { addTodoAction, removeTodoAction, selectTodoAction } from '../actions';
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

const removeTodoReducer = (
  state: TodosState,
  actionProps: { todo: Todo }
): TodosState => {
  return {
    ...state,
    list: state.list.filter(todo => todo.id !== actionProps.todo.id),
  };
};

const addTodoReducer = (
  state: TodosState,
  actionProps: { todo: Todo }
): TodosState => {
  return {
    ...state,
    list: [...state.list, actionProps.todo],
  };
};

export const todosReducer = createReducer(
  INITIAL_TODOS_STATE,
  on(selectTodoAction, selectTodoReducer),
  on(removeTodoAction, removeTodoReducer),
  on(addTodoAction, addTodoReducer)
);
