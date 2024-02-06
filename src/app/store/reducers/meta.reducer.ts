import { ActionReducerMap } from '@ngrx/store';
import { MetaReducerState } from 'src/app/interfaces';
import { todosReducer } from './todos.reducer';

export const metaReducer: ActionReducerMap<MetaReducerState> = {
  todos: todosReducer,
};
