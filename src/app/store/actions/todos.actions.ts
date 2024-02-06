import { Todo } from '@interfaces';
import { createAction, props } from '@ngrx/store';

enum Actions {
  SelectTODO = '[TODOS STATE] Select TODO',
}

export const selectTODO = createAction(
  Actions.SelectTODO,
  props<{ todo: Todo }>()
);
