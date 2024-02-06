import { Todo } from '@interfaces';
import { createAction, props } from '@ngrx/store';

enum Actions {
  SelectTodo = '[TODOS STATE] Select TODO',
  RemoveTodo = '[TODOS STATE] Remove TODO',
  AddTodo = '[TODOS STATE] Add TODO',
}

export const selectTodoAction = createAction(
  Actions.SelectTodo,
  props<{ todo: Todo | null }>()
);

export const removeTodoAction = createAction(
  Actions.RemoveTodo,
  props<{ todo: Todo }>()
);

export const addTodoAction = createAction(
  Actions.AddTodo,
  props<{ todo: Todo }>()
);
