import { ActionReducerMap } from '@ngrx/store';
import { MetaReducerState } from 'src/app/interfaces';
import { todosReducer } from './todos.reducers';

export const metaReducer: ActionReducerMap<MetaReducerState> = {
  todos: todosReducer,
};
