import { AppState, MetaReducerState } from '@interfaces';
import { createSelector } from '@ngrx/store';

export const selectAppState = (state: MetaReducerState): AppState =>
  state.appState;

export const selectIsDarkThemeState = createSelector(
  selectAppState,
  (state: AppState): boolean => state.isDarkTheme
);
