import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { MetaReducerState } from 'src/app/interfaces';
import { todosReducer } from './todos.reducers';
import { isDevMode } from '@angular/core';
import { appReducer } from './app.reducer';

export const metaReducer: ActionReducerMap<MetaReducerState> = {
  todos: todosReducer,
  appState: appReducer,
};

export const metaReducers: MetaReducer<MetaReducerState>[] = !isDevMode()
  ? []
  : [];
