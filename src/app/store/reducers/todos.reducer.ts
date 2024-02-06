import { createReducer } from '@ngrx/store';
import { INITIAL_TODOS_STATE } from 'src/app/constants';

export const todosReducer = createReducer(INITIAL_TODOS_STATE);
