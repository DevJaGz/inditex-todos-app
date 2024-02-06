import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { MetaReducerState } from 'src/app/interfaces';
import { todosReducer } from './todos.reducers';
import { isDevMode } from '@angular/core';

export const metaReducer: ActionReducerMap<MetaReducerState> = {
  todos: todosReducer,
};

export const metaReducers: MetaReducer<MetaReducerState>[] = !isDevMode()
  ? []
  : [];
