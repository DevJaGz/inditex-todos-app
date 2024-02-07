import { createAction, props } from '@ngrx/store';

enum Actions {
  ToggleTheme = '[APP STATE] Toggle THEME',
  SetTheme = '[APP STATE] Set SetTheme',
}

export const toggleThemeAction = createAction(Actions.ToggleTheme);
export const setThemeAction = createAction(
  Actions.SetTheme,
  props<{ isDarkTheme: boolean }>()
);
