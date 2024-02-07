import { INITIAL_APP_STATE } from '@constants';
import { AppState } from '@interfaces';
import { createReducer, on } from '@ngrx/store';
import { setThemeAction, toggleThemeAction } from '@store/actions';

const toggleThemeReducer = (state: AppState): AppState => {
  return {
    ...state,
    isDarkTheme: !state.isDarkTheme,
  };
};

const setThemeReducer = (
  state: AppState,
  actionProps: { isDarkTheme: boolean }
): AppState => {
  return {
    ...state,
    isDarkTheme: actionProps.isDarkTheme,
  };
};

export const appReducer = createReducer(
  INITIAL_APP_STATE,
  on(toggleThemeAction, toggleThemeReducer),
  on(setThemeAction, setThemeReducer)
);
