import { Todo } from '@interfaces';
import { createAction, props } from '@ngrx/store';

enum Actions {
  SelectTodo = '[TODOS STATE] Select TODO',
  RemoveTodo = '[TODOS STATE] Remove TODO',
}

export const selectTodo = createAction(
  Actions.SelectTodo,
  props<{ todo: Todo | null }>()
);

export const removeTodo = createAction(
  Actions.RemoveTodo,
  props<{ todo: Todo }>()
);
