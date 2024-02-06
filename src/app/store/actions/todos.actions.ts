import { Todo } from '@interfaces';
import { createAction, props } from '@ngrx/store';

enum Actions {
  SelectTodo = '[TODOS STATE] Select TODO',
}

export const selectTodo = createAction(
  Actions.SelectTodo,
  props<{ todo: Todo | null }>()
);
